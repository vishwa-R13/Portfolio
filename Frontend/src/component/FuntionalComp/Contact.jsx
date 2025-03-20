import "./Contact.css";
// import {useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCon = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://portfolio-i6gg.onrender.com/contact", {
        Name: Name,
        email: email,
      });

      if (response.status === 201) {
        setName(""); // Clear input fields
        setEmail("");
        alert("msg send successful...");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }

  };

  return (
    <div className="contact-container">
      <h1 className="sub-title">Contact Me</h1>
      <div className="contact-form">
        <form onSubmit={handleCon}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
