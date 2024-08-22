import './App.css';
import rectangle from "./rectangle.png"
import mail from "./Mail.png"
import linkedin from "./linkedin.svg"
import twitter from "./Twitter Icon.png"
import facebook from "./Facebook Icon.png"
import instagram from "./Instagram Icon.png"
import github from "./GitHub Icon.png"

function App() {
  return (
    <div className="container">
      <img src={rectangle} alt="" className="image"/>
      <h1>Laura Smith</h1>
      <p className="profile">Frontend Developer</p>
      <small>laurasmith.website</small>
      <div className="buttons">
        <button className="mail">
          <img src={mail} alt="" className="mail-img"/> 
          Email
          </button>
        <button className="linkedin">
          <img src={linkedin} alt="" />
          Linkedin
        </button>
      </div>
      <main>
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2>Interests</h2>
        <p>Food expert, Music scholar, Reader, Internet fanatic, Bacon buff,     Entrepreneur, Travel geek, Pop culture ninja, Coffee fanatic</p>
      </main>
      <footer>
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="" />
      </footer>
    </div>
  );
}

export default App;
