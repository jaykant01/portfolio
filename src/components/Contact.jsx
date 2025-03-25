import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import {forwardRef} from 'react'
// import {useState} from "react";
import { useRef } from 'react';

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_blhkih9',
                'template_2nl8tkb',
                form.current, {
                publicKey: 'jvxMWNbmI5Zs_kd6U',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <div  className="text-white py-20" id="Contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-5xl  text-center my-10">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r
            text-purple-600 mb-4'>Let&#39;s Talk</h3>
                        <p>I&#39;m open to discussing web development projects or hiring opportunities.</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-orange-500 mr-2'></FaEnvelope>
                            <span className='hover:underline'>
                                jaykanty24092004@gmail.com
                            </span>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-blue-700 mr-2'></FaPhone>
                            <span className='hover:underline'>+91 9112526004</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className=' inline-block text-green-700 mr-2'></FaMapMarkedAlt>
                            <span className='hover:underline'>Gla University, Mathura, UttarPradesh, India</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                            <div>
                                <label className='block mb-2'>Your Name</label>
                                <input type="text" name="name"
                                       className='w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none
                    focus:border-purple-600'
                                       placeholder='Enter You Name'/>
                            </div>
                            <div>
                                <label className='block mb-2'>Email</label>
                                <input type="email"  name="email"
                                       className='w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none
                    focus:border-purple-600'
                                       placeholder='Enter You Email'/>
                            </div>
                            <div>
                                <label className='block mb-2'>Message</label>
                                <textarea type="text" name="message"
                                          className='w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none
                    focus:border-purple-600'
                                          rows="5"
                                          placeholder='Enter You Message'/>
                            </div>
                            <button  type="submit" value="send" className='bg-gradient-to-r from-stone-300 via-slate-500 to-purple-600 text-white  md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Contact)