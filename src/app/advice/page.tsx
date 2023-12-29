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
      setAdvices(advice);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  fetchData();
}
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4">
    <button className="bg-green-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full" type="button" onClick={handleRandomAdvice}>Find Random Joke</button>
      {advices && <p className="bg-yellow-100 rounded-lg p-8 mb-4 shadow-md text-gray-900 leading-7">{advices}</p>}
    </section>
  );
};

export default AdviceApi;
