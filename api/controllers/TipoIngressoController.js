/**
 * TipoIngressoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	create: async (req, res) => {
		await TipoIngresso.create(req.body)		
		return res.json({res: 'criado'})
	},

	getOne: async (req, res) => {
    tipoIngresso = await TipoIngresso.find({ id: req.param('id') })
    return res.json(tipoIngresso);
  }, 

	getAll: async (req, res) => {
		tiposIngresso = await TipoIngresso.find()
		return res.json(tipoIngressos);
	},

	update: async (req, res) => {
		await TipoIngresso.updateOne({ id: req.param('id') }).set(req.body)
		return res.json('updated')
	},

	delete: async (req, res) => {
		await TipoIngresso.destroyOne({ id: req.param('id') })
    return res.json('deleted')
  } 

};

