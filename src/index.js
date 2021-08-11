import { StrictMode } from "react"
import ReactDom from "react-dom"

import Routes from "./Routes"
import "./index.scss"

ReactDom.render(
	<StrictMode>
		<Routes />
	</StrictMode>,
	document.getElementById("root")
)
