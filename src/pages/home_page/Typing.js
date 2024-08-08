import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Web Developer",
                    "Software Engineer",
                    "ENTC Engineer",
                    "Data Analyst",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
