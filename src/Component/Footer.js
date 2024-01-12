import React from 'react';
import Pokeballe from './Pokeballe.js';
export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 container-fluid">
      <div className="row">
        <div className="col-12">
          <p>
            &copy; 2023 P{<Pokeballe sens="+" />}kéSt{<Pokeballe sens="-" />}re.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer;
