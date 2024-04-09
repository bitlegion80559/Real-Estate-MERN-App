import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => setIsSubmitting(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
    setIsSubmitting(true);
   // e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-4" style={{ backgroundImage: "url('/real-estate.jpg')" }}>
      <div className='w-full mt-12 max-w-lg bg-white bg-opacity-25 backdrop-blur-md rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:scale-105'>
        <h1 className='text-4xl  text-center mb-5 font-bold text-gray-800'>Sign Up</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='username'
            onChange={handleChange}
            required
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 p-4 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 ease-in-out'
            id='password'
            onChange={handleChange}
            required
          />
          <button
            disabled={loading}
            className={`mt-4 text-white p-4 rounded-lg uppercase tracking-wide font-semibold disabled:opacity-50 shadow-lg transition-transform duration-150 ease-in-out ${isSubmitting ? 'bg-gray-400' : 'bg-cyan-600 hover:bg-cyan-700'}`}
            type="submit"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          <OAuth/>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
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