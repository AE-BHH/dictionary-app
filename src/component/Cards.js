import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function Cards({ randomWord }) {
	return (
		<Container>
			<Row>
				<Col>
					<Card className='cards text-center'>
						<Card.Header className='cardHeader'>
							<h3>{randomWord.word}</h3>
						</Card.Header>
						<Card.Title style={{ margin: '20px' }}>
							<h3>{randomWord.phonetic}</h3>
						</Card.Title>
						<Card.Body className='cardBody'>
							{randomWord.meanings.map((item, index) => {
								if (index <= 0) {
									return (
										<Card.Text style={{ margin: '20px' }} key={index}>
											<div>
												<h4>Definition: </h4>
												<h5>{item.definitions[0].definition}</h5>
											</div>
										</Card.Text>
									)
								}
							})}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
