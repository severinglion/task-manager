'use server'

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

export async function addTask(id) {
  const res = await fetch(
    `http://localhost:3000/api/project/${id}`,
    {method: 'POST'}
  );
  if(!res.ok) {
    throw new Error('Failed to post data')
  }
  return await getProject(id);
}