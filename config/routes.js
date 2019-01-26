/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'post /eventos/create': 'EventoController.create',
  'get /eventos/:id': 'EventoController.getOne',
  'get /eventos/': 'EventoController.getAll',
  'patch /eventos/:id': 'EventoController.update',
  'delete /eventos/:id': 'EventoController.delete',

  'post /ingressos/create': 'IngressoController.create',
  'get /ingressos/:id': 'IngressoController.getOne',
  'get /ingressos/': 'IngressoController.getAll',
  'patch /ingressos/:id': 'IngressoController.update',
  'delete /ingressos/:id': 'IngressoController.delete',

  'post /tipo_ingressos/create': 'TipoIngressoController.create',
  'get /tipo_ingressos/:id': 'TipoIngressoController.getOne',
  'get /tipo_ingressos/': 'TipoIngressoController.getAll',
  'patch /tipo_ingressos/:id': 'TipoIngressoController.update',
  'delete /tipo_ingressos/:id': 'TipoIngressoController.delete',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
