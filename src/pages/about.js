// pages/about.js
import Link from "next/link";

export default function About() {
    return (
        <main className="about-page">

            {/* Hero / Intro */}
            <section className="about-hero">
                <h1>About Discover Green Care</h1>
                <p>Concierge, Non-Medical Home Care for Families Who Value Calm and Consistency</p>
            </section>

            {/* Business Overview */}
            <section className="business-overview">
                <h2>Business Overview</h2>
                <p><strong>Legal Name:</strong> Discover Green Care Services LLC</p>
                <p><strong>Public Brand Name:</strong> Discover Green Care</p>
                <p><strong>Service Type:</strong> Concierge, Non-Medical Home Care</p>
            </section>

            {/* Service Areas */}
            <section className="service-areas">
                <h2>Service Areas</h2>
                <p>Cobb • Cherokee • Gwinnett • Fulton • Douglas • Rockdale • Clayton • Henry • Fayette (Georgia)</p>
            </section>

            {/* Call-to-Action */}
            <section className="about-cta">
                <Link href="/contact" className="cta-button">
                    Request a Consultation
                </Link>
            </section>

        </main>
    );
}
