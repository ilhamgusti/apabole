const apabole = number => {
	for (i = 1; i < number; i++) {
		if (i % 3 == 0) {
			console.log('Apa')
			continue
		}
		console.log(i)
	}
}

apabole(100)
