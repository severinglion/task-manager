export const database = {
  projects: [],
  templates: [],
  users: [
    {
      id: 1,
      name: 'Kathy Schwarz',
      email: 'kathy@example.com',
    },
    {
      id: 2,
      name: 'Joshua Bunt',
      email: 'joshua@example.com',
    },
    {
      id: 3,
      name: 'Denise Muller',
      email: 'denise@example.com',
    }
  ],
};

database.getNextProjectId = () => {
  const max = database.projects.reduce((max, project) => Math.max(max, project.id), 0);
  return max + 1;
}

database.getNextTemplateId = () => {
  const max = database.templates.reduce((max, template) => Math.max(max, template.id), 0);
  return max + 1;
}

database.addProject = (project) => {
  project.id = database.getNextProjectId();
  database.projects.push(project);
};

database.getProject = (id) => {
  return database.projects.find((project) => project.id === id);
};

database.removeProject = (id) => {
  database.projects = database.projects.filter((project) => project.id !== id);
}

database.addTemplate = (template) => {
  template.id = database.getNextTemplateId();
  database.templates.push(template);
}

database.getTemplate = (id) => {
  return database.templates.find((template) => template.id === id);
}

database.removeTemplate = (id) => {
  database.templates = database.templates.filter((template) => template.id !== id);
}

database.getUsers = () => {
  return database.users;
}

export default database;