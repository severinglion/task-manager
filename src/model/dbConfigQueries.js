export const migration = `
CREATE TABLE projects (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE projectTasks (
    id BIGINT NOT NULL AUTO_INCREMENT,
    projectId BIGINT,
    name VARCHAR(255),
    description VARCHAR(512),
    assignee INT,
    docRef VARCHAR(512),
    dueDate VARCHAR(10),
    completed BOOL
    PRIMARY KEY (id),
    FOREIGN KEY (projectId) REFERENCES projects(id)
);
`;

export function getAddProjectQuery(name) {
    return `INSERT INTO projects (name) VALUES (${name});`
}

export function selectProjectById(id) {
    return `SELECT * FROM projects WHERE id=${id};`;
}

export function selectProjectTasksByProjectId (id) {
    return `SELECT * FROM projectTasks WHERE projectId=${id};`;
}

export function getAddProjectTaskQuery(
    projectId,
    name,
    description,
    assignee,
    docRef,
    dueDate,
){
    return `INSERT INTO projectTasks (
        projectId,
        name,
        description,
        assignee,
        docRef,
        dueDate,
        completed
    ) VALUES (
        ${projectId},
        ${name},
        ${description},
        ${assignee},
        ${docRef},
        ${dueDate},
        0
    );`
}