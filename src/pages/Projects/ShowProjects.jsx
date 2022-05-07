import React, { useState, useEffect } from "react";
import apiSettings from "../../API";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
//FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
//SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ShowProjects = () => {
  const MySwal = withReactContent(Swal);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    const allProjects = await apiSettings.project.getAllProjects();
    setProjects(allProjects);
  };

  const deleteProject = async (id) => {
    const result = await MySwal.fire({
      title: "¿Estás seguro?",
      text: `Será eliminado el registro ${id}. También se eliminarán las tareas relacionadas a este proyecto.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
    });
    if (result.isConfirmed) {
      const res = await apiSettings.project.deleteProject(id);
      await apiSettings.task.deleteAllTasks(id);
      getAllProjects();

      await MySwal.fire({
        position: "top-end",
        title: "Registro eliminado!",
        html: res.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 d-flex justify-content-center p-4">
          <NavLink to="/crear-proyecto" className="btn btn-primary btn-lg" aria-label="new-link">
            <FontAwesomeIcon icon={faCirclePlus} /> Añadir un nuevo proyecto
          </NavLink>
        </div>
        <div className="col-12">
          <Table striped bordered>
            <thead>
              <tr className="bg-dark text-light text-center">
                <th>ID</th>
                <th>TÍTULO</th>
                <th>DESCRIPCIÓN</th>
                <th>CREADO</th>
                <th>ACTUALIZADO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="align-middle">
                  <td className="text-center">{project.id} </td>
                  <td>{project.title} </td>
                  <td>{project.description}</td>
                  <td className="text-center">{project.createdAt}</td>
                  <td className="text-center">{project.updatedAt}</td>
                  <td className="d-flex justify-content-evenly">
                    <NavLink
                      to={`/editar-proyecto/${project.id}`}
                      className="btn btn-info btn-xs"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </NavLink>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="btn btn-danger btn-xs"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShowProjects;
