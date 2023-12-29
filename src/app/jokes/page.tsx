"use client"
import React, { useState, useEffect } from 'react';

async function getData(category:string = 'any', amount:number = 10) {
  const res = await fetch(`https://v2.jokeapi.dev/joke/${category ?? 'any'}?type=twopart&amount=${amount ?? 10}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
type Joke = {
  setup: string;
  delivery: string;
  id: string;
};
const JokeApi = () => {
  const [jokesApi, setJokesApi] = useState<Joke[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {jokes} = await getData();
        setJokesApi(jokes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount
const handleRandomJoke = () => {
 
  const fetchData = async () => {
    try {
      const data = await getData('any', 1);
      setJokesApi([data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  fetchData();
}
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4">
    <button className="bg-blue-500 hover:bg-blue-700 duration-300  text-white font-bold py-2 px-4 rounded-full" type="button" onClick={handleRandomJoke}>Find Random Joke</button>
        <ul>
        {jokesApi && jokesApi.length > 0 && jokesApi.map(({setup, delivery, id}) => 
          <li className="bg-gray-100 rounded-lg p-6 mb-4 shadow-md" key={id}>
              <p className="text-2xl font-bold mb-4 text-blue-600">{setup}</p>
              <p className="text-2xl font-bold mb-4 text-yellow-600">{delivery}</p>
          </li>
         )}
               </ul>
    </section>
  );
};

export default JokeApi;
