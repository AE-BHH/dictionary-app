
const [wordMeaning, setWordMeaning] = useState('')

	useEffect(() => {
		getRandomWord().then((randomWord) => {
			if (randomWord !== '') {
				getWord(randomWord).then((searchResult) => {
					setWordMeaning(searchResult)
				})
			}
		})
	}, [])

// getRandomWord().then((data) => {
// 	console.log(data)
// 	if (data !== ''){
// 		const randomWord = data[0]})

// 		.then(arr => getWord(randomWord).then((searchResult) => {
// 			setWordMeaning(searchResult)
// 		)
// 	}
// })






<Row>
	<Col>
		<Card className='cards text-center'>
			<Card.Body>
				<Card.Title>
					<h2>{randomWord.word}</h2>
				</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
	<Col>
		<Card className='cards text-center'>
			<Card.Header>Header</Card.Header>
			<Card.Body>
				<Card.Title>Primary Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
	<Col>
		<Card className='cards text-center'>
			<Card.Header>Header</Card.Header>
			<Card.Body>
				<Card.Title>Primary Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
	<Col>
		<Card className='cards text-center'>
			<Card.Header>Header</Card.Header>
			<Card.Body>
				<Card.Title>Primary Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
</Row>
