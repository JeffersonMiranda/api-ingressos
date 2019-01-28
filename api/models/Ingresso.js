module.exports = {

	attributes: {
		lote: { type: 'string', required: true },
		valor: { type: 'string', required: true },
		modalidade: { type: 'string', required: true },
		regiao: { type: 'string', required: true },

		evento: {
			model: 'Evento'	
		}
	}

};