import React from 'react'
import { Link } from 'gatsby';

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
            <dt>Blog</dt>
            <dd><Link to="/Blog">Visit my blog</Link></dd>
            <dt>Viewer</dt>
            <dd><Link to="/GitHubViewer">Visit my GitHub Viewer</Link></dd>
            <dt>Privacy</dt>
            <dd><Link to="/Privacy">My privacy policy in accordance with Google Analytics</Link></dd>
            <dt>Photos</dt>
            <dd><a href="https://photography.reecemercer.dev" target="_blank" rel="noopener noreferrer">Visit my photography site</a></dd>
          </dl>
        </section>
        <p className="copyright">&copy; {new Date().getFullYear()} Reece Mercer</p>
    </footer>
);

export default Footer
