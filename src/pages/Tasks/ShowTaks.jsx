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

const ShowTasks = () => {
  const MySwal = withReactContent(Swal);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const allTaks = await apiSettings.task.getAllTasks();
    setTasks(allTaks);
  };

  const deleteTask = async (id) => {
    const result = await MySwal.fire({
      title: "¿Estás seguro?",
      text: `Será eliminado el registro ${id}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
    });
    if (result.isConfirmed) {
      const res = await apiSettings.task.deleteTask(id);
      getAllTasks();

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
          <NavLink
            to="/crear-tarea"
            className="btn btn-success btn-lg"
            aria-label="new-link"
          >
            <FontAwesomeIcon icon={faCirclePlus} /> Añadir una nueva tarea
          </NavLink>
        </div>
        <div className="col-12">
          <Table striped bordered>
            <thead>
              <tr className="bg-dark text-light text-center">
                <th>ID</th>
                <th>TÍTULO</th>
                <th>DESCRIPCIÓN</th>
                <th>PROYECTO</th>
                <th>CREADA</th>
                <th>ACTUALIZADA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="align-middle">
                  <td className="text-center">{task.id} </td>
                  <td>{task.title} </td>
                  <td>{task.description}</td>
                  <td>{task.project.title}</td>
                  <td className="text-center">{task.createdAt}</td>
                  <td className="text-center">{task.updatedAt}</td>
                  <td className="d-flex justify-content-evenly">
                    <NavLink
                      to={`/editar-tarea/${task.id}`}
                      className="btn btn-info btn-xs"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </NavLink>
                    <button
                      onClick={() => deleteTask(task.id)}
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

export default ShowTasks;
