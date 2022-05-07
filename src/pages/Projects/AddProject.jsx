import React, { useState } from "react";
import apiSettings from "../../API";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/index";

const AddProject = () => {
  const navigate = useNavigate();
  //Estado del formulario
  const [state, setState] = useState({
    title: "",
    description: "",
    showSpinner: false,
  });

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
    await apiSettings.project.createProject(state);
    setState({ ...state, showSpinner: false });
    navigate("/proyectos");
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6 p-4">
        {state.showSpinner ? (
          <Spinner />
        ) : (
          <form action="" onSubmit={handleSubmit} aria-label="project-form">
            <div className="form-group pb-2">
              <label htmlFor="title">Título</label>
              <input
                aria-label="title-input"
                id="title"
                type="text"
                className="form-control"
                name="title"
                autoComplete="off"
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
                placeholder="Descripción"
                title="Descripción"
                required
                maxLength={100}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success mt-4">
              Guardar Proyecto
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProject;
