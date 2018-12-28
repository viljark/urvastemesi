import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class BlogPostsPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark ? data.allMarkdownRemark.posts : undefined;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1 className="has-text-weight-bold is-size-2">Uudised</h1>
                  {posts && posts
                    .map(({ node: post }) => (
                      <div
                        className="content"
                        style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                        key={post.id}
                      >
                        <p>
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                          <span> &bull; </span>
                          <small>{post.frontmatter.date}</small>
                        </p>
                        <p>
                          {post.excerpt}
                          <br />
                          <br />
                          <Link className="button is-small" to={post.fields.slug}>
                            Loe edasi
                          </Link>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

BlogPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogPostsQuery {
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
