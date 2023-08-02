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
			getWord(input).then((data) => {
				setSearchedWord(data)
			})
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
