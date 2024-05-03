import Project from '@/model/Project';
import TaskModel from '@/model/TaskModel';

export async function POST(request, {params}) {
  const id = params.id;
  console.log('add request', request.body);
  const model = new TaskModel('projectTasks');
  const response = await model.create(request.body);
  console.log('response', response);

  return new Response(200);
}

export async function GET(request, {params}) {
  try {
    const project = new Project()
    await project.get(parseInt(params.id));
    console.log('project', project.summary());
    return new Response(project.toJSON(), {
      headers: {
        'content-type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
  }
}