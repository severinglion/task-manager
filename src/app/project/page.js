

export const metadata = {
  title: "New Project",
  description: "Create and configure your project here",
};

export default function NewProjectForm() {



  return (
    <main>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}
