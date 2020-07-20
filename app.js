const argv = require('./config/yargs').argv

const { crearArchivo , listarTabla } = require('./multiplicar/multiplicar')

	let comando = argv._[0]

	switch(comando)
	{
		case 'crear' :

			 crearArchivo(argv.base , argv.limite)
			.then(archivo => console.log(`archivo creado: ${archivo}`))
			.catch(e => console.log(e))

		break

		case 'listar' :

			listarTabla(argv.base, argv.limite)
			.then(listado => console.log(listado))
			.catch(e => console.log(e))

		break

		default : console.log('comando no reconocido')

	}

