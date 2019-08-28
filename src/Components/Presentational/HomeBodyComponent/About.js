import React from 'react';

const About = () => {
  return (
    <div id="about" className="about-section">
      <section id="about-header">
        <h2>About{' '}
          <ins>us</ins>
        </h2>
      </section>
      <section id="about-body">
        <div className="ab-inner">
          <p id="ab-core">
            Banka is a light-weight core banking application that powers banking operation on the go,
          which aims to ease banking operations for its users. Ever wanted to do operations like create and
            account or check account transactions, and you don't want to visit any of our branch offices?
            Banka App helps you do all of that, saving you time and money.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About;
