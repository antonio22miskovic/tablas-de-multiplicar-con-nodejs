const fs = require('fs');
const colors = require('colors')


let listarTabla = ( base , limite ) => {

	return new Promise(( resolve , reject ) =>{
		listado = []
		if (!Number(base))
			return reject('la base no es un numero'.red)

		if (!Number(limite))
			return reject('el limite no es un numero'.red)

		console.log('=================='.green)
		console.log(`la tabla de: ${base} ' hasta el: ${limite} `.green)
		console.log(`==================`.green)

		for (let i = 1 ; i <= limite; i++) {
			listado += base + ' * ' + i + ' = ' + base * i + '\n'
		}
		return resolve(listado)
	})
}


let crearArchivo = ( base , limite ) => {

	return new Promise ((resolve, reject) => {
		let data = ''

		if (!Number(base))
			return reject(`el valor base : ${base} no es un numero`.red)

		if (!Number(limite))
			return reject(`el valor limite : ${limite} no es un numero`.red)

		 for (var i = 1; i <= limite; i++) {

 			data += base + ' * ' + i + ' = ' + base * i + '\n'
 		 }

			fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

  			if (err)
  				return reject(err)
  			else
  				return resolve(`tabla-del-${base}-con-limite-de-${limite}-.txt`.green)
			})
	})
}

module.exports = {
	crearArchivo,
	listarTabla
}