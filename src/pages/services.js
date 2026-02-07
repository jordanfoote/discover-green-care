// pages/services.js
import Link from "next/link";

export default function Services() {
    return (
        <main className="services-page">

            {/* Hero Section */}
            <section className="services-hero">
                <h1>Our Services</h1>
                <p>Elevated, Concierge Home Care for Your Family</p>
            </section>

            {/* Foundational Care Section */}
            <section className="foundational-care">
                <h2>Foundational Care</h2>
                <ul>
                    <li>Companion & personal care</li>
                    <li>Safety supervision & daily routine support</li>
                    <li>Household support related to care</li>
                </ul>
            </section>

            {/* Concierge Add-Ons Section */}
            <section className="concierge-addons">
                <h2>Concierge Add-Ons</h2>
                <ul>
                    <li>Concierge Care Coordination & Family Advocacy</li>
                    <li>Household Organization, Safety & Project Support</li>
                    <li>Transitional support</li>
                </ul>
            </section>

            {/* Call-to-Action */}
            <section className="services-cta">
                <Link href="/contact" className="cta-button">
                    Request a Consultation
                </Link>
            </section>

        </main>
    );
}
