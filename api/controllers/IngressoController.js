/**
 * IngressoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	create: async (req, res) => {
		await Ingresso.create(req.body)		
		return res.json({res: 'criado'})
	},

	getOne: async (req, res) => {
    ingresso = await Ingresso.findOne({ id: req.param('id') }).populate('evento')
    return res.json(ingresso);
  }, 

	getAll: async (req, res) => {
		ingressos = await Ingresso.find().populate('evento')
		return res.json(ingressos);
	},

	update: async (req, res) => {
		await Ingresso.updateOne({ id: req.param('id') }).set(req.body)
		return res.json('updated')
	},

	delete: async (req, res) => {
		await Ingresso.destroyOne({ id: req.param('id') })
    return res.json('deleted')
  } 

};
