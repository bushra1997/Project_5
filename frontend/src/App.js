import React from 'react';
import { Link, Route } from "react-router-dom";
import Register from './components/Register';

const App = () => {

	return (<>
	<Link to ='/register'>register</Link>
	<App/>
	<Route path="/register" component={Register} />
	</>)
};

export default App;
