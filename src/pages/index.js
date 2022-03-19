import React from 'react';
import {Fragment} from "react";
import StickyHeader from "../components/header/sticky-header";
import {ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";
import HeroBanner from "../components/hero-banner";
import {HomePageData} from "../data/home-page";
import Seo from "../components/seo";
import SDKintegration from "../components/languages";
import Communications from "../components/support";
import Footer from "../components/footer/footer";

function Hello() {
    return (
        <ThemeProvider theme={themeSettings}>
            {/*overwrites title and include SEO*/}
            <Seo data={HomePageData.seo}/>
            <Fragment>
                <StickyHeader/>
                <HeroBanner data={HomePageData.header}/>


                <SDKintegration data={HomePageData.sdk}/>
                <Communications data={HomePageData.communications}/>
                <Footer/>
            </Fragment>
        </ThemeProvider>
    );
}

export default Hello;