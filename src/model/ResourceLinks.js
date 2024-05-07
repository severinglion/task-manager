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

  async mapResourceToTemplate(resourceId, templateId) {
    return await this.db('templateResources')
      .insert({resourceId, templateId});
  }

  async mapResourceToProject(resourceId, projectId) {
    return await this.db('projectResources')
      .insert({resourceId, projectId});
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