CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE projectTasks (
    id INTEGER PRIMARY KEY,
    projectId INTEGER,
    name VARCHAR(255),
    description VARCHAR(512),
    stage INT,
    assignee INT,
    docRef VARCHAR(512),
    dueDate VARCHAR(10),
    completed boolean,
    FOREIGN KEY (projectId) REFERENCES projects(id)
);
CREATE TABLE templates(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE resources (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    href VARCHAR(1024)
);
CREATE TABLE projectResources (
    id INTEGER PRIMARY KEY,
    projectId INTEGER,
    resourceId INTEGER,
    FOREIGN KEY (projectId) REFERENCES projects(id),
    FOREIGN KEY (resourceId) REFERENCES resources(id)
);
CREATE TABLE templateResources (
    id INTEGER PRIMARY KEY,
    templateId INTEGER,
    resourceId INTEGER,
    FOREIGN KEY (templateId) REFERENCES templates(id),
    FOREIGN KEY (resourceId) REFERENCES resources(id)
);
CREATE TABLE templateTasks (
    id INTEGER PRIMARY KEY,
    templateId INTEGER,
    name VARCHAR(255),
    description VARCHAR(512),
    stage INT,
    assignee INT,
    docRef VARCHAR(512),
    dueDate VARCHAR(10),
    completed boolean,
    FOREIGN KEY (templateId) REFERENCES templates(id)
);

INSERT INTO projects (name) VALUES ('My First Project');
INSERT INTO projectTasks (
    projectId,
    name,
    description,
    assignee,
    docRef,
    dueDate,
    completed
) VALUES (
    '1',
    'Learn React',
    'Learn react from documentation',
    '1',
    'https://futurefocusca.sharepoint.com/sites/BusinessProcessDev2/SitePages/Training-Document.aspx',
    '01/02/03',
    '0'
); INSERT INTO projectTasks (
    projectId,
    name,
    description,
    assignee,
    docRef,
    dueDate,
    completed
) VALUES (
    '1',
    'Learn SQL',
    'Learn SQL from documentation',
    '2',
    'https://futurefocusca.sharepoint.com/sites/BusinessProcessDev2/SitePages/Training-Document.aspx',
    '01/02/03',
    '0'
);