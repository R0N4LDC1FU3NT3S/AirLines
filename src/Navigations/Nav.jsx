import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"

import Paths from "./Paths"

import "./Nav.scss"

const Nav = () => {
	const [open, setOpen] = useState("tab-content close")

	const changeMenu = e => {
		if (e.target.checked) {
			setOpen("tab-content open")
		} else {
			setOpen("tab-content close")
		}
	}

	return (
		<header>
			<div className="nav-container">
				<nav className="nav-checkbox">
					<a href="#" className="logo">
						AirLines <FontAwesomeIcon icon={faPlaneDeparture} />
					</a>
					<label className="tab-nav-label">
						Menu
						<input id="tabNav" type="checkbox" className="tab-nav" name="tabs" onClick={changeMenu} />
					</label>
					<ul className={open}>
						{Paths.map(item => (
							<li key={item.id}>
								<Link to={item.path}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Nav
