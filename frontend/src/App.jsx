import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';  
import CreatePage from './pages/CreatePage';  
import NoteDetails from './pages/NoteDetails'; 
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
       {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App