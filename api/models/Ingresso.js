module.exports = {

	attributes: {
		lote: { type: 'string', required: true },
		valor: { type: 'string', required: true },

		tipoIngresso: {
			model: 'TipoIngresso' 
		},
		evento: {
			model: 'Evento'	
		}
	}

}