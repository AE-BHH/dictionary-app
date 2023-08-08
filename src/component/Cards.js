
import Card from 'react-bootstrap/Card'

export default function Cards({ randomWord }) {
	console.log(randomWord)
	return (
		
					<Card className='cards text-center'>
						<Card.Header className='cardHeader'>
							<h3>{randomWord.word}</h3>
						</Card.Header>
						<Card.Title style={{ margin: '15px' }}>
							<h3>{randomWord.phonetic}</h3>
						</Card.Title>
						<Card.Body className='cardBody'>
							{randomWord.meanings.map((item, index) => {
								if (index <= 0) {
									return (
										<Card.Text style={{ margin: '15px' }} key={index}>
											<span className='term'>Definition: </span> <br></br>
											<span className='definition'>
												{item.definitions[0].definition}
											</span>
										</Card.Text>
									)
								}
							})}
						</Card.Body>
					</Card>
			
	)
}
