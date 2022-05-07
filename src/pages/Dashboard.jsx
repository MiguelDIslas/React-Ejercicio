import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import apiSettings from "../API";
import "./Dashboard.style.scss";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const allProjects = await apiSettings.project.getAllProjects();
    const allTasks = await apiSettings.task.getAllTasks();
    setProjects(allProjects);
    setTasks(allTasks);
  };

  return (
    <div className="row p-5">
      <div className="col-6 d-flex justify-content-center">
        <Card text="dark" className="mb-2">
          <Card.Header className="bg-dark text-light text-center">
            PROYECTOS
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center">{projects.length} </Card.Title>
            <Card.Text className="text-justify">
              Este es el número de proyectos registrados hasta el momento.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col-6 d-flex justify-content-center">
        <Card text="dark" className="mb-2">
          <Card.Header className="bg-dark text-light text-center">
            TAREAS
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center">{tasks.length}</Card.Title>
            <Card.Text className="text-justify">
              Este es el número de tareas registradas hasta el momento.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
