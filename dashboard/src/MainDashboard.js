import { Link } from "react-router-dom";

const TaqueroAction = ({ action }) => {
	return (
		<div>
			<p>
				El taquero {action.who}, a las {action.when}
				{". "}
				{action.what.map((whatPart) => {
					return (
						<>
							{`Se prepararon ${whatPart.amount} ${
								whatPart.type
							}s de ${whatPart.meat} en ${
								whatPart.prep_time
							}s con ${whatPart.fillings.reduce(
								(prev, curr) => prev + ", " + curr,
								""
							)}`}
						</>
					);
				})}
				{/* {action.time} */}
			</p>
		</div>
	);
};

const TaqueroData = ({ taquero, id }) => {
	const lastAction =
		taquero.preparar.length > 0
			? taquero.preparar[taquero.preparar.length - 1]
			: null;

	return (
		<div className=''>
			<p>Taquero: {taquero.name}</p>
			<p>
				Tipos de carnes:{" "}
				{taquero.types.reduce((prev, curr) => `${prev}, ${curr}`, "")}
			</p>
			<p>
				Last action:{" "}
				{lastAction ? <TaqueroAction action={lastAction} /> : "N/A"}
			</p>
			<Link to={`/taquero/${id}`}>Detalles</Link>
		</div>
	);
};

export const MainDashboard = ({ metadata }) => {
	return (
		<div>
			<div>
				<h3>Metadata</h3>
			</div>

			<div>
				<h3>Taqueros</h3>
				<div className='justify-content'>
					{metadata.taqueros.map((taquero, idx) => (
						<TaqueroData taquero={taquero} id={idx} />
					))}
				</div>
			</div>
			<div>
				<h3>Chalanes</h3>
				<div className='justify-content'>
					{metadata.chalanes.map((chalan, idx) => {
						return (
							<div>
								Chalan {idx}, ha realizado{" "}
								{chalan.refill.length} acciones
								<Link to={`/chalan/${idx}`}>
									{" "}
									Ir a detalles{" "}
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
