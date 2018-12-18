import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";


const Videos = () => {
  return (
    <StaticQuery
      query={graphql`
          query VideosQuery {
            allFile(sort: {fields: modifiedTime, order: DESC}, filter: {sourceInstanceName: {eq: "media"}, extension: {regex: "/mp4|mov|webm/i"}}) {
              edges {
                node {
                  publicURL
                  name
                }
              }
            }
          }
        `}
      render={data => (
        <div className="videos">
          {
            data.allFile.edges && data.allFile.edges.map((edge) => (
                <div className="videos__wrap" tabIndex={0} key={edge.node.publicURL}>
                  <Player src={edge.node.publicURL} fluid={true} aspectRatio={"4:3"}>
                    <BigPlayButton position="center"/>
                  </Player>
                  <p className="videos__name">
                    {edge.node.name}
                  </p>
                </div>
            ))
          }
        </div>
      )}
    />
  );
};

export default Videos;
