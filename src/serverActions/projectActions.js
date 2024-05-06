'use server'
import TaskModel from "@/model/TaskModel"
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