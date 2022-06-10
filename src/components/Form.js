import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  //prevent default

  return (
    <div>
      <form
        className="contact"
        action="https://formspree.io/f/mlezwjvj"
        method="post"
      >
        <h1>My React Form</h1>
        <select name="Salutation" id="salut" className="sInput salut">
          <option value="Miss">Ms.</option>
          <option value="Mister">Mr.</option>
        </select>
        <input
          type="text"
          name="Name"
          id="name"
          minlength="3"
          required
          placeholder="First name"
          className="sInput fName"
        />
        <input
          type="text"
          name="Name"
          id="name"
          minlength="3"
          required
          placeholder="Last name"
          className="sInput lName"
        />

        <input
          type="email"
          name="Email"
          id="email"
          required
          placeholder="Email"
          className="bInput email"
        />
        <input
          type="text"
          name="City"
          id="city"
          minlength="3"
          placeholder="City"
          className="mInput city"
        />
        <input
          type="text"
          name="County"
          id="country"
          minlength="3"
          placeholder="Country"
          required
          className="mInput country"
        />
        <input
          type="number"
          name="Dial Code"
          id="code"
          minlength="3"
          placeholder="Dial Code"
          className="mInput code"
        />
        <input
          type="number"
          name="Phone Nr."
          id="phone"
          minlength="5"
          placeholder="Phone Number"
          className="mInput phone"
        />
        <select name="Products" id="product" className="bInput product">
          <option value="">Fill the Product</option>
          <optgroup label="laptop">
            <option value="Mac">Macbook</option>
            <option value="Lenovo">Lenovo</option>
            <option value="HP">HP</option>
            <option value="IBM">IBM</option>
          </optgroup>
          <optgroup label="mobil">
            <option value="IPhone">IPhone</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Nokia">Nokia</option>
            <option value="Samsumg">Samsung</option>
          </optgroup>
        </select>

        <input
          type="textarea"
          name="Comment"
          id="comment"
          placeholder="Additional Information"
          className="bInput info"
        />

        <input type="file" name="CV-File" id="cv" className="mInput cv" />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
