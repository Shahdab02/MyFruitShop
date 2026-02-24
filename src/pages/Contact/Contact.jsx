// import React, { useState } from 'react'
// import './contact.css'

// export default function Contact(){
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [sent, setSent] = useState(false)

//   const submit = (e)=>{
//     e.preventDefault()
//     const payload = { name, email, message, date: new Date().toISOString() }
//     try{
//       const arr = JSON.parse(localStorage.getItem('messages')||'[]')
//       arr.unshift(payload)
//       localStorage.setItem('messages', JSON.stringify(arr))
//       setSent(true)
//       setName(''); setEmail(''); setMessage('')
//       setTimeout(()=>setSent(false),3000)
//     }catch(err){
//       console.error(err)
//     }
//   }

//   return (
//     <div className="container contact-page ">
//       <div className="contact-grid">
//         <div className="contact-card">
//           <h2 className="">Contact Us</h2>
//           <p className="small">
//             Have a question or feedback? Reach out — we're here to help.
//           </p>

//           <div className="contact-details">
//             <div>
//               <strong>Address</strong>
//               <div className="small">
//                 at urwan more tellaiya dam road, chandwara koderma jharkhand
//                 825409
//               </div>
//             </div>
//             <div style={{ marginTop: 8 }}>
//               <strong>Phone</strong>
//               <div className="small">+91 98765 43210</div>
//             </div>
//             <div style={{ marginTop: 8 }}>
//               <strong>Email</strong>
//               <div className="small">support@nazirfruitshop.in</div>
//             </div>
//           </div>

//           <div className="map-placeholder">
//             Map placeholder (replace with embedded map)
//           </div>
//         </div>

//         <div className="contact-card">
//           <h3>Send us a message</h3>
//           <form className="auth-form" onSubmit={submit}>
//             <label>
//               Name
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your name"
//               />
//             </label>
//             <label>
//               Email
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//               />
//             </label>
//             <label>
//               Message
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="How can we help?"
//               />
//             </label>
//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//               <button className="button" type="submit">
//                 Send message
//               </button>
//               {sent && (
//                 <span className="small" style={{ color: "#2a9d8f" }}>
//                   Message sent — thank you!
//                 </span>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    const payload = { ...form, date: new Date().toISOString() };
    const arr = JSON.parse(localStorage.getItem("messages") || "[]");
    arr.unshift(payload);
    localStorage.setItem("messages", JSON.stringify(arr));

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="premium-contact">
      <Container>
        {/* HEADER */}
        <div className="contact-header text-center">
          <h1>Nazir Fruit Emporium</h1>
          <p>Handpicked Freshness Everyday</p>
        </div>

        <Row className="g-4">
          {/* LEFT CARD */}
          <Col lg={5}>
            <Card className="contact-card-premium">
              <h4 className="card-title">Get In Touch</h4>

              <div className="contact-info">
                <p>
                  <FaMapMarkerAlt className="icon" />
                  Urwan More, Tellaiya Dam Road,
                  <br />
                  Chandwara, Koderma, Jharkhand - 825409
                </p>

                <p>
                  <FaPhoneAlt className="icon" />
                  +91 98765 43210
                </p>

                <p>
                  <FaEnvelope className="icon" />
                  support@nazirfruitshop.in
                </p>
              </div>
              <iframe
                title="Nazir Fruit Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35548.79142535785!2d85.41687925175382!3d24.434159360298642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f375000b6bfe0f%3A0xe8b178c10acb1760!2sUrwan%20more!5e0!3m2!1sen!2sin!4v1708913456789!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>

          {/* RIGHT FORM */}
          <Col lg={7}>
            <Card className="contact-card-premium">
              <h4 className="card-title">Send Us a Message</h4>

              {sent && (
                <Alert variant="success" className="mt-2">
                  Message sent successfully!
                </Alert>
              )}

              <Form onSubmit={submit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Number</Form.Label>
                      <Form.Control
                        type="number"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="premium-btn w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}