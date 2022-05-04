import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PorkersList from "./PorkersList";

function App() {
	return (
		<div className="App">
			<Nav />
			<PorkersList porkers={hogs} />
		</div>
	);
}

export default App;
