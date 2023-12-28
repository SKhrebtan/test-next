'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
async function getData() {
  const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=n5mECOhHB0KY7V5LBowHMbFnfiusoSgq');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


  
export default function Home() {
  const [giphy, setGiphy] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await getData();
        console.log(data)
        setGiphy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRandomAdvice = () => {
 
    const fetchData = async () => {
      try {
        const data = await getData();
        setGiphy(data)
        setGiphy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    fetchData();
  }

  return (
    <>
    <header>
      <nav>
      <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/jokes">Jokes</Link></li>
            <li><Link href="/advice">Advice</Link></li>
          </ul>
      </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello NextJs</h1>
      <button type="button" onClick={handleRandomAdvice}>Find Random Joke</button>
      <ul>
      {giphy.length > 0 && giphy.map(({id,title, user}) => 
         <li key={id}>
          <div>
          {user && <img alt={title} src={user.avatar_url} width={240} height={240}/>}
          </div>
         
         </li>
      )}
      </ul>
    </main>
    </>
  )
}


 



