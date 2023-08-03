function getWord(input) {
	return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
		.then((res) => res.json())

		.then((res) => {
			return [res[0]]
		})

		.catch((err) => err)
}

module.exports = {
	getWord,
}
