import React, { useState, useEffect } from "react";
import apiSettings from "../../API";
import Spinner from "../../components/Spinner/index";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //Estado del formulario
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const getProjectById = async () => {
    const project = await apiSettings.project.getProject(id);
    setState(project);
  };

  useEffect(() => {
    getProjectById();
  }, []);

  //Tomar el valor de cada input
  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  //Guardar proyecto
  const handleSubmit = async (event) => {
    setState({ ...state, showSpinner: true });
    event.preventDefault();
    await apiSettings.project.updateProject(id, state);
    setState({ ...state, showSpinner: false });
    navigate("/proyectos");
  };

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
                autoComplete="off"
                value={state.title}
                placeholder="Título"
                title="Título"
                required
                maxLength={50}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input
                aria-label="description-input"
                id="description"
                type="text"
                className="form-control"
                name="description"
                autoComplete="off"
                value={state.description}
                placeholder="Descripción"
                title="Descripción"
                required
                maxLength={100}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success mt-4">
              Actualizar Proyecto
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProject;
