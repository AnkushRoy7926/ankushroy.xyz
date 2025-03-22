'use client';

import "@styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the form from refreshing the page

    const form = event.currentTarget; // Get the form element
    const formData = new FormData(form); // Collect form data
    const data = Object.fromEntries(formData.entries()); // Convert form data to an object

    setStatus("Submitting...");

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error}`);
        return;
      }

      setStatus("Message sent successfully!");
      form.reset(); // Reset the form
    } catch (err) {
      console.error('Error submitting the form:', err);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact_us_6">
      <div className="responsive-container-block container">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="container-block form-wrapper">
            <div className="mob-text">
              <p className="text-blk contactus-head">Get in Touch</p>
              <p className="text-blk contactus-subhead">
                Feel free to share your views and opinions.
              </p>
            </div>
            <div className="responsive-container-block" id="i2cbk">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                <p className="text-blk input-title">NAME</p>
                <input
                  className="input"
                  name="name"
                  placeholder="Please enter your name..."
                  required
                />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                <p className="text-blk input-title">EMAIL</p>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Please enter email..."
                  required
                />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                <p className="text-blk input-title">PHONE NUMBER</p>
                <input
                  className="input"
                  name="phoneNumber"
                  placeholder="Enter phone number... (Optional)"
                />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
                <textarea
                  className="textinput"
                  name="message"
                  placeholder="Please enter your message..."
                  required
                ></textarea>
              </div>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <p className="form-status">{status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
