import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Words() {

    const dispatch = useDispatch()

    

    const [rhyme, setRhyme] = useState('');
    const [synonym, setSynonym] = useState('');


    return (
        <div>
            <h1>This is where the stuff will go</h1>
            <input
                type="text"
                placeholder="means like"
                value={synonym}
                onChange={(event) => setSynonym(event.target.value)}>
            </input>
            <input
                type="text"
                placeholder="rhymes with"
                value={rhyme}
                onChange={(event) => setRhyme(event.target.value)}>
            </input>
        </div>
    )
}
