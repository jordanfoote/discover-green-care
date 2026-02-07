// pages/approach.js
import Link from "next/link";

export default function Approach() {
    return (
        <main className="approach-page">

            {/* Hero Section */}
            <section className="approach-hero">
                <h1>Our Approach</h1>
                <p>Relationship-Driven, Concierge-Level Home Care</p>
            </section>

            {/* Care Model & Differentiation */}
            <section className="care-model">
                <h2>Care Model & Differentiation</h2>
                <p>
                    Discover Green Care was created for families who want more than basic coverage.
                    Traditional home care often focuses on completing tasks and filling shifts.
                    Our model is intentionally different. We provide relationship-driven, concierge-level care
                    that prioritizes consistency, coordination, and thoughtful oversight—so families feel
                    supported, not managed.
                </p>

                <h3>High-Touch, Low-Chaos Approach</h3>
                <ul>
                    <li>Care is proactive, not reactive</li>
                    <li>Communication is intentional, not fragmented</li>
                    <li>Households are supported as a whole, not treated as a checklist</li>
                </ul>

                <p>
                    Our clients choose us because they value calm, continuity, and confidence—and understand
                    that elevated care requires deeper involvement, stronger systems, and a more hands-on
                    model. Our pricing reflects the level of attention, coordination, and accountability built
                    into everything we do.
                </p>
            </section>

            {/* Continuity & Availability */}
            <section className="continuity">
                <h2>Continuity & Availability</h2>
                <p>
                    Discover Green Care incorporates planned backup caregiver support and after-hours contact
                    capabilities into our care model to ensure continuity, responsiveness, and peace of mind
                    during unexpected changes.
                </p>
            </section>

            {/* Concierge Care Coordination & Family Advocacy */}
            <section className="concierge-coordination">
                <h2>Concierge Care Coordination & Family Advocacy</h2>
                <p>
                    Ongoing oversight and communication across caregivers, families, and trusted service
                    providers—ensuring clarity, continuity, and thoughtful follow-through in day-to-day care
                    and household support.
                </p>
            </section>

            {/* Household Organization, Safety & Project Support */}
            <section className="household-support">
                <h2>Household Organization, Safety & Project Support</h2>
                <p>
                    Project-based support focused on improving household function, safety, and organization.
                    May include safety readiness, home organization, systems setup, and coordination of
                    household projects that support long-term independence and ease of care.
                </p>
            </section>

            {/* Transitional Support */}
            <section className="transitional-support">
                <h2>Transitional Support</h2>
                <p>
                    Short-term, focused support during periods of change—such as hospital discharge, rehab
                    stays, or end-of-life transitions—ensuring continuity of care, communication, and
                    household readiness.
                </p>
            </section>

            {/* Call-to-Action */}
            <section className="approach-cta">
                <Link href="/contact" className="cta-button">
                    Request a Consultation
                </Link>
            </section>

        </main>
    );
}
