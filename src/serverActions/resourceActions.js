"use server"

import { ResourceLinks } from "@/model/ResourceLinks";
import { revalidatePath } from "next/cache";

export async function listResources(){
  const model = new ResourceLinks();
  const resources = await model.indexResources();
  return resources;
}

export async function getResource(id) {
  const model = new ResourceLinks();
  const resource = await model.getResource(id);
  return resource;
}

export async function updateResource(formData) {
  const id = formData.get('id');
  const name = formData.get('name');
  const href = formData.get('href');

  const model = new ResourceLinks();
  const response = await model.updateResource(id, name, href);
  revalidatePath(`/resources/${id}`);
  return response;
}

export async function createResource(formData) {
  const model = new ResourceLinks();
  const name = formData.get('name');
  const href = formData.get('href');
  const resource = await model.createResource(name, href);
  revalidatePath('/resources');
  return resource;
}

export async function deleteResource(id) {
  const model = new ResourceLinks();
  const resource = await model.deleteResource(id);
  revalidatePath('/resources');
  return resource;
}

export async function getProjectTaskResources(projectId, taskId) {
  const model = new ResourceLinks();
  return await model.getProjectTaskResources(projectId, taskId);
}

export async function getTemplateTaskResources(templateId, taskId) {
  const model = new ResourceLinks();
  return await model.getProjectTaskResources(templateId, taskId);
}

export async function createResourceProjectTaskMapping(formData) {
  const projectId = formData.get('projectId');
  const taskId = formData.get('taskId');
  const resourceId = formData.get('resourceId');
  const model = new ResourceLinks();
  const res = await model.mapResourceToProjectTask(resourceId, projectId, taskId);
  revalidatePath(`/project/${projectId}/task/${taskId}`);
  return res;
}

export async function createResourceTemplateTaskMapping(formData) {
  const templateId = formData.get('templateId');
  const taskId = formData.get('taskId');
  const resourceId = formData.get('resourceId');
  const model = new ResourceLinks();
  const res = await model.mapResourceToTemplateTask(resourceId, templateId, taskId);
  revalidatePath(`/template/${templateId}/task/${taskId}`)
  return res;
}

export async function deleteResourceProjectTaskMapping(projectId, taskId, mapId) {
  const model = new ResourceLinks();
  const res = await model.deleteProjectResourceMapping(mapId);
  revalidatePath(`/project/${projectId}/task/${taskId}`)
  return res;
}

export async function deleteResourceTemplateTaskMapping(templateId, taskId, mapId) {
  const model = new ResourceLinks();
  const res = await model.deleteTemplateResourceMapping(mapId);
  revalidatePath(`/template/${templateId}/task/${taskId}`)
  return res;
}
