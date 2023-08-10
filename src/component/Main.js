import React, { useState, useEffect } from 'react'
import AccordionComp from './AccordionComp'
import { Container, Row } from 'react-bootstrap'
import { getRandomWord, generateRandomWordMeaning } from '../api'
import Cards from './Cards'

export default function Main({ word }) {
	const [wordMeaning, setWordMeaning] = useState([])
	useEffect(() => {
		async function fetchData() {
			const randomWords = await getRandomWord()
			const randomDefinitions = await randomWords.map(async (el) => {
				const definition = await generateRandomWordMeaning(el)
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
				<Row sm={1} xl={2} className='g-1'>
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
