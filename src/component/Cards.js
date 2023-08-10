/* eslint-disable array-callback-return */
import Card from 'react-bootstrap/Card'

export default function Cards({ randomWord }) {
	return (
		<Card className='cards text-center m-2'>
			<Card.Header className='cardHeader'>
				<h2>{randomWord.word}</h2>
			</Card.Header>

			<Card.Body className='cardBody'>
				{randomWord.meanings.map((item, index) => {
					if (index <= 0) {
						return (
							<Card.Text style={{ margin: '15px' }} key={index}>
								<span className='definition' style={{fontSize: '24px'}}>
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
