import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <>

            <div className="homepage">

                <div className="homepage-text">
                    <h1>Hi, I'm Sonja Svidén</h1>
                    <h3>Frontend developer with knowledge in UX/UI design</h3>
                    <p>Working with my hands to make magic happen on the internet. View my <button>
                        <Link to="/projects">Projects</Link>
                    </button>, <button>
                            <Link to="/about">About</Link>
                        </button>, <button>
                            <Link to="/resume">Resume</Link>
                        </button>, or send me an email at either <button>
                            <a href="mailto:sonja.sviden@live.com">sonja.sviden@live.com</a></button> or fill in the <button><a href="/contact">
                                <Link type="email" to="/contact">contact form</Link>
                            </a></button>.
                    </p>
                </div>

                <div className="homepage-img">
                    <Image src="/header-pic.png" />
                </div>

            </div>

        </>
    )
}

export default HomePage
