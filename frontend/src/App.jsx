import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';  
import CreatePage from './pages/CreatePage';  
import NoteDetails from './pages/NoteDetails'; 
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
       {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <button onClick={()=>toast.success("Congrats")} className='btn btn-primary'>Click Me</button>
      <button class="btn btn-active">Default</button>
      <button class="btn btn-active btn-neutral">Neutral</button>
      <button class="btn btn-active btn-primary">Primary</button>
      <button class="btn btn-active btn-secondary">Secondary</button>
      <button class="btn btn-active btn-accent">Accent</button>
      <button class="btn btn-active btn-ghost">Ghost</button>
      <button class="btn btn-active btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App