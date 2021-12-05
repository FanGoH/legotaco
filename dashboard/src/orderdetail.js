import { useParams } from "react-router-dom";

export const OrderDetail = ({ tacos }) => {
	const params = useParams();
	const order = tacos[parseInt(params.id)];

	return (
		<div>
			<h1>Events</h1>

			<table>
				<thead>
					<tr>
						<th>Who</th>
						<th>When</th>
						<th>What</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{order.raw_order.response.map((responsePart) => {
						return (
							<tr>
								<td>{responsePart.who}</td>
								<td>{responsePart.when}</td>
								{responsePart.what.map((whatPart) => {
									return (
										<td>
											<p>
												{`${whatPart.amount} ${
													whatPart.type
												}s of ${
													whatPart.meat
												} have been prepared in ${
													whatPart.prep_time
												}s with ${whatPart.fillings.reduce(
													(prev, curr) =>
														prev + ", " + curr
												)}`}
											</p>
										</td>
									);
								})}
								<td>{responsePart.time}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
