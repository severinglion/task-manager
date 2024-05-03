CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE projectTasks (
    id INTEGER PRIMARY KEY,
    projectId BIGINT,
    name VARCHAR(255),
    description VARCHAR(512),
    assignee INT,
    docRef VARCHAR(512),
    dueDate VARCHAR(10),
    completed BOOL,
    FOREIGN KEY (projectId) REFERENCES projects(id)
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