import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Container } from 'react-bootstrap'

export default function AccordionCamp({ word }) {
	console.log(word)
	return (
		<div className='main'>
			{word.map((element, index) => {
				return (
					<Accordion defaultActiveKey='0' key={index}>
						<Accordion.Item eventKey='0'>
							<Container fluid>
								<Accordion.Header>
									<h1>
										{element.word}: {element.phonetic}
									</h1>
									{element.meanings.map((item, index) => (
										<h2 key={index}>{item.partOfSpeech}</h2>
									))}
								</Accordion.Header>
							</Container>
							<Accordion.Body>
								{element.meanings.map((item, index) => (
									<div key={index}>
										{item.definitions.map((el, i) => {
											return (
												<div key={i}>
													<h5>Definition: {el.definition} </h5>
													<h5>Example: {el.example}</h5>
												</div>
											)
										})}

										{item.synonyms.length > 0 && (
											<h5>Synonyms: {item.synonyms.join(', ')}</h5>
										)}
										{item.antonyms.length > 0 && (
											<h5>Antonyms: {item.antonyms}</h5>
										)}
									</div>
								))}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				)
			})}
		</div>
	)
}
