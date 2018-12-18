import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import CMSImage from "../components/CMSImage";

export const ProductTemplate = ({
                                  content,
                                  contentComponent,
                                  description,
                                  title,
                                  helmet,
                                  image
                                }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-3">
                <CMSImage imageInfo={image} />
              </div>
              <div className="column">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
                <PostContent content={content}/>
                <br/>
                <p><a href="/tooted" className="button is-primary">Tellimine</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const Product = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Tooted`}/>}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.picture}
      />
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        price
        description
        picture {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
