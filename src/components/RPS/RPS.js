import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import './RPS.css'

export default function RPS() {

    const [key, setKey] = useState(0)

    const history = useHistory();

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
    })

    //get input from user
    //compare input to random selection from 'computer'
    //one user gets it right, then they can access the page
    //we're gonna make it DIFFICULT to get to the website

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
