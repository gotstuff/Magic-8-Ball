import React from "react";
import "./About.css";

export default () => (
  <div className="about">
    <div className="about__wrapper">
      <h2>Magic 8 Ball App</h2>
      <p>
        Magic 8 Ball is a simple web application that represents the original
        toy with the same answers for both english and spanish options. The
        Magic 8-Ball is a toy used for fortune-telling or seeking advice,
        developed in the 1950s and manufactured by Mattel. It is often used in
        fiction since the answer can sometimes be accurate, inaccurate, or
        statistically improbable.
        <br />
        <p>For more information check out the next link</p>
        <a href="https://en.wikipedia.org/wiki/Magic_8-Ball">
          Know more about Magic 8 Ball in wikipedia
        </a>
      </p>

      <h2>Motivation and inspiration</h2>

      <p>
        Since i was a kid. i've always wanted to have a Magic 8 ball. so a
        couple a weeks surfing in the internet i see a magic 8 ball again and i
        said to my self. "hey it's a very good chance to make one by my own" i
        also wanted to try a simple integration frontend-backend and have to
        oportunity to user create-react-app and refresh the use to prop-types
        library. which i used to use it a lot before it was separate from the
        core react library. in the rest api.there are just 2 GET request that
        brings all the option. one in english and the other one in spanish. and
        from react it fetch all the options depending the selected language via
        AJAX using axios and async/await
      </p>

      <h2>Visit the repo and live example</h2>
      <a href="https://github.com/luigi055/Magic-8-Ball">
        Github public Repository: https://github.com/luigi055/Magic-8-Ball
      </a>
      <a href="https://magic-8-ball-app.herokuapp.com/">
        Try Magic 8 Ball online: https://magic-8-ball-app.herokuapp.com/
      </a>
    </div>
  </div>
);
