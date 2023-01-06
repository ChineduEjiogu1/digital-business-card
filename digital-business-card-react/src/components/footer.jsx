import instagram from '/src/assets/instagram.svg'
import github from '/src/assets/github.svg'
import twitter from '/src/assets/twitter.svg'

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ChineduEjiogu1">
        <img className="github" src={github} alt="github" />
      </a>
      <a href="https://www.instagram.com/chinedu_eric/">
        <img className="instagram" src={instagram} alt="instagram" />
      </a>
      <a href="https://twitter.com/Chinedu_Ejiogu">
        <img className="twitter" src={twitter} alt="twitter" />
      </a>
    </div>
  );
}

export default Footer;
