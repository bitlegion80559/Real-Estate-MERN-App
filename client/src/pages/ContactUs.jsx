import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
    const [form, setForm] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_pto11pk', 'template_mhh2zfo', form, '4ALAH5D01c70W02SC')
            .then((result) => {
                setShowSuccessMessage(true);
                setForm({user_name: '', user_email: '', message: ''});
                setTimeout(() => setShowSuccessMessage(false), 5000);
            }, (error) => {
                alert('An error occurred, Please try again', error.text);
            });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg border border-gray-200 shadow-xl sm:p-10 md:max-w-4xl lg:max-w-5xl">
                <h6 className=" text-zinc-700 text-3xl font-bold text-center mb-4">Feel Free to Contact Us</h6>
                <form onSubmit={sendEmail} className="space-y-6">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaUser className="text-gray-400 mr-2" />
                        <input type="text" name="user_name" id="user_name" required placeholder="Your Name"
                            className="bg-transparent border-none w-full focus:ring-0 placeholder-gray-400 text-gray-700"
                            value={form.user_name} onChange={handleChange} />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaEnvelope className="text-gray-400 mr-2" />
                        <input type="email" name="user_email" id="user_email" required placeholder="Your Email"
                            className="bg-transparent border-none w-full focus:ring-0 placeholder-gray-400 text-gray-700"
                            value={form.user_email} onChange={handleChange} />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaPaperPlane className="text-gray-400 mr-2" />
                        <textarea name="message" id="message" required placeholder="Message"
                            className="bg-transparent border-none w-full focus:ring-0 placeholder-gray-400 text-gray-700"
                            rows="1" value={form.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Send Message</button>
                </form>
                {showSuccessMessage && (
                    <div className="mt-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Success!</span> Your message has been sent.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
