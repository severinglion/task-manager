'use server'
import TaskModel from "@/model/TaskModel"
import Project from "@/model/Project"
import { revalidatePath } from "next/cache"
export async function getProject(id) {
  const res = await fetch(`http://localhost:3000/api/project/${id}`)

  if(!res.ok) {
    console.log(res.statusText)
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export async function setTaskCompleteStatus(taskId, projectId, value) {
  const model = new TaskModel('projectTasks');
  await model.update(taskId, {completed: value});
  revalidatePath(`http://localhost:3000/project/${projectId}`);
}

export async function deleteTask(taskId, projectId) {
  const model = new TaskModel('projectTasks');
  await model.delete(taskId);
  revalidatePath(`http://localhost:3000/project/${projectId}`)
}

export async function getUsers() {
  const res = await fetch('http://localhost:3000/api/user');

  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export async function addProjectTask(formData) {
  const type = formData.get('type');
  const id = formData.get('id');
  let model;
  if(type === 'project') {
    model = new TaskModel('projectTasks');
  } else {
    model = new TaskModel('templateTasks');
  }
  const task = {
    projectId: id,
    name: formData.get('name'),
    description: formData.get('description'),
    stage: formData.get('stage'),
    assignee: formData.get('assignee'),
    docRef: formData.get('docRef'),
    dueDate: formData.get('dueDate')
  }
  try {
    const response = await model.create(task);
    console.log(response);

  } catch(e) {
    console.error('Failed to create task', {cause: e})
  }


  revalidatePath(`http://localhost:3000/${type}/${id}`);

  return 'OK';
}


export async function getProjectListing() {
  const project = new Project()
  const listing = await project.index()
  return listing;
}

export async function createProject(formData) {
  const name = formData.get('name');
  const startDate = formData.get('startDate');
  const project = new Project();
  const res = await project.create(name, startDate);
  console.log('create response', res);
  revalidatePath('http://localhost:3000');
  return 'ok';
}

export async function deleteProject(id) {
  console.log('delete project', id);
  const project = new Project();
  const res = await project.delete(id);
  console.log('delete response', res);
  revalidatePath('http://localhost:3000');
  return 'ok';
}