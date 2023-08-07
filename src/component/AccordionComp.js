import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default function AccordionCamp({ word }) {
	const reversedSearchArr = [...word].reverse()

	return (
		<div className='main'>
			{reversedSearchArr.map((element, index) => {
				return (
					<Accordion defaultActiveKey='0' key={index}>
						<Accordion.Item eventKey='0'>
							<Accordion.Header className='accordion-header'>
								<h1>
									{element.word}: {element.phonetic}
								</h1>
							</Accordion.Header>

							<Accordion.Body>
								{element.meanings.map((item, index) => {
									return (
										<Container key={index}>
											<Row>
												{item.definitions.map((el, itemIndex) => {
													if (itemIndex <= 0) {
														return (
															<Col key={itemIndex}>
																<Card>
																	<Card.Body className='definition text-center'>
																		<h1>{item.partOfSpeech}</h1>
																		<Card.Text className='definition text-start'>
																			<div>
																				<span>
																					<h2>Definition: </h2>
																					<h5>{el.definition}</h5>
																				</span>

																				{item.synonyms.length > 0 && (
																					<span>
																						<h2>Synonyms:</h2>
																						<h5>{item.synonyms.join(', ')}</h5>
																					</span>
																				)}
																				{item.antonyms.length > 0 && (
																					<span>
																						<h2>Antonyms:</h2>
																						<h5>{item.antonyms.join(', ')}</h5>
																					</span>
																				)}
																				<h4>
																					{el.hasOwnProperty('example') && (
																						<span>
																							<h2>Example: </h2>
																							<h5>{el.example}</h5>
																						</span>
																					)}
																				</h4>
																			</div>
																		</Card.Text>
																	</Card.Body>
																</Card>
															</Col>
														)
													}
												})}
											</Row>
										</Container>
									)
								})}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				)
			})}
		</div>
	)
}
