import { useParams } from "react-router-dom";

export const TaqueroAction = ({ action }) => {
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

export const TaqueroDetail = ({ taqueros }) => {
	const { id } = useParams();

	const taquero = taqueros[id];

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

			<hr />
			<h2>Descanso y ventilador</h2>
			<ul>
				{taquero?.descanso.map((rest) => (
					<p>
						Se hizo: {rest.name} con {rest.duration}s, con{" "}
						{rest.tacos}, a las {rest["time_stamp"]}
					</p>
				))}
			</ul>

			<hr />
			<h2>Acciones</h2>
			<ul>
				{taquero.preparar.map((action) => (
					<li>
						<TaqueroAction action={action} />
					</li>
				))}
			</ul>

			<hr />
		</div>
	);
};
