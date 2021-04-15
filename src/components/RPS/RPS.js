import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import './RPS.css'

export default function RPS() {

    const [key, setKey] = useState(0)

    const history = useHistory();

    //guess the mystery number logic to grant access to PSW homepage,
    //TODO: style page and attach this logic to old photos of wrestlers/wreslting moves
    //Animations -> FramerMotion?
    const checkChoice = (param) => {
        if (param === key){
            console.log('correct')
            history.push('/home')
        }
        else {
            console.log('try some better moves')
        }
        console.log(param)
    }

    const randomGenerator = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    useEffect(() => {
        console.log('use effect works')
        setKey(randomGenerator());
    }, [])

    return (
        <div>
            <p>THIS IS A RETURN</p>

            <div
            className="fight"
            onClick={()=>checkChoice(1)}><p>KICK</p></div>
            <div
            className="fight"
            onClick={()=>checkChoice(2)}><p>Spin</p></div>
            <div
            className="fight"
            onClick={()=>checkChoice(3)}><p>Dive</p></div>

        </div>
    )
}
