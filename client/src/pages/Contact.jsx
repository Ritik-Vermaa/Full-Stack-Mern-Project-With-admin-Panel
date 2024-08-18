import { useState } from "react";

const Contact = () => {
  const [contact , setContact] = useState({
    username : "",
    email : "",
    message : "",
  });

  //Handling the input values
  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setContact(
      {
        ...contact,
        [name] : value,
      }
    );
  }

  //Handling the form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" width="400" height="500" alt="" />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button type="submit">
                  submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
