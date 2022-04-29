import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./Pages/HomePage"
import DefensePage from "./Pages/DefensePage"
import ContactPage from "./Pages/ContactPage"
import SigninPage from "./Pages/SigninPage"
import SignupPage from "./Pages/SignupPage"



//import TeamsPage from "./Pages/TeamsPage"
//<Route path="/Teams" component={TeamsPage} />
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/Defense" component={DefensePage} exact />
					<Route path="/Contact" component={ContactPage} exact />
					<Route path="/Signin" component={SigninPage} exact />
					<Route path="/Signup" component={SignupPage} exact />
				</Switch>
			</div>	
			
			
		</BrowserRouter>
	)
}

export default App
