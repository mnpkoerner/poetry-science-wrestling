import { useEffect, useState } from 'react'

export default function RPS() {

    const [demo, setDemo] = useState('DEMO')

    useEffect(() => {
        console.log('use effect works')
    })

    //get input from user
    //compare input to random selection from 'computer'
    //one user gets it right, then they can access the page
    //we're gonna make it DIFFICULT to get to the website

    return (
        <div>
            <p>THIS IS A RETURN</p>
            <p>{demo}</p>
        </div>
    )
}
