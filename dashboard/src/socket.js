import { useEffect, useState, useMemo } from "react";
import Socket from 'reconnecting-websocket'
import orders from "./orden.json";
import metadataInitial from "./taquerometadata.json";

const useTacoSocket = () => {

    const ws = useMemo(() => (new Socket("ws://localhost:8765/")), []);
    const [tacos] = useState([orders])
    const [metadata] = useState(metadataInitial);

    useEffect(() => {

        ws.onopen = function(){
          //  console.log("Connection is Established");
          //  ws.send("Message to Send");
        };

        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            console.log(received_msg);
            const evtData = JSON.parse(received_msg);

            console.log(evtData)
        };

    }, [ws])

    const events = {
        requestOrder: () => {
            ws.send('send');
        }


    }




    return {tacos, metadata, events}; 


}

export {useTacoSocket};