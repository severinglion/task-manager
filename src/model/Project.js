import TaskList from "./TaskList";

export class Project {
  constructor(formData) {
    tasks = new TaskList();
    this.name = formData.get('name');
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

export default Project;
