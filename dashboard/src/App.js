import "./App.css";
import { OrderDetail } from "./orderdetail";
import { useData } from "./GetData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainDashboard } from "./MainDashboard";
import { TaqueroDetail } from "./Taquero";
import { ChalanDetail } from "./Chalan";
import { Orders } from "./Orders";

const App = () => {
	const { tacos, metadata } = useData();

	return (
		<div className='App'>
			<header className='App-header'>
				<Router>
					<Routes>
						<Route
							path='/'
							element={<MainDashboard metadata={metadata} />}
						/>
						<Route
							path='/orders'
							element={<Orders orders={tacos} />}
						/>
						<Route
							path='/order/:id'
							element={<OrderDetail tacos={tacos} />}
						/>
						<Route
							path='/taquero/:id'
							element={
								<TaqueroDetail taqueros={metadata.taqueros} />
							}
						/>
						<Route
							path='/chalan/:id'
							element={
								<ChalanDetail chalanes={metadata.chalanes} />
							}
						/>
					</Routes>
				</Router>
			</header>
		</div>
	);
};

export default App;
