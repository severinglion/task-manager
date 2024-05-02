'use server'
import { revalidatePath } from "next/cache"
export async function getProject(id) {
  const res = await fetch(`http://localhost:3000/api/project/${id}`)

  if(!res.ok) {
    console.log(res.statusText)
    throw new Error('Failed to fetch data')
  }

  return res.json();
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
  const url = `http://localhost:3000/${type}/${id}`
  const task = {
    id: id,
    type: type,
    name: formData.get('name'),
    description: formData.get('description'),
    assignee: formData.get('assignee'),
    docRef: formData.get('docRef'),
    dueDate: formData.get('dueDate')
  }

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(task),
  });

  if(!response.ok) {
    throw new Error('Failed to add task');
  }

  revalidatePath(url);

  return 'OK';
}