import TaskModel from "@/model/TaskModel";


export async function PATCH(req, res) {
  
  const {id, taskId} = req.params;
  const revalidateUrl = `http://localhost:3000/projects/${id}`

  const model = new TaskModel('projectTasks');
  const result = await model.update(taskId, req.body);
  console.log(result);
  res.revalidateUrl(revalidateUrl);
  res.status(200);
}