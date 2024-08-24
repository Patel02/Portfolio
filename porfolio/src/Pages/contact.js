import React, { useState } from 'react';

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
        // Handle form submission here
        console.log('Form data submitted:', formData);
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
