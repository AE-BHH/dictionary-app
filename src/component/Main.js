import React from 'react'
import AccordionComp from './AccordionComp'
// import Cards from "./Cards";

export default function Main({ word }) {
	return (
		<div>
			{/* <Cards /> */}
			<AccordionComp word={word} />
		</div>
	)
}
