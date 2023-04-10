import React, { useState } from "react";
import { alertService } from "../services/alert.service";

const ContactForm = () => {
  const options = useState({
    autoClose: false,
    keepAfterRouteChange: false
  });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      alertService.success('Thank you. We have received your message successfully', options);
    } catch (error) {
      alertService.error(error, options);
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <form
      className="flex flex-col mx-auto"
      name="conveyancing-websites-contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden><input name="bot-field" /></div>
      
      <label className="mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label className="mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label className="mb-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button
        className="text-base-600 border border-base-600 rounded-full w-24 text-center m-8 hover:text-white hover:bg-base-600 hover:cursor-pointer text-xs font-bold px-4 py-1"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
