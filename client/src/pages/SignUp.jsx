import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => setIsSubmitting(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-4" style={{ backgroundImage: "url('/real-estate.jpg')" }}>
      <div className='w-full max-w-lg bg-white bg-opacity-25 backdrop-blur-md rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:scale-105'>
        <h1 className='text-4xl text-center font-bold text-gray-800 mb-6'>Sign Up</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='username'
            required
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='email'
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='password'
            required
          />
          <button
            className={`mt-4 text-white p-4 rounded-lg uppercase tracking-wide font-semibold shadow-lg transition-transform duration-150 ease-in-out ${isSubmitting ? 'bg-gray-400' : 'bg-cyan-600 hover:bg-cyan-700'}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div className='flex justify-center gap-2 mt-6 text-gray-800'>
          <p>Already have an account?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-700 hover:text-cyan-700 transition duration-150 ease-in-out'>Sign in here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
