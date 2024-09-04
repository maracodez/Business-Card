import './App.css';
import rectangle from "./rectangle.png"
import mail from "./Mail.png"
import linkedin from "./linkedin.svg"
import twitter from "./Twitter Icon.png"
import facebook from "./Facebook Icon.png"
import instagram from "./Instagram Icon.png"
import github from "./GitHub Icon.png"

function App() {
    const handleIconClick = (url) => {
      console.log(`clicked to ${url}`)
      window.location.href = url;
    }


  return (
    <div className="container">
      <img src={rectangle} alt="" className="image"/>
      <h1>Laura Smith</h1>
      <p className="profile">Frontend Developer</p>
      <small>laurasmith.website</small>
      <div className="buttons">
        <button 
          className="mail"
          onClick={() => handleIconClick("mailto:amarachiruhty4@gmail.com?subject=Hello&body=I%20would%20like%20to%20get%20in%20touch.")
          }
        >
          <img 
            src={mail} 
            alt="email" 
            id="mail-img"
          /> 
          Email
          </button>
        <button 
          className="linkedin"
          onClick={() => handleIconClick("https://www.linkedin.com/")
          }
        >
          <img 
            src={linkedin} 
            alt="linkedin" 
            id="linkedin-icon"
          />
          Linkedin
        </button>
      </div>
      <main>
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2>Interests</h2>
        <p>Food expert, Music scholar, Reader, Internet fanatic, Bacon buff,     Entrepreneur, Travel geek, Pop culture ninja, Coffee fanatic.</p>
      </main>
      <footer>
        <img 
          src={twitter} 
          alt="twitter"
          onClick={() => handleIconClick("https://www.twitter.com/")
          }
        />
        <img 
          src={facebook} 
          alt="facebook"
          onClick={() => handleIconClick("https://www.facebook.com/")
          } 
        />
        <img 
          src={instagram} 
          alt="instagram" 
          onClick={() => handleIconClick("https://www.instagram.com/")
          }
        />
        <img 
          src={github} 
          alt="github" 
          onClick={() => handleIconClick("https://www.github.com/maracodez")
          }
        />
      </footer>
    </div>
  );
}

export default App;
