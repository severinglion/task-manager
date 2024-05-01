
export default class TaskList {
  constructor() {
    this.tasks = []
  }

  _nextId() {
    return this.tasks.reduce(
      (max, task) => Math.max(max, task.id), 
      0
    ) + 1;
  }

  add(task) {
    task.id = this._nextId();
    this.tasks.push(task);
  }

  remove(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  update(id, task) {
    this.tasks = this.tasks.map(t => t.id === id ? task : t);
  }

}