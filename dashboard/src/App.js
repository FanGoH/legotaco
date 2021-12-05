import "./App.css";
import { OrderDetail } from "./orderdetail";
import { useTacoSocket } from "./socket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainDashboard } from "./MainDashboard";

const App = () => {
	const { tacos, metadata, events } = useTacoSocket();

	return (
		<div className='App'>
			<header className='App-header'>
				<button onClick={events.requestOrder}>Algo</button>
				<Router>
					<Routes>
						<Route
							path='/'
							element={<MainDashboard metadata={metadata} />}
						/>
						<Route
							path='/order/:id'
							element={<OrderDetail tacos={tacos} />}
						/>
					</Routes>
				</Router>
			</header>
		</div>
	);
};

export default App;
