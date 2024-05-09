import db from "./db/db";

export class ResourceLinks {
  constructor() {
    this.db = db;
    this.resources = [];
  }

  async indexResources() {
    try {
      this.resources = await this.db('resources')
        .select();
    } catch (e) {
      console.error(e);
    }
    return [...this.resources];
  }


  async getResource(id) {
    return await this.db('resources')
      .where('id', id)
      .select()
      .first();
  }


  async loadProjectResources(projectId) {
    try {
      this.resources = await this.db('projectResources')
      .where('projectId', projectId) 
      .join('resources', 'resources.id', 'projectResources.resourceId')
      .select('resources.*', 'projectId');
    } catch (e) {
      console.error(e);
    }
    return [...this.resources]
  }

  async loadTemplateResources(templateId) {
    try {
      this.resources = await this.db('projectResources')
        .where('templateId', templateId) 
        .join('resources', 'resources.id', 'projectResources.resourceId')
        .select('resources.*', 'templateId');
    } catch (e) {
      console.error(e);
    }
    return [...this.resources]
  }
  
  async createResource(name, href) {
    return await this.db('resources')
      .insert({name, href});
  }

  async mapResourceToTemplateTask(resourceId, templateId, taskId) {
    return await this.db('templateResources')
      .insert({resourceId, templateId, taskId});
  }

  async getTemplateTaskResources(templateId, taskId) {
    return await this.db('templateResources')
      .where({templateId, taskId})
      .join('resources', 'templateResources.resourceId', 'resources.id')
      .select('resources.*', 'templateResources.templateId', 'templateResources.taskId');
  }

  async getTemplateResources(templateId) {
    return await this.db('templateResources')
      .where({templateId})
      .join('resources', 'templateResources.resourceId', 'resources.id')
      .select(
        'resources.*', 'templateResources.templateId', 'templateResources.taskId',
        'templateResources.id', 'templateResources.resourceId'
      );
  }

  async deleteTemplateResources(templateId) {
    return await this.db('templateResources')
      .where({templateId})
      .del();
  }

  async mapResourceToProjectTask(resourceId, projectId, taskId) {
    return await this.db('projectResources')
      .insert({resourceId, projectId, taskId});
  }

  async getProjectTaskResources(projectId, taskId) {
    return await this.db('projectResources')
    .where({projectId, taskId})
    .join('resources', 'projectResources.resourceId', 'resources.id')
    .select(
      'resources.*', 'projectResources.projectId', 'projectResources.taskId',
      'projectResources.id', 'projectResources.resourceId'
    );
  }

  async getProjectResources(projectId) {
    return await this.db('projectResources')
    .where({projectId})
    .join('resources', 'projectResources.resourceId', 'resources.id')
    .select(
      'resources.*', 'projectResources.projectId', 'projectResources.taskId',
      'projectResources.id', 'projectResources.resourceId'
    );
  }

  async deleteProjectResources(projectId) {
    return await this.db('projectResources')
      .where('projectId', projectId)
      .del();
  }

  async deleteProjectResourceMapping(resourceId) {
    return await this.db('projectResources')
      .where('id', resourceId)
      .del();
  }

  async deleteTemplateResourceMapping(resourceId) {
    return await this.db('templateResources')
      .where('id', resourceId)
      .del();
  }
  
  async deleteResource(id) {
    await this.db('projectResources')
      .where({resourceId: id})
      .del();

    await this.db('templateResources')
      .where({resourceId: id})
      .del();

    return await this.db('resources')
      .where('id', id)
      .del();
  }

  async updateResource(id, name, href) {
    return await this.db('resources')
      .where('id', id)
      .update({name, href});
  }
}