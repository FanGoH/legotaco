export const MainDashboard = ({ metadata }) => {
	return (
		<div>
			<h3>Taqueros</h3>
			<div className='justify-content'>
				{metadata.taqueros.map((taquero) => {
					return (
						<div className=''>
							<p>Taquero: {taquero.name}</p>
							<p>
								Tacos hasta descanso:{" "}
								{taquero["tacos_until_break"]}
							</p>
							<div className='queue'>
								<p>
									Main Queue:{" "}
									{taquero.queues["main_queue"].reduce(
										(prev, curr) => `${prev}, ${curr}`,
										""
									)}
								</p>
								<p>
									Priority Queue:{" "}
									{taquero.queues["priority_queue"].reduce(
										(prev, curr) => `${prev}, ${curr}`,
										""
									)}
								</p>

								<p>Status: {taquero.status}</p>
								<hr></hr>
								<p>Fills</p>
								<ol>
									{Object.keys(taquero.fillings).map(
										(filling) => {
											return (
												<li>
													{filling}:{" "}
													{taquero.fillings[filling]}
												</li>
											);
										}
									)}
								</ol>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
