import TaskList from "./TaskList";

export class Project {
  constructor() {
    this.tasks = new TaskList();
  }

  nextId() {
    const max = this.tasks.reduce((max, task) => Math.max(max, task.id), 0);
    return max + 1;
  }

  loadForm(formData) {

  }

  getTasks() {
    return [...this.tasks]
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    this.tasks.add(task);
  }

  removeTask(task) {
    this.tasks.remove(task);
  }

  updateTask(task) {
    this.tasks.update(task);
  }
}

export default Project;
