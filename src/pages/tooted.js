import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CMSImage from "../components/CMSImage";
import HeroImageQuery from "../components/HeroImageQuery";
import { OrderingForm } from "../components/OrderingForm";
import Footer from "../components/Footer";
import { FaPlus, FaShoppingCart } from "react-icons/fa";

export default class ProductsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showForm: false,
    }
  }

  handleAdd = (item) => {
    this.setState({
      items: [...this.state.items, item],
    });
  }

  toggleCheckout = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  handleRemoveItem = (item) => {
    this.setState({
      items: this.state.items.filter((i) => i !== item),
    });
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark ? data.allMarkdownRemark.edges : undefined;
    const {items, showForm} = this.state;
    return (
      <Layout>
        <section className="hero is-medium is-bold">
          <HeroImageQuery img={"/mesi2.jpg"} />
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white is-size-2 is-size-3-mobile">
                Tooted ja tellimine
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {posts && posts
                .map(({ node: post }, i) => (
                  <div className="column is-3-desktop is-4-tablet" key={i}>
                    <div className="spacer">
                      <div className="card " key={post.id}>
                        <div className="card-image">
                          <figure className="image">
                            <CMSImage imageInfo={post.frontmatter.picture}/>
                          </figure>
                        </div>
                        <div className="card-content">

                          <div className="content">
                            <h3>{post.frontmatter.title}</h3>
                            <p>
                              {post.frontmatter.description}
                            </p>

                            <div className="is-flex price-wrap">
                              <h4 className="price is-marginless is-primary">Hind: {post.frontmatter.price} €</h4>
                              <a href={post.fields.slug} className="is-success button is-outlined is-small">Rohkem infot</a>
                            </div>
                          </div>
                        </div>
                        <footer className="card-footer">
                          <a href="#" onClick={(e) => {
                            e.preventDefault();
                            this.handleAdd({
                              name: post.frontmatter.title,
                              price: post.frontmatter.price,
                            })

                          }} className="add-to-order card-footer-item is-primary button is-outlined"> <FaPlus/> &nbsp;Lisa tellimusse</a>
                        </footer>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        {items.length > 0 && (
          ReactDOM.createPortal((
            <div>
              {showForm && (
                <div className="modal is-active">
                  <div className="modal-background"/>
                  <div className="modal-content">
                    <OrderingForm removeItem={this.handleRemoveItem} items={items}/>
                  </div>
                  <button className="modal-close is-large" aria-label="close" onClick={this.toggleCheckout}/>
                </div>


              )}
              <div className="checkout">
                {!showForm && (
                  <button onClick={this.toggleCheckout} className="button is-success is-large"> <FaShoppingCart/>&nbsp;({items.length}) Vormista tellimus</button>
                )}

              </div>
            </div>
          ), document.body)
        )

        }
        <Footer/>
      </Layout>
    )
  }
}

ProductsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "product" }, title: { ne: "placeholder"} }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            price
            description
            templateKey
            picture {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 1200, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
