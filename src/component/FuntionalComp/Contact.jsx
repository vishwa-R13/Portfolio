function Contact() {
  return (
    <div>
      <div >
        <h1 className="sub-title">Contact Me</h1>
        <hr />
        <form>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input type="text" placeholder=" Enter Your Name:" required />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="emil">Email:</label>
              </td>
              <td>
                <input type="email" placeholder="Enter Your Email:" required />{" "}
              </td>
            </tr>
            <button>Submit</button>
          </table>
        </form>
      </div>

    </div>
  );
}
export default Contact;
