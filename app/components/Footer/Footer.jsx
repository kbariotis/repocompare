import React from 'react';
import { footer } from './Footer.css';

const Footer = () =>
(
  <footer className={footer}>
    <div className="container">
      <p className="text-muted">
        Like this project? Then feel to <a target="_blank" rel="noopener noreferrer" href="https://github.com/tsevdos/repocompare">contribute</a> or
        drop me a <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tsevdos">tweet</a>!
      </p>
    </div>
  </footer>
);

export default Footer;
