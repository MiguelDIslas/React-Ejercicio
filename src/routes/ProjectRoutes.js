//Pages
import ShowProjects from "../pages/Projects/ShowProjects";
import AddProject from "../pages/Projects/AddProject";
import EditProject from "../pages/Projects/EditProject";

const projectsRoutes = [
  { id: 1, path: "/proyectos", component: <ShowProjects /> },
  { id: 2, path: "/crear-proyecto", component: <AddProject /> },
  { id: 3, path: "/editar-proyecto/:id", component: <EditProject /> },
];

export default projectsRoutes;
