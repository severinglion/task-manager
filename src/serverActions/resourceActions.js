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