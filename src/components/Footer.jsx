import React from 'react';
import "../App.css"; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container-filter">
                {/* <p className="text">© {new Date().getFullYear()} LinkWire. All rights reserved.</p>
                <div className="links">
                    <a href="/privacy-policy" className="link">Privacy Policy</a>
                    <a href="/terms-of-service" className="link">Terms of Service</a>
                </div> */}
                <div className='footer-contents'>
                <div className="services-heading footer-heading">
                  <p className="small-text">Get In Touch</p>
                  <h1 className="main-heading">Take Control of Your Narrative</h1>
                  <div className="decorative-line2"></div>
                  <p className='call-to-action'>
                    Your reputation, security, and influence are too important to leave to chance. Let s build a strategy that puts you ahead.
                  </p>
                </div>

                <div className='contact-info'>
                  <div>
                    <h1 className='get-intouch-heading'>Get In Touch</h1>
                    <p>Talk to us today and take control of your future. <br/> © {new Date().getFullYear()} LinkWire. All rights reserved.</p>
                  </div>
                  <div className='contact-details'>
                    <div className='contact-row'>
                       <div className='webpages'>
                        <h3><i class="ri-global-line"></i> Websites</h3>
                        <p>
                            <a href="https://technews.co.zw/">Technews.co.zw</a>, <a href="https://dailypress.co.zw/">Dailypress.co.zw</a>.
                        </p>
                       </div>
                    </div>
                    <div className='contact-row'>
                       <div className='webpages'>
                        <h3><i class="ri-linkedin-fill"></i> LinkedIn</h3>
                        <p>
                            <a href="https://www.linkedin.com/company/linkwire/">@Linkwire</a>
                        </p>
                       </div>
                    </div>
                    <div className='contact-row'>
                       <div className='webpages'>
                        <h3><i className="ri-mail-line"></i> Email</h3>
                        <p>
                            <a href="mailto:info@linkwire.co.zw">info@linkwire.co.zw</a>
                        </p>
                       </div>
                    </div>

                    <div className='contact-row'>
                       <div className='webpages'>
                        <h3><i className="ri-phone-line"></i> Phone</h3>
                        <p>
                            <a href="tel:+263785149049">+263 785 149 049</a>, <a href="tel:+263719278026">+263 719 278 026</a>
                        </p>
                       </div>
                    </div>
                  </div>
                </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;