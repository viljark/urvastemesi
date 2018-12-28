import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import favicon from "../img/urvaste-mesi2.png";
import "./all.scss";

typeof window !== 'undefined' && require("picturefill") && require("picturefill/dist/plugins/mutation/pf.mutation");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Mee ja mesilasperede müük - Urvaste Mesi OÜ</title>
      <link rel="shortcut icon" type="image/png" href={`${favicon}`}/>
      <link href="https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700" rel="stylesheet" />
      <meta name="description" content="Mee tootmine, müük, hulgimüük ja mesilasperede müük - Urvaste Mesi OÜ"/>
      <meta name="google-site-verification" content="VIuTP3sk5W-abI4EuIy-QcCdaApVbfSz_cIIWQpGm0o" />
      {/*<meta name="image" content={image} />*/}

      {/* OpenGraph tags */}
      <meta property="og:url" content="https://urvastemesi.ee"/>
      <meta property="og:title" content="Mee tootmine müük - Urvaste Mesi OÜ"/>
      <meta property="og:description" content="Mee tootmine, müük, hulgimüük ja mesilasperede müük - Urvaste Mesi OÜ"/>
    </Helmet>
    <Navbar/>
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
