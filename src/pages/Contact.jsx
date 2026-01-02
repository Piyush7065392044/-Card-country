import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    const res = await fetch("https://formsubmit.co/ajax/piyushKumar7065392044@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, _subject: "New enquiry" }),
    });

    if (res.ok) {
      setStatus("Thank you – message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Sorry, something went wrong.");
    }
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        .contact{
          min-height:100vh;
          background:#000;
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:"Helvetica Neue",Arial,sans-serif;
        }
        .contact__wrap{
          width:100%;
          max-width:520px;
          padding:4rem 2rem;
        }
        .contact__title{
          font-size:2.75rem;
          font-weight:300;
          letter-spacing:2px;
          text-align:center;
          margin-bottom:3rem;
        }
        .contact__form{
          display:flex;
          flex-direction:column;
          gap:1.5rem;
        }
        .contact__form input,
        .contact__form textarea{
          width:100%;
          background:transparent;
          border:none;
          border-bottom:1px solid rgba(255,255,255,.4);
          color:#fff;
          font-size:1rem;
          padding:.75rem 0;
          outline:none;
          transition:border-color .3s;
        }
        .contact__form input:focus,
        .contact__form textarea:focus{
          border-color:#fff;
        }
        .contact__btn{
          align-self:flex-start;
          background:#fff;
          color:#000;
          border:none;
          padding:.9rem 2.5rem;
          font-size:.9rem;
          letter-spacing:1px;
          cursor:pointer;
          transition:all .3s ease;
        }
        .contact__btn:hover{
          background:#000;
          color:#fff;
          box-shadow:0 0 0 1px #fff;
        }
        .contact__status{
          margin-top:1rem;
          font-size:.9rem;
          color:#ccc;
        }
      `}</style>

      <section className="contact">
        <div className="contact__wrap">
          <h1 className="contact__title">Get in touch</h1>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
            />
            <button type="submit" className="contact__btn">
              Send message
            </button>
            {status && <p className="contact__status">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;