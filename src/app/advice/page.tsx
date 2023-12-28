"use client"
import React, { useState, useEffect } from 'react';

async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const AdviceApi = () => {
  const [advices, setAdvices] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {slip:{advice}} = await getData();
           setAdvices(advice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount
const handleRandomAdvice = () => {
 
  const fetchData = async () => {
    try {
      const {slip: {
        advice
      }} = await getData();
      console.log(advice)
      setAdvices(advice);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  fetchData();
}
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello JokeApi</h1>
    <button type="button" onClick={handleRandomAdvice}>Find Random Joke</button>
      <p>{advices}</p>
    </section>
  );
};

export default AdviceApi;
