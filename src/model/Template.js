import db from '@/model/db/db';
import { ResourceLinks } from './ResourceLinks';

export class Template {
  constructor() {
    this.db = db;
  }

  async getList() {
    return await this.db('templates')
      .select();
  }

  async getTemplate(id) {
    const template = await this.db('templates')
      .where('id', id)
      .select()
      .first();
    if(!template) 
      return null;

    const tasks = await this.db('templateTasks')
      .where('templateId', id)
      .select();

    template.tasks = tasks;
    return template; 
  }

  async createTemplate(name) {
    return await this.db('templates')
      .insert({name});
  }

  async deleteTemplate(id) {
    const resourceModel = new ResourceLinks();
    await resourceModel.deleteTemplateResources(id);

    await this.db('templateTasks')
      .where('templateId', id)
      .del();

    return await this.db('templates')
      .where('id', id)
      .del();
  }

  async createTemplateTask(task) {
    return await this.db('templateTasks')
      .insert(task);
  }

  async deleteTemplateTask(id) {
    return await this.db('templateTasks')
      .where({id})
      .del();
  }

  async getTemplateTask(id) {
    return await this.db('templateTasks')
      .where({id})
      .select()
      .first();
  }
}

export default Template;
