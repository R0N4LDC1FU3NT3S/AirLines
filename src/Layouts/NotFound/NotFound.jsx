import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"

import "./NotFound.scss"

const NotFound = () => {
	return (
		<section className="NotFound">
			<h1>
				404 <FontAwesomeIcon icon={faHeartBroken} />
			</h1>
			<h2>NotFound</h2>
		</section>
	)
}

export default NotFound
