import devDatabase from '@/model/DevDatabase';
import Project from '@/model/Project';


// Create a new project
export async function POST (formData) {
  devDatabase.addProject(new Project(formData));
}