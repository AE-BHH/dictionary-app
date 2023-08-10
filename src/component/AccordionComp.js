import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default function AccordionCamp({ word }) {
	if (word.length < 0) {
		alert('No result found!')
	} else {
		const reversedSearchArr = [...word].reverse()

		return (
			<span className='main'>
				{reversedSearchArr.map((element, index) => {
					return (
						<Accordion defaultActiveKey='0' key={index} className='accordion'>
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
												<Row style={{ margin: '10px' }}>
													{item.definitions.map((el, itemIndex) => {
														if (itemIndex <= 0) {
															return (
																<Col key={itemIndex}>
																	<Card
																		style={{
																			borderRadius: '20px',
																			backgroundColor: '#F70776',
																			minWidth: '400px',
																		}}>
																		<Card.Body
																			className='definition text-end'
																			style={{ borderRadius: '20px' }}>
																			<h5 style={{ fontStyle: 'italic' }}>
																				{item.partOfSpeech}
																			</h5>
																			<Card.Text className='definitions text-start'>
																				<span>
																					<span>
																						<span
																							style={{
																								fontSize: '26px',
																								fontWeight: 'bold',
																							}}>
																							{el.definition}
																						</span>
																					</span>
																					<br></br>
																					{item.synonyms.length > 0 && (
																						<span>
																							<span
																								style={{ fontStyle: 'italic' }}>
																								Synonyms:
																							</span>
																							&nbsp;
																							<span>
																								{item.synonyms.join(', ')}
																							</span>
																						</span>
																					)}
																					{item.antonyms.length > 0 && (
																						<span>
																							<span
																								style={{ fontStyle: 'italic' }}>
																								Antonyms:
																							</span>
																							&nbsp;
																							<span>
																								{item.antonyms.join(', ')}
																							</span>
																						</span>
																					)}{' '}
																					<br></br>
																					<span>
																						{el.hasOwnProperty('example') && (
																							<span>
																								<span
																									style={{
																										fontStyle: 'italic',
																									}}>
																									Example:
																								</span>
																								&nbsp;
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
}
