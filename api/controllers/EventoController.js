/**
 * EventoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	create: function(req, res) {		
		return res.json({res: 'criado'})
	},

	getOne: function(req, res) {
		return res.json(Evento.find({nome: 'show'}))
	},

	getAll: function(req, res) {
		return Evento.find({id: req.param('id')})
	},

	update: function(req, res) {
		return res.json({res: 'criado'})
	},

	delete: function(req, res) {
		return res.json({res: 'criado'})
	}

};

