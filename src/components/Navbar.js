import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    Discover Green Care
                </Link>

                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/approach">Our Approach</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
