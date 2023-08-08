import React, { useState, useEffect } from 'react'
import AccordionComp from './AccordionComp'
import { Container, Row, Col } from 'react-bootstrap'
import { getRandomWord, getWord } from '../api'
import Cards from './Cards'

export default function Main({ word }) {
	const [wordMeaning, setWordMeaning] = useState([])
	console.log(word)
	useEffect(() => {
		async function fetchData() {
			const randomWords = await getRandomWord()
			const randomDefinitions = await randomWords.map(async (el) => {
				const definition = await getWord(el)
				if (definition) {
					return definition[0]
				}
			})
			const result = await Promise.all(randomDefinitions)
			setWordMeaning(result)
		}
		fetchData()
	}, [])
	return (
		<div>
			<Container>
				<Row>
					
						{word.length === 0 &&
							wordMeaning.map((definition, index) => {
								return definition ? (
									<Cards randomWord={definition} key={index} />
								) : (
									<></>
								)
							})}
					
				</Row>
			</Container>
			<AccordionComp word={word} />
		</div>
	)
}
