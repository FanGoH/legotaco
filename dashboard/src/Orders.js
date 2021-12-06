import { TaqueroAction } from "./Taquero";

export const Orders = ({ orders }) => {
	return (
		<div>
			<ul>
				{orders.map((order) => {
					return (
						<li>
							{order.raw_order.response.map((action) => {
								return <TaqueroAction action={action} />;
							})}
						</li>
					);
				})}
				<hr />
			</ul>
		</div>
	);
};
