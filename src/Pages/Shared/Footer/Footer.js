import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className="">
            <Card.Footer className="text-muted mt-5 text-center">Copyright &copy; Qk car service {year}</Card.Footer>
        </div>
    );
};

export default Footer;