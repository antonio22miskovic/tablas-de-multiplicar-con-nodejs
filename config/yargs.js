let opts = {

	base:{
		demand:true, // requerido
		alias:'b' // alias
	},
	limite:{
		alias:'l',
		default:10 // valor por defecto
	}

}

const argv = require('yargs')
			.command('listar','Imprime la tabla de multiplicar por consola',opts)
			.command('crear','Crea la tabla de multiplicar', opts)
			.help()
			.argv

module.exports = {
	argv
}