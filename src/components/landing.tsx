
import {useState} from "react";

export default function Landing() {

    const [record, setRecord] = useState(false);
    const [stopRecord, setStopRecord] = useState(false);

    return(
        <>
            <h1>Landing</h1>
            <button>Click to record</button>
        </>
    );
}