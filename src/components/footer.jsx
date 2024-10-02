import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                    <div>
                        <h3 className="font-semibold mb-2">ABOUT TOMATO</h3>
                        <ul>
                            <li>Who We Are</li>
                            <li>Blog</li>
                            <li>Work With Us</li>
                            <li>Investor Relations</li>
                            <li>Report Fraud</li>
                            <li>Press Kit</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">TOMATOVERSE</h3>
                        <ul>
                            <li>Tomato</li>
                            <li>Blinkit</li>
                            <li>Feeding India</li>
                            <li>Hyperpure</li>
                            <li>Tomato Live</li>
                            <li>Zomaland</li>
                            <li>Weather Union</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">FOR RESTAURANTS</h3>
                        <ul>
                            <li>Partner With Us</li>
                            <li>Apps For You</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">LEARN MORE</h3>
                        <ul>
                            <li>Privacy</li>
                            <li>Security</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-6 pt-4 text-center">
                    <p className="text-sm">
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Tomato™ Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
