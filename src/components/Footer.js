import React from 'react';
import { Link } from 'gatsby';
import APIProd from '../misc-modules/APIProd';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2><u>Contacts & Socials</u></h2>
            <dl className="alt">
                <dt>Emails</dt>
                <dd><a href="mailto:reecemercer@outlook.com">reecemercer@outlook.com</a></dd>
                <dd><a href="mailto:reece.mercer@city.ac.uk">reece.mercer@city.ac.uk</a></dd>
            </dl>
            <ul className="icons">
               <li><a href="https://github.com/Reeceeboii" target="_blank" rel="noopener noreferrer" className="icon fa-github alt"><span className="label"/></a></li>
              <li><a href="https://www.linkedin.com/in/reece-mercer/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin-square alt"><span className="label"/></a></li>
            </ul>
        </section>
        <section>
          <h2><u>Other</u></h2>
          <dl className="alt">
            <dt>API</dt>
            <dd><a href={APIProd} target="_blank" rel="noopener noreferrer">API</a></dd>
            <dt>Privacy</dt>
            <dd><Link to="/Privacy">Privacy policy</Link></dd>
            <dt>Photos</dt>
            <dd><a href="https://photography.reecemercer.dev" target="_blank" rel="noopener noreferrer">Visit my photography site</a></dd>
          </dl>
        </section>
        <p className="copyright">&copy; {new Date().getFullYear()} Reece Mercer</p>
    </footer>
);

export default Footer;