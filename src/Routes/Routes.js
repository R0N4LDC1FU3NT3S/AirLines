import { HashRouter as Router, Switch, Route } from "react-router-dom"

// Components
// import Home from "../Components/Home"
import NotFound from "../Layouts/NotFound"
import AirLines from "../Layouts/AirLines"
import Home from "../Layouts/Home"

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/satena" component={AirLines} />
				<Route exact path="/avianca" component={AirLines} />
				<Route exact path="/vivair" component={AirLines} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Routes
