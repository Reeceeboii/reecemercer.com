import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'

const Privacy = (props) => {
    return(
        <Layout>
        <Helmet title="Privacy policy" />
        <HeaderGeneric headerText="Privacy policy"
        paragraphText="Due to the use of analytical services on this site, I am required to include the following privacy policy."/>

        <hr/>

        <div style={{textAlign: "center"}}>
            <h2><b>reecemercer.dev privacy policy.</b></h2>

            <h3>This website uses cookies in order to do simple visitor counts and other similar operations.
            These cookies are only coming from the Google Analytics service,
            and no other system of data collection is in use.</h3>

            <h3>This data is used solely for statistical viewing, and is not used in advertising, sales or
            remarketing in any way. This information is never shared with any third parties beyond the Google
            Analytics platform.</h3>

            <h3>Any information collected is entirely confidential and is under data retention for 26 months,
            starting from the date of any particular visit.</h3>

            <h3>Collected data includes:</h3>
            <ul style={{color: "white"}}>
                <li>IP address used for geolocation</li>
                <li>Device type and screen resolution</li>
                <li>Web browser in use on the device</li>
                <li>The pages you visit</li>
                <li>How long your total site visit lasts</li>
                <li>Referrers (if present)</li>
            </ul>

            <h3>You can opt-out of all Google Analytics tracking by installing the
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"> Google Analytics Opt-out Browser Add-on</a></h3>

            <Link to="/" className="button">Return home</Link>
        </div>
        <hr/>
        </Layout>
    )
}


export default Privacy
