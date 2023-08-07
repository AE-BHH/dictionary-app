import React, { useEffect, useState } from 'react'
import NavbarComp from './NavbarComp'
import { getWord } from '../api'
import Footer from './Footer'
import Main from './Main'

export default function Data() {
	const [input, setInput] = useState('')
	const [searchedWord, setSearchedWord] = useState([])
	console.log(typeof searchedWord)
	console.log(searchedWord)

	function handleSearch() {
		if (input === '' || /\d/.test(input)) {
			alert('Invalid input!')
		} else if (Object.values(searchedWord).includes(input)) { // this else if doesn't work
			alert(`You already searched ${input}`)
		} else {
			getWord(input).then((data) => {
				setSearchedWord((prev) => {
					return [...prev, ...data]
				})
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
