const express = require('express');
const routes = express.Router();
const ongsController = require('./controllers/OngController')
const incidentsController = require('./controllers/incidentsController')
const profileIncidentsController = require('./controllers/ProfileIncidentsController')
const sessionController = require('./controllers/sessionController')



routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.createOng);


routes.post('/incidents', incidentsController.createIncident);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileIncidentsController.index);

routes.post('/session', sessionController.createSession);



module.exports = routes;