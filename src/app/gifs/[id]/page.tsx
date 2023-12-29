'use client'
 
import { useParams } from 'next/navigation';
import axios from 'axios'
import { useEffect } from 'react';

const Gif = () => {
    const {id} = useParams<{ id: string }>()
    
    useEffect(()=> {
const fetchData = async() => {
    const data = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=n5mECOhHB0KY7V5LBowHMbFnfiusoSgq`);
    console.log(data)
}
fetchData()
    },[id])

    return(
<h1>params</h1>
    )
}

export default Gif;