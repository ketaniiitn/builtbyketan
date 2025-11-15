import { useState } from "react";
import emailjs from "@emailjs/browser";
import moonpic from "./../assets/pexels-pixabay-459475.jpg";

export default function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs.send(
  "portfolio",
  "template_f9z8e5i",
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  "sFs1akTGSPRAfY8bK"
).then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" }); // clear form
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="section-resume" id="contact">
      <h1>
        Contact <span className="half-text">Me</span>
      </h1>
      <p>Feel free to reach out and collaborate with me anytime!</p>

      <div className="contact-card refined-layout">
        
        {/* Left side form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              value={form.name}
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={form.email}
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              value={form.message}
              required
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="email-button">
            Send Message
          </button>

          {status && (
            <p style={{ marginTop: "1rem", color: "#a3d7ed" }}>
              {status}
            </p>
          )}
        </form>

        {/* Right side image */}
        <div className="contact-image-box">
          <img src={moonpic} alt="Contact" className="contact-image" />
        </div>
      </div>
    </section>
  );
}
