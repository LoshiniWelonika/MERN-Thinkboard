import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';

const HomePage = () => {
  const [IsRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchNotes = async () => {
      try {
        const res = await axios.post("https://localhost:5000/api/notes");
        console.log(res.data);
      } catch (error) {
        console.error("Error Fetching notes", error)
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className='min-h-screen'>
      <NavBar />

      {IsRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage