import {Fragment} from 'react';
import React from "react";
import Seo from "../components/seo";
import {HomePageData} from "../data/home-page";
import StickyHeader from "../components/header/sticky-header";
import Footer from "../components/footer/footer";
import PricingPage from "../components/pricing";
import Communications from "../components/support";
import SDKintegration from "../components/sdk-integraion";
import {ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";

function Pricing() {
    return (
        <ThemeProvider theme={themeSettings}>
            {/*overwrites title and include SEO*/}
            <Seo data={HomePageData.seo}/>
            <Fragment>
                <Seo data={HomePageData.seo}/>
                <StickyHeader/>
                <PricingPage/>
                <SDKintegration data={HomePageData.sdk}/>
                <Communications data={HomePageData.communications}/>
                <Footer/>
            </Fragment>
        </ThemeProvider>
    );
}

export default Pricing;