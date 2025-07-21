'use client';

import { Container } from "./Container";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        emailjs
        .send(
            'service_qwfqib9', 
            'template_w69voge', 
            formData,
            'tuLLc-wyCvDdf39eF' 
        )
        .then(
            () => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            },
            () => {
            setStatus('error');
            }
        );
    };
  return (
    <Container className="!p-0">
        <form onSubmit={sendEmail} className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-md space-y-4">

            <input
                type="text"
                name="name"
                placeholder="Nama"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 dark:text-trueGray-900  dark:bg-trueGray-300 focus:ring-trueGray-900"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 dark:text-trueGray-900 dark:bg-trueGray-300  focus:ring-trueGray-900"
            />

            <textarea
                name="message"
                placeholder="Pesan Anda"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 dark:text-trueGray-900 dark:bg-trueGray-300  focus:ring-trueGray-900"
            ></textarea>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#910705] text-white py-2 rounded-md hover:bg-[#910705b5] transition"
            >
                {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>

            {status === 'success' && (
                <p className="text-green-600 text-sm text-center">Pesan berhasil dikirim!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Gagal mengirim pesan. Coba lagi.</p>
            )}
        </form>
    </Container>
  );
};
