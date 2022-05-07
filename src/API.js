import { API_URL } from "./config";
import axios from "axios";

const apiSettings = {
  //Project
  project: {
    getAllProjects: async () => {
      const response = await axios.get(`${API_URL}/proyectos`);
      return response.data;
    },
    getProject: async (id) => {
      const response = await axios.get(`${API_URL}/proyectos/${id}`);
      return response.data;
    },
    createProject: async (state) => {
      await axios.post(`${API_URL}/proyectos`, state);
      return { message: "Proyecto creado" };
    },
    updateProject: async (id, state) => {
      await axios.put(`${API_URL}/proyectos/${id}`, state);
      return { message: "Proyecto actualizado" };
    },
    deleteProject: async (id) => {
      await axios.delete(`${API_URL}/proyectos/${id}`);
      return { message: "Proyecto eliminado correctamente" };
    },
  },
  //Tasks
  task: {
    getAllTasks: async () => {
      const response = await axios.get(`${API_URL}/tareas`);
      return response.data;
    },
    getTask: async (id) => {
      const response = await axios.get(`${API_URL}/tareas/${id}`);
      return response.data;
    },
    createTask: async (state) => {
      await axios.post(`${API_URL}/tareas`, state);
      return { message: "Tarea creada" };
    },
    updateTask: async (id, state) => {
      await axios.put(`${API_URL}/tareas/${id}`, state);
      return { message: "Tarea actualizado" };
    },
    deleteTask: async (id) => {
      await axios.delete(`${API_URL}/tareas/${id}`);
      return { message: "Tarea eliminada correctamente" };
    },
    deleteAllTasks: async (id) => {
      await axios.delete(`${API_URL}/tareas/proyecto/${id}`);
      return { message: "Tareas eliminada correctamente" };
    },
  },
};

export default apiSettings;
