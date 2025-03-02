import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="sub-title">Contact Me</h1>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter Your Email" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
