import { stringify } from "postcss";
import TaskList from "./TaskList";
import { db } from "./db/db";

export class Project {
  constructor() {
    this.db = db
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

  async create() {

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
