import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic
    signUp(email, password, name);
    navigate('/login');
  };

  return (
    <div className="bg-zinc-900 p-10">
      <h1 className="text-4xl font-bold mb-10">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-zinc-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-zinc-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-zinc-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#CDEA68] text-black font-bold rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;