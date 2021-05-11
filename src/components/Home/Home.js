import {useHistory} from 'react-router-dom'
import Blog from '../Blog/Blog'

export default function Home () {
    const history = useHistory()
    return(
        <>
            <Blog />
        </>
    )
}
