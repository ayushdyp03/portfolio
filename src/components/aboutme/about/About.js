import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple"> Shreenidhi Vedpathak </b> 
                  and I am a <b className="purple"> Electronics & Telecommunicaton Engineering </b> 
                    student at <b className="purple">Pune University </b>
                      in Maharashtra, India .
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C, C++, Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                <br />
                
                I also have industrial experience in working with Data Analitics  frameworks such as &nbsp;

                  <b className="purple">
                    {" "}
                    SQL,Data Visualization,DBMS and AI Excel {" "}
                  </b> 
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks.
                  </b>
              
                   I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    Pandas, and NumPy.{" "}
                  </b> 
                  <br/>
                  <br/>

                  Also as an <b className="purple">
                    {" "}
                    E&TC Engineer.{" "}
                  </b>  I have experience working with <b className="purple">
                    {" "}
                    Electronics product developement and Embedded syatems.{" "}
                  </b> 
                  <br/>  such as &nbsp;

<b className="purple">
  {" "}
  Designing And Testing Of Microcontrollers And Different Ics, EC-Circuit Designing, And Development.{" "}
</b> 
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
