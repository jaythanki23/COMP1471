import React, {useEffect, useState} from "react";

export default function NewInstrumentCount({instrumentCount, instrumentTyps}) {

    const [count, setCount] = useState();
    const [instIndex, setInstIndex] = useState();

    useEffect(() => {
        setCount(instrumentCount.instrumentCount)
    }, [instrumentCount])
    
    function setInst(index){
        instrumentCount.instrumentType = instrumentTyps[index];
        setInstIndex(index)
    }

    function onCountChanged(c){
        instrumentCount.instrumentCount  = c
        setCount(c)
    }

    return (
        <div>
            Instrument type: <select value={instIndex} onChange={(e) => {setInst(e.target.value)}}>
            {instrumentTyps.map((inst,index) => (
                <option key={index} value={index}>{inst.instrumentName}</option>
            ))}
            </select>
            Amount: <input
            type='number'
            name='instCountNr'
            placeholder='Nr. of instruments'
            value = {instrumentCount.instrumentCount}
            onChange={(e) => {onCountChanged(e.target.value)}}
        /> <br/>
        </div>

    )
}
