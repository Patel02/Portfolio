import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_0ohr9ly', 'template_yrz7fjv', formData, {
            publicKey: 'fTibwdSTEbaHY_OIN',
          })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send your message. Please try again later.');
            });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="card shadow mb-5">
                            <div className="card-header">
                                <h3 className="text-center">Contact Me</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message:</label>
                                        <textarea
                                            type="text"
                                            id="message"
                                            name="message"
                                            placeholder="Write your message here"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control"
                                            rows="4"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
