import React from 'react';
// import { Footer, } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="text-center font-small darken-2">
            
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.kondipress.com"> Kondipress Team </a>
            </p>
        </footer>
    );
}

export default Footer;