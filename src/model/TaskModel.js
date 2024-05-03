import db from "./db/db";


export class TaskModel {
  constructor(type) {
    if(type !== 'projectTasks' && type !== 'templateTasks')
      throw new RangeError('Unsupported type ' + type);
    this.db = db;
    this.type = type; 
  }

  async create(task) {
    try {
      return await this.db(this.type)
      .insert(task)
    } catch (e) {
      console.error('Database error', {cause: e});
    }
  }
}

export default TaskModel;
