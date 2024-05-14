import db from "./db/db";
import TaskStages from "@/model/TaskStages";

export class TaskModel {
  constructor(type) {
    if (type !== "projectTasks" && type !== "templateTasks")
      throw new RangeError("Unsupported type " + type);
    this.db = db;
    this.type = type;
    this.stages = TaskStages;
  }

  async create(task) {
    try {
      task.completed = task.completed || false;
      return await this.db(this.type).insert(task);
    } catch (e) {
      console.error("Database error", { cause: e });
    }
  }

  async update(id, values) {
    try {
      return await this.db(this.type).update(values).where("id", id);
    } catch (e) {
      console.error("Database error", { cause: e });
    }
  }

  async delete(id) {
    try {
      return await this.db(this.type).where("id", id).del();
    } catch (e) {
      console.error("Database Error", { cause: e });
    }
  }
}

export default TaskModel;
