import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function AccordionCamp({ word }) {
	console.log(word)
	return (
		<div className='main'>
			{word.map((element, index) => {
				console.log(element)
				return (
					<Accordion defaultActiveKey='0' key={index}>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>
								<h3>{element.word}</h3>
							</Accordion.Header>
							<Accordion.Body>
								{element.word.length > 0 && <h1>Word: {element.word}</h1>}
								<h5>Phonetics: {element.phonetic}</h5>
								{element.meanings.map((item, index) => (
									<div key={index}>
										<h5>Part of speech: {item.partOfSpeech}</h5>

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
