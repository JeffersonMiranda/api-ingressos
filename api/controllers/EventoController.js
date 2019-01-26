/**
 * EventoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	create: async (req, res) => {
		await Evento.create(req.body)		
		return res.json({res: 'criado'})
	},

	getOne: async (req, res) => {
    evento = await Evento.find({ id: req.param('id') })
    return res.json(evento);
  }, 

	getAll: async (req, res) => {
		eventos = await Evento.find()
		return res.json(eventos);
	},

	update: async (req, res) => {
		await Evento.updateOne({ id: req.param('id') }).set(req.body)
		return res.json('updated')
	},

	delete: async (req, res) => {
		await Evento.destroyOne({ id: req.param('id') })
    return res.json('deleted')
  } 
};

