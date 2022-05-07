import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
//Routes
import taskRoutes from "./routes/TaskRoutes";
import projectsRoutes from "./routes/ProjectRoutes";

const App = () => (
  <div className="wrapper">
    <div className="content-wrapper">
      <Header />
      <section className="content">
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {/* Task routes */}
            {taskRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}

            {/* Project routes */}
            {projectsRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default App;
