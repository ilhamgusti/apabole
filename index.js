const arr = new Array()
const apabole = number => {
	for (i = 0; i <= number; i++) {
		if (i % 3 == 0) {
			if (i % 3 == 0 && i % 5 == 0) {
				arr[i] = 'ApaBole'
				continue
			}
			arr[i] = 'Apa'
			continue
		} else if (i % 5 == 0) {
			arr[i] = 'Bole'
			continue
		}
		arr[i] = i
	}
	return arr.join(', ')
}

apabole(100)
