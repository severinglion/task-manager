
const defaultTasks = [
  {
    id: 1,
    name: 'Learn React',
    description: 'Learn React and its ecosystem',
    completed: false,
    dueDate: '2021-01-01',
    assignee: 2,
    docRef: 'https://futurefocusca.sharepoint.com/sites/BusinessProcessDev2/SitePages/Training-Document.aspx'
  },
  {
    id: 2,
    name: 'Watch training video',
    description: 'Watch the onboarding training video',
    completed: true,
    dueDate: '2021-01-01',
    assignee: 1,
    docRef: 'https://futurefocusca.sharepoint.com/sites/BusinessProcessDev2/SitePages/Training-Document.aspx'
  },
];
const tasks = {
  items: [...defaultTasks],
}

tasks.nextId = () => tasks.items.length + 1;
tasks.get = (id) => tasks.items.find(task => task.id === id);
tasks.add = (task) => tasks.items.push(task);
tasks.remove = (id) => tasks.items = tasks.items.filter(task => task.id !== id)

export async function POST() {
  const task = {
    id: tasks.nextId(),
    name: 'New Task',
    description: 'A new task',
    completed: false,
    dueDate: '',
    assignee: null,
    docRef: ''
  }
  tasks.add(task);
  return new Response(200);
}

export async function GET() {
  try {
    const body = JSON.stringify(tasks.items);
    return new Response(body, {
      headers: {
        'content-type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
  }
}