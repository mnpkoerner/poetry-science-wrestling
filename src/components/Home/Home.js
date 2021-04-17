import {useHistory} from 'react-router-dom'

export default function Home () {
    const history = useHistory()
    return(
        <>
            <h1 onClick={()=>history.push('/newpost')}>You made it home</h1>
        </>
    )
}
