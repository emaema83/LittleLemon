import "./App.css";
import logoFooter from "./logoFooter.png";
import React from "react";
import logoHeader from "./logoHeader.png";
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const App = () =>
{
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (

    <div className="emasapp">


      <header className="flex-container">
        <img alt="Little Lemon restaurant" className="logo-header" src={logoHeader} />
          <span className="home">Home</span>
          <span className="about">About</span>
          <span className="menu">Menu</span>
          <span>Reservation</span>
          <span className="orderonline">Order Online</span>
          <span className="login">Log In</span>
      </header>
        <span className="header">You can now reserve your table</span>
        <span className="text-we-are-happy">
        We are happy that you want reserve a table in our local restaurant. We
        add new features for you to make your reservation process even more
        personalized.
        </span>


        <form className="demoform" onSubmit={formik.handleSubmit}>
          <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option> Casual Date</option>
          </select>
          <label>Date</label>
          <input name="date" type="date" className="form-control"/>
          <label id="smalllabel">We are open every day.</label>
          <label>Hour</label>
          <input name="hour" type="number" min="11" max="22" className="form-control" defaultValue="11"/>
          <label id="smalllabel">From 11am to 11pm.</label>
          <label>Number of guests</label>
          <input name="guests"  type="number" min="1" max="12"  required="required" defaultValue="1"/>
          <label id="smalllabel">Maximum 12 guests.</label>
          <label>Name</label>
          <input name="name"  required="required" />
          <label>Phone</label>
          <input type="tel" id="phone" name="phone"
       pattern="[0]{1}[9]{1}[0-9]{2}-[0-9]{3}-[0-9]{3}" placeholder="09xx xxx xxx" required="required" />
          <label>Email</label>
          <input type="email" name="email" id="email" placeholder="email@gmail.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
            <span class="error">{formik.errors.email}</span>
            )}
          <input type="submit" className="submitButton"/>
        </form>

      <footer className="flex-container-1">
        <img alt="Little Lemon Logo" className="logo-footer" src={logoFooter} />
        <div className="flex-container-2">
          <span className="doormat-navigation">Doormat navigation</span>
          <span className="footer-home">Home</span>
          <span className="footer-about">About</span>
          <span className="footer-menu">Menu</span>
          <span className="footer-reservation">Reservation</span>
          <span className="footer-order">Order Online</span>
          <span className="footer-login">Log In</span>
        </div>

        <div className="flex-container-3">
          <span className="contacts">Contacts</span>
          <span className="contacts-adress">Adress</span>
          <span className="contacts-phone">Phone number</span>
          <span className="contacts-email">Email</span>
        </div>

        <div className="flex-container-4">
          <span className="social-media">Social media</span>
          <span className="facebook">Facebook</span>
          <span className="instagram">Instagram</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
