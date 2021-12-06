import { useEffect, useState } from "react";
import orders from "./orden.json";
import metadataInitial from "./taquerometadata.json";

import chalan1 from "./output/chalan/chalan-Chalan 1.json";
import chalan2 from "./output/chalan/chalan-Chalan 2.json";

import taquero1 from "./output/taquero/taquero-Taquero adobada.json";
import taquero2 from "./output/taquero/taquero-Taquero asada y suadero 1.json";
import taquero3 from "./output/taquero/taquero-Taquero asada y suadero 2.json";
import taquero4 from "./output/taquero/taquero-Taquero tripa y cabeza.json";

import completedObject from "./output/completadas.json";

const useTacoSocket = () => {
	const [tacos] = useState(completedObject.completed);
	const [metadata] = useState({
		taqueros: [taquero1, taquero2, taquero3, taquero4],
		chalanes: [chalan1, chalan2],
		metadata: {
			tacos: "number",
			throughput: "number",
			average_wait_time: "number",
			ventiladores: [
				{
					id: "1",
					prendido: true,
				},
				{
					id: "2",
					prendido: false,
				},
				{
					id: "3",
					prendido: false,
				},
			],
		},
	});

	return { tacos, metadata };
};

export { useTacoSocket as useData };
