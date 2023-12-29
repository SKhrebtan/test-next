'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import axios from 'axios';

async function getData() {
  const res = await fetch(
    'https://api.giphy.com/v1/gifs/trending?api_key=n5mECOhHB0KY7V5LBowHMbFnfiusoSgq'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

type Giphy = {
  id: string;
  title: string;
  user: {
    avatar_url: string;
  };
};

export default function Home() {
  const [giphy, setGiphy] = useState<Giphy[]>([]);
  const currentPath: string = '/';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getData();
        setGiphy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.namedItem(
      'value'
    ) as HTMLInputElement;
    const fetchData = async (value: string) => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=n5mECOhHB0KY7V5LBowHMbFnfiusoSgq&q=${value}`
        );
        setGiphy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(value);
    e.currentTarget.reset();
  };

  return (
    <>
      <header>
        <Navigation currentPath={currentPath} />
      </header>
      <main className="flex flex-col items-center justify-center gap-4 p-4">
        <form className="flex gap-5" onSubmit={handleSubmit}>
          <input
            className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4"
            type="text"
            name="value"
          />
          <button type="submit">Search Gifs</button>
        </form>

        <ul className="flex flex-wrap items-center justify-center">
          {giphy.length > 0 &&
            giphy.map(
              ({ id, title, user }) =>
                user && (
                  <li key={id} className="w-1/4">
                    <Link href={`gifs/${id}`}>
                      <div>
                        <img
                          alt={title}
                          src={user.avatar_url}
                          width={240}
                          height={240}
                        />
                      </div>
                    </Link>
                  </li>
                )
            )}
        </ul>
      </main>
    </>
  );
}
