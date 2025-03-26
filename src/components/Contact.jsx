import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { forwardRef, useRef } from 'react';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_b81czcp',
                'template_povv60a',
                form.current,
                'jvxMWNbmI5Zs_kd6U'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.error('Failed to send message:', error.text);
                    alert('Failed to send message. Please check the configuration and try again.');
                }
            );
    };

    return (
        <div className="text-white py-20" id="Contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-5xl text-center my-10">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    {/* Contact Info */}
                    <div className="flex-1">
                        <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r text-purple-600 mb-4">
                            Let&#39;s Talk
                        </h3>
                        <p>I&#39;m open to discussing web development projects or hiring opportunities.</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-orange-500 mr-2" />
                            <span className="hover:underline">jaykanty24092004@gmail.com</span>
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-blue-700 mr-2" />
                            <span className="hover:underline">+91 9112526004</span>
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-700 mr-2" />
                            <span className="hover:underline">
                                Gla University, Mathura, Uttar Pradesh, India
                            </span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 w-full">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-purple-600"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-purple-600"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-purple-600"
                                    rows="5"
                                    placeholder="Enter Your Message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-stone-300 via-slate-500 to-purple-600 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(Contact);
