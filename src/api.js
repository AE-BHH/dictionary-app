function getWord(input) {
	return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
		.then((res) => res.json())

		.then((res) => {
			console.log(res)
			return res
		})

		.catch((err) => err)
}

module.exports = {
	getWord,
}
