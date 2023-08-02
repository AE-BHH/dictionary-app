import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function AccordionCamp({ word }) {
	return (
		<div className='main'>
			{word.map((element, index) => {
				console.log(`this is the index: ${index}`)
				console.log(`Element: ${element[1]}`)

				return (
					<Accordion defaultActiveKey='0' key={index}>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>
								<h3>{element[0].word}</h3>
							</Accordion.Header>
							<Accordion.Body>
								{element.word.length > 0 && <h1>Word: {element.word}</h1>}
								{element.phonetics[0].text.length > 0 && (
									<h5>Phonetics: {element.phonetics[0].text}</h5>
								)}
								{element.meanings.map((item, index) => (
									<div key={index}>
										<h5>Part of speech: {item.partOfSpeech}</h5>
										<h5>Definition: {item.definitions[0].definition}</h5>
										{item.definitions[0].example > 0 && (
											<h5>Example: {item.definitions[0].example}</h5>
										)}
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
