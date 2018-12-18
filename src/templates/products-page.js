import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Columns from "../components/Columns";
import CMSImage from "../components/CMSImage";
import Footer from "../components/Footer";

export const ProductsPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      description,
                                      intro,
                                      main,
                                      testimonials,
                                      fullImage,
                                      columns
                                    }) => (
  <>
    <section className="hero is-medium is-bold">
      <CMSImage
        className="hero-image"
        imageInfo={image}
      />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-size-2 is-size-3-mobile">
            {title}
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              {intro && intro.blurbs && <Features gridItems={intro.blurbs}/>}
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile">
                  <div className="tile">
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <CMSImage
                          imageInfo={main.image1}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <CMSImage
                          imageInfo={main.image2}
                        />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <CMSImage
                      imageInfo={main.image3}
                    />
                  </article>
                </div>
              </div>
              <Testimonials testimonials={testimonials}/>
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage && fullImage.childImageSharp ? fullImage.childImageSharp.fluid.src : fullImage})` }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {columns.heading}
              </h2>
              <p className="is-size-5">{columns.description}</p>
              <Columns data={columns.columns}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
);

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProductsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        columns={frontmatter.columns}
      />
    </Layout>
  );
};

export default ProductsPage;

export const HistoryPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 351) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        columns {
          heading
          description
          columns {
            description
            items
            title
            big
          }
        }
      }
    }
  }
`;
