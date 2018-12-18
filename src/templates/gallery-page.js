import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import Footer from "../components/Footer";
import Videos from "../components/Videos";


const Image = ({ photo, index, onClick }) => {
  return (
    <img srcSet={photo.srcSet} onClick={(e) => {
      onClick(e, { index });
    }} style={{ width: photo.width, height: photo.height, margin: "2px" }} alt=""/>
  );
};

export class GalleryPageTemplate extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const { fluidImgs, title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content;
    const photos = fluidImgs.map(img => ({
      srcSet: img.srcSet,
      src: img.src,
      width: img.aspectRatio,
      height: 1
    }));
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                  <h2 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h2>
                  <PageContent className="content" content={content}/>
                  <Gallery ImageComponent={Image} photos={photos} onClick={this.openLightbox}/>
                  <Videos/>
                  <Lightbox images={photos}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                  />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    );
  }
}

const GalleryPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const fluidImgs = data.allFile.edges.filter(e => e.node.childImageSharp).map(e => e.node.childImageSharp.fluid);
  return (
    <Layout>
      <GalleryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        fluidImgs={fluidImgs}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "media"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
