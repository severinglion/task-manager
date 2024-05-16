"use server";

import { revalidatePath } from "next/cache";
import { faker } from "@faker-js/faker";
import Project from "@/model/Project";
import TaskModel from "@/model/TaskModel";
import TaskStages from "@/model/TaskStages";

function seedStage() {
  const stages = [
    TaskStages.NONE,
    TaskStages.SALES,
    TaskStages.CLIENT_ONBOARDING,
    TaskStages.PART_ONBOARDING,
    TaskStages.PROGRAM_RUN,
    TaskStages.POST_PROGRAM,
  ];

  return faker.helpers.arrayElement(stages);
}

function seedTaskName() {
  return faker.hacker.verb() + " " + faker.hacker.noun();
}

function seedUrl() {
  const urlPool = [
    "https://google.ca",
    "https://microsoft.com",
    "https://amazon.ca",
    "https://youtube.com",
    "https://facebook.com",
    "https://shopify.ca",
  ];

  return faker.helpers.arrayElement(urlPool);
}

function seedDueDate() {
  const referenceDate = new Date();
  const soon = faker.date.soon({ refDate: referenceDate }).toISOString();
  const parts = soon.split("T");
  const date = parts[0].split("-");
  return `${date[1]}/${date[2]}/${date[0]}`;
}

function seedProjectTask(projectId) {
  return {
    name: seedTaskName(),
    description: faker.lorem.sentences(
      faker.helpers.arrayElement[(1, 2, 3, 4)]
    ),
    assignee: faker.helpers.arrayElement([1, 2, 3]),
    docRef: seedUrl(),
    dueDate: seedDueDate(),
    completed: false,
    stage: seedStage(),
    projectId,
  };
}

export async function seedProjectTasks(projectId, count = 25) {
  console.log("seeding tasks for ", projectId);
  const model = new TaskModel("projectTasks");

  for (let i = 0; i < count; i++) {
    const task = seedProjectTask(projectId);
    await model.create(task);
  }

  const revalidateUrl = `http://localhost:3000/project/${projectId}`;

  revalidatePath(revalidateUrl);
}
