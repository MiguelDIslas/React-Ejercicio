"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("./config");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiSettings = {
  //Project
  project: {
    getAllProjects: function getAllProjects() {
      var response;
      return regeneratorRuntime.async(function getAllProjects$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(_config.API_URL, "/proyectos")));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getProject: function getProject(id) {
      var response;
      return regeneratorRuntime.async(function getProject$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(_config.API_URL, "/proyectos/").concat(id)));

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    createProject: function createProject(state) {
      return regeneratorRuntime.async(function createProject$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].post("".concat(_config.API_URL, "/proyectos"), state));

            case 2:
              return _context3.abrupt("return", {
                message: "Proyecto creado"
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    updateProject: function updateProject(id, state) {
      return regeneratorRuntime.async(function updateProject$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].put("".concat(_config.API_URL, "/proyectos/").concat(id), state));

            case 2:
              return _context4.abrupt("return", {
                message: "Proyecto actualizado"
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    deleteProject: function deleteProject(id) {
      return regeneratorRuntime.async(function deleteProject$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_config.API_URL, "/proyectos/").concat(id)));

            case 2:
              return _context5.abrupt("return", {
                message: "Proyecto eliminado correctamente"
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  },
  //Tasks
  task: {
    getAllTasks: function getAllTasks() {
      var response;
      return regeneratorRuntime.async(function getAllTasks$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(_config.API_URL, "/tareas")));

            case 2:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      });
    },
    getTask: function getTask(id) {
      var response;
      return regeneratorRuntime.async(function getTask$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(_config.API_URL, "/tareas/").concat(id)));

            case 2:
              response = _context7.sent;
              return _context7.abrupt("return", response.data);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      });
    },
    createTask: function createTask(state) {
      return regeneratorRuntime.async(function createTask$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].post("".concat(_config.API_URL, "/tareas"), state));

            case 2:
              return _context8.abrupt("return", {
                message: "Tarea creada"
              });

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      });
    },
    updateTask: function updateTask(id, state) {
      return regeneratorRuntime.async(function updateTask$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].put("".concat(_config.API_URL, "/tareas/").concat(id), state));

            case 2:
              return _context9.abrupt("return", {
                message: "Tarea actualizado"
              });

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      });
    },
    deleteTask: function deleteTask(id) {
      return regeneratorRuntime.async(function deleteTask$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_config.API_URL, "/tareas/").concat(id)));

            case 2:
              return _context10.abrupt("return", {
                message: "Tarea eliminada correctamente"
              });

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      });
    },
    deleteAllTasks: function deleteAllTasks(id) {
      return regeneratorRuntime.async(function deleteAllTasks$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_config.API_URL, "/tareas/proyecto/").concat(id)));

            case 2:
              return _context11.abrupt("return", {
                message: "Tareas eliminada correctamente"
              });

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      });
    }
  }
};
var _default = apiSettings;
exports["default"] = _default;