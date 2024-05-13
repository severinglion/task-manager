import { stringify } from "postcss";
import TaskList from "./TaskList";
import { db } from "./db/db";

export class Project {
  constructor() {
    this.db = db
  }

  async index() {
    const listing = await this.db('projects')
      .select();
    for(let i = 0; i < listing.length; i++) {
      const totalTasks = await this.db('projectTasks')
        .where('projectId', listing[i].id)
        .count({count: 'id'})
        .first();
      const completedTasks = await this.db('projectTasks')
        .where({ projectId: listing[i].id, completed: true})
        .count({count: 'id'})
        .first();
      listing[i].totalTasks = totalTasks.count;
      listing[i].completedTasks = completedTasks.count;
    }

    return listing; 
  }

  async get(id) {
    this.id = id;
    try {
      const proj = await this.db('projects')
      .where('id', id)
      .first();
    if(!proj) {
      throw new Error('Project not found');
    }
    this.name = proj.name;

    this.tasks = await this.db('projectTasks')
      .where('projectId', id)
      .select();
    } catch (e) {
      console.error('Database error', e);
    }
  }

  async create(name, startDate) {
    if(!name || typeof name !== 'string') {
      throw new Error('Project requires a name');
    }
    return await this.db('projects')
      .insert({name, startDate})
  }

  async delete(id) {
    await this.db('projectTasks')
      .where('projectId', id)
      .del();

    await this.db('projects')
      .where(id, id)
      .del();

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
        tasks: this.tasks
    };
  }

  toJSON() {
    const summary = this.summary();
    return JSON.stringify(summary);
  }
}

export default Project;
