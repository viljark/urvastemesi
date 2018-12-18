import React from "react";
import { FaBuilding, FaEnvelope } from "react-icons/fa";

export const OrderingForm = ({ active, notActiveDescription, heading, description }) => (
  <div className="content box" id="tellimine">
    <h3 className="">
      {heading || "Mesilasemade tellimine"}
    </h3>
    {active && <div>
      <p>
        {description || "Siia täpsem kirjeldus"}
      </p>
      <form name="Tellimus" method="POST" action="/submitForm" data-netlify="true">
        <input type="hidden" name="form-name" value="Tellimus" />
        <div className="field">
          <label className="label">Tellitavad tooted</label>
          <div className="control">
            <textarea name="tellimus" required={true} className="textarea" placeholder=""/>
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
          <label className="label">Aadress või pakiautomaadi aadress</label>
          <div className="control has-icons-left">
            <input required={true} name="aadress" className="input" type="text" placeholder=""/>
            <span className="icon is-small is-left">
                        <FaBuilding/>
                      </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Saatmisviis</label>
          <div className="control">
            <div className="select">
              <select required={true} name="saatmisviis" defaultValue={""}>
                <option value={""}>-- Vali saatmisviis --</option>
                <option value={"Omniva"}>Omniva pakiautomaat</option>
                <option value={"Smartpost"}>Smartpost</option>
                <option value={"Tulen ise järele"}>Tulen ise järele</option>
                <option value={"?"}>?</option>
              </select>
            </div>
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
);
