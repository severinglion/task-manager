import {db, database} from '@/model/DevDatabase';
import Program from '@/model/Project';
import {promisify} from 'node:util';

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


const defaultProgram = new Program()
defaultProgram.addTask(defaultTasks[0]);
defaultProgram.addTask(defaultTasks[1]);
defaultProgram.setName('My Program');

database.addProject(defaultProgram);

export async function POST(request, {params}) {
  const id = params.id;
  console.log('add request', request.body);
  const program = database.getProject(id);
  program.addTask(request.body);
  console.log('after adding task', database);
  return new Response(200);
}

export async function GET(request, {params}) {
  try {
    const 
    return new Response(JSON.stringify(program), {
      headers: {
        'content-type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
  }
}