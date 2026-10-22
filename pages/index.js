import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero'; // Import your Hero component
import AnimeCard from '../components/AnimeCard';  // Import your AnimeCard component
import { useEffect, useState } from 'react'; 

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    // Fetch anime data (example using a placeholder API)
    const fetchAnimeData = async () => {
      try {
        const response = await fetch('https://api.example.com/anime'); // Replace with actual API endpoint
        const data = await response.json();
        setAnimeList(data); 
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData(); 
  }, []);

  return (
    <div>
      <Head>
        <title>Next-Gen Anime Hub</title>
      </Head>
      <Hero /> {/* Render your Hero component */}
      <h1>Trending Anime</h1>
      <div className="anime-grid"> 
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} /> 
        ))}
      </div>
    </div>
  );
};

export default Home;
