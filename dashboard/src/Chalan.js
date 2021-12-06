import { useParams } from "react-router-dom";

export const ChalanDetail = ({ chalanes }) => {
	const { id } = useParams();
	const chalan = chalanes[id];

	return (
		<div>
			<h1>Chalan {id}</h1>
			{chalan.fillings.map((fill) => (
				<p>
					El chalan relleno a {fill.to} el objeto {fill.type} con{" "}
					{fill.amount} unidades, que tiene un maximo de {fill.max},
					dejando {fill.remaining}
				</p>
			))}
		</div>
	);
};
