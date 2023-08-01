import React, { useState } from 'react'
import NavbarComp from './NavbarComp'
import AccordionCamp from './AccordionComp'
import { getWord } from '../api'
import Footer from './Footer'

export default function Data() {
	const [input, setInput] = useState('')
	const [searchedWord, setSearchedWord] = useState([])

	function handleSearch() {
		if (input === '' || /\d/.test(input)) {
			alert('Invalid input!')
		} else {
		const search =	getWord(input).then((data) => {
				const searchedWordData = data
				setSearchedWord(searchedWordData)
			})
					function updateSearchHistory(search, searchedWord) {
				return [...search, searchedWord]
			}
		}
	}

	return (
		<div>
			<NavbarComp handleSearch={handleSearch} setInput={setInput} />
			<AccordionCamp word={searchedWord} />
			<Footer />
		</div>
	)
}
