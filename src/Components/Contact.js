import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const initialvalue = { name: "", email: "", message: "" };
  const [formvalues, setFormvalues] = useState(initialvalue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      alert("Form data is successfully sent.");
      console.log(formvalues);
    }
  }, [formError, isSubmit]); // Add formError and isSubmit to the dependency array

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    // ...rest of your component code
  );
}

export default Contact;
