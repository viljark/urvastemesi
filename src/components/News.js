import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

class News extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query NewsQuery {
             allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
              filter: { frontmatter: { templateKey: { eq: "blog-post" }, title: { ne: "placeholder"} }}
            ) {
              edges {
                node {
                  excerpt(pruneLength: 400)
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                    date(formatString: "DD.MM.YYYY")
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const allMarkdownRemark = data.allMarkdownRemark;
          if (!allMarkdownRemark) {
            return null;
          }
          return <div className="content box">
            <h2>Uudised</h2>
            {allMarkdownRemark.edges.map(({ node: { excerpt, id, fields, frontmatter } }, i) => (
              <>
                {i > 0 && (<hr/>)}
                <article key={i}>
                  <Link  to={fields.slug}>
                    <h4>{frontmatter.title} </h4>
                  </Link>
                  <p className="date">
                    <small>{frontmatter.date}</small>
                  </p>
                  <p>{excerpt}</p>

                  <p className="has-text-right">
                    <a className="button is-primary is-outlined is-small" href={fields.slug}>Loe edasi</a>
                  </p>
                </article>
              </>
            ))}
          </div>;
        }}
      />
    );
  }
}

export default News;
