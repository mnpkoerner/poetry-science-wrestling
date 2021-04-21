import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';

export default function NASA () {

    const dispatch = useDispatch()

    const nasa = useSelector(store=>store.nasa)

    console.log('nasa has a value and its', nasa)

    useEffect(()=>{
        dispatch({type: 'GET_PHOTO'})
    }, [])

    return(
        <>
        <p>This is where we'll make some fun API calls to NASA's servers</p>
        <button onClick={()=>console.log(nasa)}>CHECK VALUE</button>
        </>
    )
}
