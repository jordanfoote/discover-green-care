import SEO from '../components/SEO'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <SEO
        title="Concierge Home Care in Georgia | Discover Green Care"
        description="Discover Green Care provides trusted, non-medical concierge home care and companion services throughout Georgia."
      />
      <Head>
        <title>Discover Green Care | Concierge Home Care in Georgia</title>
        <meta
          name="description"
          content="Discover Green Care provides elevated concierge, non-medical home care in Georgia. Companion care, personal care, and concierge support across select counties."
        />
      </Head>

      {/* ---------------- Split Hero Section ---------------- */}
      <section className="split-hero">
        <div className="hero-visual" />

        <div className="elevated-care">
          <h1>Concierge Home Care</h1>
          <h2>Home Care, Elevated</h2>

          <p>
            Discover Green Care provides elevated home care for families who value
            calm, consistency, and thoughtful oversight.
          </p>

          <p>
            Our concierge, relationship-driven model goes beyond task-based support,
            offering high-touch care and coordination designed to reduce stress and
            bring confidence to daily life.
          </p>

          <a href="/contact" className="cta-button">
            Request a Consultation
          </a>
        </div>
      </section>


      {/* ---------------- Continuity Section ---------------- */}
      <section className="continuity-section">
        <div className="container">
          <p>
            Built-in continuity, backup support, and after-hours response—so care remains stable even when plans change.
          </p>
        </div>
      </section>

      {/* ---------------- Service Areas Section ---------------- */}
      <section className="service-areas-section">
        <div className="container">
          <h2>Service Areas</h2>
          <p>Cobb • Cherokee • Gwinnett • Fulton • Douglas • Rockdale • Clayton • Henry • Fayette (Georgia)</p>
        </div>
      </section>

      {/* ---------------- Call To Action ---------------- */}
      <section className="cta-section">
        <div className="container">
          <Link href="/contact" className="btn-primary">
            Request More Information
          </Link>
        </div>
      </section>
    </>
  )
}