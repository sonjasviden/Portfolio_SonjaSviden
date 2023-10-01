import { Container } from "react-bootstrap"
import documentPdf from '../assets/sonjasviden_cv.pdf';


const ResumePage = () => {
    return (
        <div>
            <Container className="py-4">
                <h1 className="py-4">Resumé</h1>

                <div className="text">
                    <a target="_blank" rel="noreferrer" href={documentPdf}>
                        <p>Go to pdf download
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-download" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </p>
                    </a>
                </div>
                <section className="resume">
                    <div className="resume">
                        <div className="heading">
                            <h2>Sonja Svidén</h2>
                            <h3>Frontend Developer</h3>
                        </div>
                        <div className="flex-box">
                            <div className="left-section">

                                <h3>HIGHER EDUCATION</h3>

                                <h4>Medieinstitutet, Malmö</h4>
                                <p>Frontend Developer, className of 2022</p>

                                <h5>INTERNSHIP 1</h5>
                                <p>2023-10-02 - 2023-12-08</p>
                                <h5>INTERNSHIP 2</h5>
                                <p>2024-01-22 - 2024-05-10</p>

                                <h4>Single Courses</h4>
                                <p>Hermods, Digital Creation / 2021 (3 months)</p>


                                <h3>SKILLS</h3>

                                <p><b>Web Development Tools:</b> <br />
                                    JavaScript, HTML5, CSS3, SCSS, TypeScript, React, Vite, Vitest</p>

                                <p><b>Backend Technologies</b> <br />
                                    Firebase, Prisma, MongoDB, Mongoose, MySQL, Socket.io</p>

                                <p><b>Graphic Design:</b> <br />
                                    Adobe Photoshop, Adobe Illustrator & Figma</p>

                                <p><b>Hosting & Development:</b> <br />
                                    Netlify</p>

                                <p><b>Project Management:</b> <br />
                                    Trello, Github Projects</p>

                                <p><b>Other skills:</b> <br />
                                    UI/UX Design, Testing, E2E Testing, Leadership, Communication, Team Integration,
                                    Empathy, Collaboration, Open-mindedness, Critical Thinking, Professionalism, Problem
                                    Solving, Adaptability, Accountability, and many more</p>

                                <h3>SUMMERY</h3>
                                <p>I'm currently studying Front-End Developing at Medieinstitutet in Malmö, Sweden. My
                                    interests are primarily in web-design, and I love to create beautiful and performant
                                    products with amazing user experiences.</p>

                                <h3>CONTACT DETAILS</h3>

                                <p>
                                    <a href="mailto:sonja.sviden@live.com">sonja.sviden@live.com</a> <br />
                                    <a href="tel:+46 763 90 40 74">Tel: +46 763 90 40 74</a> <br />
                                    <a target="_blank" rel="noreferrer" href="https://sonjasviden.com/">www.sonjasviden.com</a> <br />
                                    <span>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sonja-svid%C3%A9n/">—
                                            Linkedin</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/sonjasviden">— Github</a>
                                    </span>
                                </p>

                            </div>
                            <div className="right-section">

                                <h3>WORK EXPERIENCE</h3>
                                <div className="h5-flex">
                                    <h5>CONVENDUM - SERVICE MANAGER</h5>
                                    <h5 className="h5-right">SEPT 2018 - APRIL 2019</h5>
                                </div>
                                <p>Co-working <br />
                                    Stockholm, Sweden</p>

                                <div className="h5-flex">
                                    <h5>DIPLOMAT GROUP - OFFICE MANAGER</h5>
                                    <h5 className="h5-right">MAY 2019 - APRIL 2020</h5>
                                </div>
                                <p>PR Agency <br />
                                    Stockholm, Sweden</p>

                                <div className="h5-flex">
                                    <h5>EGOO BY CAROLINE - STORE MANAGER</h5>
                                    <h5 className="h5-right">JAN 2021 - APRIL 2022</h5>
                                </div>
                                <p>Clothing Store <br />
                                    Helsingborg, Sweden</p>

                                <div className="h5-flex">
                                    <h5>STYLE & LIVING - SHOP ASSISTANT</h5>
                                    <h5 className="h5-right">APRIL 2022 - PRESENT (part time)</h5>
                                </div>
                                <p>Clothing Store <br />
                                    Helsingborg, Sweden</p>

                            </div>
                        </div>
                    </div>
                </section>

            </Container>
        </div>
    )
}

export default ResumePage
