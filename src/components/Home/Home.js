import {useHistory} from 'react-router-dom'
import Blog from '../Blog/Blog'

export default function Home () {
    const history = useHistory()
    return(
        <>
            <h1 onClick={()=>history.push('/newpost')}>You made it home</h1>
            <Blog />
        </>
    )
}
