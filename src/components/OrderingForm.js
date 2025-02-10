import React from "react";
import { FaBuilding, FaEnvelope, FaTimes } from "react-icons/fa";
import { graphql, StaticQuery } from "gatsby";

export class OrderingForm extends React.Component {
  render() {
    const {items, removeItem} = this.props;
    return (
      <StaticQuery
        query={graphql`
          query OrderingFormQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages\\/index/"}}) {
              edges {
                node {
                  frontmatter {
                    formTitle
                    formDescription
                    isFormActive
                    notActiveDescription
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
          if (!frontmatter) {
            return null;
          }
          const heading = frontmatter.formTitle;
          const active = frontmatter.isFormActive;
          const description = frontmatter.formDescription;
          const notActiveDescription = frontmatter.notActiveDescription;
          return (
            <div className="content box" id="tellimine">
              <h3 className="">
                {heading || "Mesilasemade tellimine"}
              </h3>
              {active && <div>
                <p>
                  {description || "Siia täpsem kirjeldus"}
                </p>
                <form name="Tellimus" method="POST" action="/submitForm"  data-netlify="true">
                 <input type="hidden" name="form-name" value="Tellimus"/>
                  <div className="field">
                    <label className="label">Tellitavad tooted</label>
                    <table className="table is-striped">
                      <tbody>
                        {items.map((item, i) => (
                          <tr key={i}>
                            <td>
                              {item.name}
                            </td>
                            <td>
                              {item.price}€
                            </td>
                            <td>
                              <button onClick={() => {
                                removeItem(item);
                              }} type="button" title="eemalda tellimusest" className="button is-small is-danger is-outlined"><FaTimes/></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="control">
                      <input name="tellimus" type="hidden" className="textarea" value={items.map((item) => `${item.name}, ${item.price}€`).join("\r\n")} placeholder=""/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Nimi</label>
                    <div className="control">
                      <input required={true} name="nimi" className="input" type="text" placeholder=""/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Telefoni number</label>
                    <div className="control">
                      <input required={true} name="telefon" className="input" type="text" placeholder=""/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">E-maili aadress</label>
                    <div className="control has-icons-left">
                      <input required={true} name="email" className="input" type="email" placeholder=""/>
                      <span className="icon is-small is-left">
              <FaEnvelope/>
            </span>
                    </div>
                    <p className="help">Vajalik arve edastamiseks</p>
                  </div>
                  <div className="field">
                    <label className="label">Pakiautomaadi asukoht/nimi</label>
                    <div className="control has-icons-left">
                      <input required={true} name="aadress" className="input" type="text" placeholder=""/>
                      <span className="icon is-small is-left">
                        <FaBuilding/>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Lisainfo</label>
                    <div className="control">
                      <textarea name="lisainfo" className="textarea" placeholder=""/>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-primary">Saada tellimus</button>
                    </div>
                  </div>
                </form>
              </div>}
              {!active &&
              <article className="message is-warning">
                <div className="message-body">
                  {notActiveDescription}
                </div>
              </article>
              }
            </div>
          )
        }}
      />
    );
  }
}
