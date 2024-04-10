import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-4" style={{ backgroundImage: "url('/real-estate.jpg')" }}>
      <div className='w-full mt-12 max-w-lg bg-white bg-opacity-25 backdrop-blur-md rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:scale-105'>
        <h1 className='text-4xl  text-center mb-5 font-bold text-gray-800'>Sign In</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
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
            {loading ? 'Loading...' : 'Submit'}
          </button>
          <OAuth/>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </form>
        <div className='flex justify-center gap-2 mt-6 text-gray-800'>
          <p>Dont have an account?</p>
          <Link to={'/sign-up'}>
            <span className='text-blue-700 hover:text-cyan-700 transition duration-150 ease-in-out'>Sign up here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from '../redux/user/userSlice';
// //import OAuth from '../components/OAuth';

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(signInStart());
//       const res = await fetch('/api/auth/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.success === false) {
//         dispatch(signInFailure(data.message));
//         return;
//       }
//       dispatch(signInSuccess(data));
//       navigate('/');
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };
//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//         <input
//           type='email'
//           placeholder='email'
//           className='border p-3 rounded-lg'
//           id='email'
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           placeholder='password'
//           className='border p-3 rounded-lg'
//           id='password'
//           onChange={handleChange}
//         />

//         <button
//           disabled={loading}
//           className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
//         >
//           {loading ? 'Loading...' : 'Sign In'}
//         </button>
//         {/* <OAuth/> */}
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Dont have an account?</p>
//         <Link to={'/sign-up'}>
//           <span className='text-blue-700'>Sign up</span>
//         </Link>
//       </div>
//       {error && <p className='text-red-500 mt-5'>{error}</p>}
//     </div>
//   );
// }