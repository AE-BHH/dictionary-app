import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default function AccordionCamp({ word }) {
	const reversedSearchArr = [...word].reverse()

	return (
		<span className='main'>
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
																			<span>
																				<span>
																					<span className='accordion-word-definition'>
																						Definition:
																					</span>{' '}
																					<br></br>
																					<span>{el.definition}</span>
																				</span>
																				<br></br>

																				{item.synonyms.length > 0 && (
																					<span>
																						<span className='accordion-word-definition'>
																							Synonyms:
																						</span>
																						<br></br>
																						<span>
																							{item.synonyms.join(', ')}
																						</span>
																					</span>
																				)}
																				{item.antonyms.length > 0 && (
																					<span>
																						<span className='accordion-word-definition'>
																							Antonyms:
																						</span>
																						<br></br>
																						<span>
																							{item.antonyms.join(', ')}
																						</span>
																					</span> 
																				)} <br></br>
																				<span>
																					{el.hasOwnProperty('example') && (
																						<span>
																							<span className='accordion-word-definition'>
																								Example:
																							</span>
																							<br></br>
																							<span>{el.example}</span>
																						</span>
																					)}
																				</span>
																			</span>
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
		</span>
	)
}
