import PropTypes from "prop-types"

import Nav from "../../Navigations/Nav.jsx"
import Avion from "./avion.svg"

// Styles
import "./Home.scss"

const Home = props => {
	return (
		<>
			<Nav />
			<div className="Home">
				<h1>Vuela Tan Lejos Como Quieras!</h1>
				<Avion />
			</div>
		</>
	)
}

Home.propTypes = {
	history: PropTypes.any,
	handleChange: PropTypes.any,
	handleBlur: PropTypes.any
}

export default Home
