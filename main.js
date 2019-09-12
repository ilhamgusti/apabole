const apabole = require('./engine.js')

let inp = process.stdin

const index = params => {}

console.log(`masukkan angka:`)
inp.on('data', data => {
	console.log('===============')
	console.log(apabole(data))
	process.exit()
})
