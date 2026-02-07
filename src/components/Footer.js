export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h3>Discover Green Care</h3>
                    <p>
                        Elevated, non-medical concierge home care providing
                        calm, reliable support for individuals and families
                        throughout Georgia.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/approach">Our Approach</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Get in Touch</h4>
                    <p>Serving select counties across Georgia</p>
                    <p>
                        <a href="mailto:info@discovergreencare.com">
                            info@discovergreencare.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Discover Green Care LLC. All rights reserved.
                </p>
                <p className="footer-disclaimer">
                    Non-medical home care services. Not a medical provider.
                </p>
            </div>
        </footer>
    )
}
