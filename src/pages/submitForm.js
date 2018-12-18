import React from "react";
import Layout from "../components/Layout";
import FooterTemplate from "../components/Footer";
import { Link } from "@reach/router";

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-success">
                    Info edukalt saadetud!
                  </h2>
                  <p><Link to={"/"}>Tagasi avalehele</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterTemplate/>
      </Layout>
    );
  }
}

