import Head from '@docusaurus/Head';
import React from "react";

const Seo = ({data}) => {
    return (
        <Head>
            <title>{data.title}</title>
            <link rel="icon" href="/img/favicon.ico"/>
            <link rel="canonical" href="https://apito.io"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            />
            <meta charSet="UTF-8"/>
            <meta name="description" content={data.description}/>
            <meta name="keywords" content={data.keywords}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    );
};

export default Seo;