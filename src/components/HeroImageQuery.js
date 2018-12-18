import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import CMSImage from "./CMSImage";

class HeroImageQuery extends Component {
  render() {
    const { img } = this.props;
    const getImageInfo = (data) => {
      if (data.allFile.edges) {
        const image = data.allFile.edges.find((e) => e.node.childImageSharp.fluid.src.indexOf(img) > -1)
        if (image) {
          return image.node;
        }
      }
      return undefined;
    };
    return (
        <StaticQuery
          query={graphql`
          query CMSImageQuery {
            allFile(filter: {sourceInstanceName: {eq: "media"}}) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 351) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
          render={data => (
            <CMSImage className="hero-image" imageInfo={getImageInfo(data)}/>
          )}
        />
    );
  }
}


export default HeroImageQuery;
