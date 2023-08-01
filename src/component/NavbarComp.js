import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { InputGroup, Form, Button } from 'react-bootstrap'

export default function NavbarComp({ handleSearch, setInput }) {
	return (
		<div className='header'>
			<Navbar>
				<Container>
					<Navbar.Brand href='#index.html' className='name'>
						WordWise
					</Navbar.Brand>
					<InputGroup className='inputBox-searchBtn'>
						<Form.Control
							id='input-search-box'
							placeholder='Your input here...'
							aria-label='Input group example'
							aria-describedby='btnGroupAddon2'
							onChange={(e) => setInput(e.target.value)}
						/>
						<Button
							className='searchBtn'
							onClick={handleSearch}
							variant='primary'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='20'
								fill='currentColor'
								className='bi bi-search'
								viewBox='0 0 16 16'>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
							</svg>
						</Button>
					</InputGroup>
				</Container>
			</Navbar>
		</div>
	)
}
