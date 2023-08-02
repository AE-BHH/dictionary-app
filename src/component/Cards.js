import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function Cards() {
	return (
		<div>
			<Row>
				<Col>
					<Card className='cards text-center'>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<Card.Title>Primary Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
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
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
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
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
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
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
}
