// pages/contact.js
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your request has been submitted.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        // Here you can add backend submission logic
    };

    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <h1>Contact / Intake Form</h1>
                <p>Let’s start your journey to elevated home care</p>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Message / Notes</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Optional"
                    ></textarea>

                    <button type="submit" className="cta-button">
                        Submit Request
                    </button>
                </form>
            </section>
        </main>
    );
}
