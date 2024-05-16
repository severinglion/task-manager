import { db } from "./db/db";
import { ResourceLinks } from "./ResourceLinks";
import TaskModel from "./TaskModel";
import Template from "./Template";
import { addDays } from "date-fns";
export class Project {
  constructor() {
    this.db = db;
  }

  async index() {
    const listing = await this.db("projects").select();
    for (let i = 0; i < listing.length; i++) {
      const totalTasks = await this.db("projectTasks")
        .where("projectId", listing[i].id)
        .count({ count: "id" })
        .first();
      const completedTasks = await this.db("projectTasks")
        .where({ projectId: listing[i].id, completed: true })
        .count({ count: "id" })
        .first();
      listing[i].totalTasks = totalTasks.count;
      listing[i].completedTasks = completedTasks.count;
    }

    return listing;
  }

  async get(id) {
    this.id = id;
    try {
      const proj = await this.db("projects").where("id", id).first();
      if (!proj) {
        throw new Error("Project not found");
      }
      this.name = proj.name;

      this.tasks = await this.db("projectTasks")
        .where("projectId", id)
        .select();
    } catch (e) {
      console.error("Database error", e);
    }
  }

  async createFromTemplate(name, startDate, templateId) {
    if (!name || typeof name !== "string") {
      throw new Error("Project requires a name");
    }

    if (!templateId || typeof templateId !== "number") {
      throw new Error("Project requires a template id");
    }

    const templateModel = new Template();
    const resourceModel = new ResourceLinks();
    const taskModel = new TaskModel("projectTasks");
    const template = await templateModel.getTemplate(templateId);
    const resources = await resourceModel.getTemplateResources(templateId);

    const [projectId] = await this.db("projects").insert({ name, startDate });

    console.log("template", template);
    console.log("project", projectId);
    console.log("resources", resources);

    for (let i = 0; i < template.tasks.length; i++) {
      const templateTask = template.tasks[i];
      const dueDate = !Boolean(startDate)
        ? null
        : addDays(new Date(startDate), templateTask.dayOffset || 0);

      console.log("calculated due date", dueDate);

      const projectTask = {
        projectId: projectId,
        name: templateTask.name,
        description: templateTask.description,
        assignee: templateTask.assignee,
        docRef: templateTask.docRef,
        stage: templateTask.stage,
        dueDate,
        completed: false,
      };

      const [taskId] = await taskModel.create(projectTask);

      const taskResourceMappings = resources.filter(
        (resource) => resource.taskId === templateTask.id
      );
      for (let j = 0; j < taskResourceMappings.length; j++) {
        const templateMappedResource = taskResourceMappings[j];
        await resourceModel.mapResourceToProjectTask(
          templateMappedResource.resourceId,
          projectId,
          taskId
        );
      }
    }
  }

  async create(name, startDate, templateId) {
    console.log("Project.create(", name, startDate, templateId, ")");
    if (templateId) {
      return await this.createFromTemplate(name, startDate, templateId);
    }
    if (!name || typeof name !== "string") {
      throw new Error("Project requires a name");
    }
    return await this.db("projects").insert({ name, startDate });
  }

  async delete(id) {
    await this.db("projectTasks").where("projectId", id).del();

    await this.db("projects").where(id, id).del();

    return true;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  summary() {
    return {
      id: this.id,
      name: this.name,
      tasks: this.tasks,
    };
  }

  toJSON() {
    const summary = this.summary();
    return JSON.stringify(summary);
  }
}

export default Project;
