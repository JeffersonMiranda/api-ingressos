module.exports = {

	attributes: {
		nome: { type: 'string' ,required: true },
		descricao: { type: 'string', required: true},
		classificacao: { type: 'string', required: true },
		data: { type: 'string', required: true },
		abertura: { type: 'string', required: true },
		inicio: { type: 'string', required: true },

		ingressos: {
			collection: 'Ingresso'
		}
	}
};