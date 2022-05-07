//Pages
import ShowTasks from "../pages/Tasks/ShowTaks";
import AddTask from "../pages/Tasks/AddTask";
import EditTask from "../pages/Tasks/EditTask";

const taskRoutes = [
  { id: 1, path: "/tareas", component: <ShowTasks /> },
  { id: 2, path: "/crear-tarea", component: <AddTask /> },
  { id: 3, path: "/editar-tarea/:id", component: <EditTask /> },
];

export default taskRoutes;
