import linkedin from '/src/assets/linkedin.svg'
import mail from '/src/assets/mail.svg' // change import path

function Contacts() {
  return (
    <div className="contact-me">
      <a className="email" href="mailto:chineduejiogu@gmail.com">
        <img src={mail} alt="mail" /> Email
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/chinedu-ejiogu/"
        target="_blank"
      >
        <img src={linkedin} alt="" />
        LinkedIn
      </a>
    </div>
  );
}

export default Contacts;
