import TaskList from "./TaskList";

export class Template {
  constructor(name) {
    tasks = new TaskList();
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    tasks.add(task);
  }

  removeTask(task) {
    tasks.remove(task);
  }

  updateTask(task) {
    tasks.update(task);
  }
}

export default Template;
