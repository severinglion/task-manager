"use server"

import Template from "@/model/Template"
import { ImportExportOutlined } from "@mui/icons-material";
import { revalidatePath } from "next/cache";

export async function listTemplates() {
    const model = new Template();
    return await model.getList();
}

export async function getTemplate(id) {
    const model = new Template();
    return await model.getTemplate(id);
}

export async function createTemplate(formData) {
    const name = formData.get('name');
    const model = new Template();

    const res = await model.createTemplate(name);
    revalidatePath('http://localhost:3000/template')
    return res;
}

export async function addTemplateTask(formData) {
    const templateId = formData.get('templateId');
    const task = {
        templateId,
        name: formData.get('name'),
        description: formData.get('description'),
        assignee: formData.get('assignee'),
        docRef: formData.get('docRef'),
        stage: formData.get('stage'),
    };

    const model = new Template();
    const res = await model.createTemplateTask(task);
    revalidatePath(`http://localhost:3000/template/${templateId}`);
    return res;
}

export async function removeTemplateTask(templateId, taskId) {
    const model = new Template();
    const res = await model.deleteTemplateTask(taskId);
    revalidatePath(`http://localhost:3000/template/${templateId}`);
    return res;
}

export async function deleteTemplate(id) {
    const model = new Template();
    const res = await model.deleteTemplate(id);
    revalidatePath('http://localhost:3000/template')
    return res;
}
