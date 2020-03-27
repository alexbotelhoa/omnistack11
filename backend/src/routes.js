/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/**
 * Sessions
 */
routes.post('/sessions', celebrate({
   [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
   })
}), SessionController.create);

/**
 * Ongs
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
   })
}), OngController.create);

/**
 * Profile
 */
routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
   }).unknown()
}), ProfileController.index);

/**
 * Incidents
 */
routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
   })
}), IncidentController.index);
routes.post('/incidents', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
   }).unknown(),
   [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().max(50),
      description: Joi.string().required().max(300),
      value: Joi.number().required(),
   })
}), IncidentController.create);
routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
   })
}), IncidentController.delete);

module.exports = routes;