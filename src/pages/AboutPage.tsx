import { Container } from "react-bootstrap"
import IconContainer from "../components/IconContainer"

const AboutPage = () => {
    return (
        <div>
            <Container className="py-4 about-page">
                <h1 className="py-4">About</h1>

                <div className="about-content">
                    <div className="text">
                        <h3>Introduction</h3>
                        <p>
                            I am currently studying to become a Front-End Developer at
                            Medieinstitutet in Malmö. When I graduate, I will have gained the
                            knowledge for web development with CSS, HTML and JS/TS,
                            work with target group adapted web development with regard to
                            usability, accessibility and UX, I will also develop, adapt and test
                            web solutions for different browsers and platforms, master web
                            development with a focus on various APIs and frameworks and
                            be able to master project methodology and work methodology for
                            developers.
                            <br /><br />
                            It's going to be two, very intense years of training and learning
                            how to become a part of this fast growing industry of tech, webdeveloping
                            and IT, for which I'm super excited about.
                            In September 2023 I will start my internship which will last until
                            May 2024. If you feel that I could be an asset to your particular
                            company, I would be more than happy to hear from you and continue
                            to develop my skills during my internship.
                        </p>


                        <h3>Creativity</h3>
                        <p>I love creativity in all shapes and forms. Leather craft is something I've been doing for a
                            couple of years now. Making wallets, handbags and other small things. It's very therapeutic for
                            me. Knitting, sewing, painting and crafting is also consuming my free time.</p>
                    </div>

                    <div className="symbols">
                        <IconContainer />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutPage
