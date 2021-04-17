import {useHistory} from 'react-router-dom'

export default function Blog () {
    const history = useHistory()
    return(
        <>
            <h1 onClick={()=>history.push('/register')}>LOGIN</h1>

        </>
    )
}
