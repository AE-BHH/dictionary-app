import React, { useState } from 'react'
import NavbarComp from './NavbarComp'
import { getWord } from '../api'
import Footer from './Footer'
import Main from './Main'

export default function Index() {
	const [input, setInput] = useState('')
	const [searchedWord, setSearchedWord] = useState([])
	const [wordHistory, setWordHistory] = useState([])

	function handleSearch() {
		if (input === '' || /\d/.test(input)) {
			alert('Invalid input!')
		} else if (wordHistory.includes(input)) {
			alert(`You already searched "${input}"`)
		} else {
			getWord(input).then((data) => {
				setSearchedWord((prev) => {
					return [...prev, ...data]
				})
			})
			setWordHistory((prev) => {
				return [...prev, input]
			})
		}
	}

	return (
		<div>
			<NavbarComp handleSearch={handleSearch} setInput={setInput} />
			<Main word={searchedWord} />
			<Footer />
		</div>
	)
}
