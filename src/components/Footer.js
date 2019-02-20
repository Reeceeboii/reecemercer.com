import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact information</h2>
            <dl className="alt">
                <dt>Email</dt>
                <dd><a href="mailto:reecemercer@outlook.com">reecemercer@outlook.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/Reeceeboii" target="_blank" rel="noopener noreferrer" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <section>
          <h2>Other</h2>
          <dl className="alt">
            <dt>Blog</dt>
            <dd><a href="/Blog">Visit my new blog!</a></dd>
          </dl>
        </section>
        <p className="copyright">&copy; Reece Mercer 2019</p>
    </footer>
)

export default Footer
