import React from "react";
import { IndexPageTemplate } from "../../templates";

const IndexPagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate
    html={widgetFor("body")}
    heroImage={entry.getIn(["data", "heroImage"])}
    hero={entry.getIn(["data", "hero"])}
    picture1={entry.getIn(["data", "picture1"])}
    isFormActive={entry.getIn(["data", "isFormActive"])}
    notActiveDescription={entry.getIn(["data", "notActiveDescription"])}
    formDescription={entry.getIn(["data", "formDescription"])}
    formTitle={entry.getIn(["data", "formTitle"])}
    footer={{
      text: entry.getIn(["data", "footer", "text"]),
      email: entry.getIn(["data", "footer", "email"]),
      telephone: entry.getIn(["data", "footer", "telephone"]),
      address: entry.getIn(["data", "footer", "address"])
    }}
  />
);

export default IndexPagePreview;
