import React, { useState, useEffect } from "react";
import apiSettings from "../../API";
import Spinner from "../../components/Spinner/index";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //Estado del formulario
  const [state, setState] = useState({
    title: "",
    description: "",
    projectId: "",
  });
  const [projects, setProjects] = useState([]);

  //Tomar el valor de cada input
  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  //Editar tarea
  const handleSubmit = async (event) => {
    setState({ ...state, showSpinner: true });
    event.preventDefault();
    await apiSettings.task.updateTask(id, state);
    setState({ ...state, showSpinner: false });
    navigate("/tareas");
  };

  useEffect(() => {
    getAllProjects();
    getTaskById();
  }, []);

  const getAllProjects = async () => {
    const allProjects = await apiSettings.project.getAllProjects();
    setProjects(allProjects);
  };

  const getTaskById = async () => {
    const task = await apiSettings.task.getTask(id);
    setState(task);
  };

  console.log(state);
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6 p-4">
        {state.showSpinner ? (
          <Spinner />
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group pb-2">
              <label htmlFor="title">Título</label>
              <input
                aria-label="title-input"
                id="title"
                type="text"
                className="form-control"
                name="title"
                required
                autoComplete="off"
                placeholder="Título"
                title="Título"
                value={state.title}
                maxLength={50}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pb-2">
              <label htmlFor="description">Descripción</label>
              <input
                aria-label="description-input"
                id="description"
                type="text"
                className="form-control"
                name="description"
                autoComplete="off"
                placeholder="Descripción"
                title="Descripción"
                required
                value={state.description}
                maxLength={100}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectId">Proyecto</label>
              <div className="controls">
                <select
                  aria-label="projectId-select"
                  id="projectId"
                  className="form-control"
                  name="projectId"
                  placeholder="Proyecto"
                  title="Selecciona un Proyecto"
                  required
                  value={state.projectId}
                  onChange={handleChange}
                >
                  <option value="" disabled="">
                    Selecciona una opción
                  </option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-success mt-4">
              Editar Tarea
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTask;
