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
        console.log(jokes)
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
      console.log(data)
      setJokesApi([data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  fetchData();
}
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello JokeApi</h1>
    <button type="button" onClick={handleRandomJoke}>Find Random Joke</button>
        <ul>
        {jokesApi && jokesApi.length > 0 && jokesApi.map(({setup, delivery, id}) => 
          <li key={id}>
              <p>{setup}</p>
              <p>{delivery}</p>
          </li>
         )}
               </ul>
    </section>
  );
};

export default JokeApi;
