import React from 'react';

export default function About(props) {
  return (
    <main className={`about-page theme-${props.mode}`}>
      <section className="about-hero">
        <span className="eyebrow">A SMALL TOOL WITH A BIG JOB</span>
        <h1>Clear words.<br /><em>Clearer thinking.</em></h1>
        <p>TextUtils helps you shape your writing and understand it at a glance. No setup, no clutter—just useful tools when you need them.</p>
        <div className="about-pills"><span>✳ Word counts</span><span>Aa Quick formatting</span><span>◷ Reading time</span></div>
      </section>
      <section className="about-details">
        <div className="summary-title"><div><span className="eyebrow">MADE TO BE USEFUL</span><h2>Everything in one easy workspace.</h2></div></div>
        <div className="accordion about-accordion" id="accordionExample">
          <div className="accordion-item"><h2 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span className="about-step">01</span>Analyze your text</button></h2><div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div className="accordion-body">Get an instant word count, character count, and estimated reading time as you type. Your preview updates live so you can see exactly what you are working with.</div></div></div>
          <div className="accordion-item"><h2 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span className="about-step">02</span>Make quick changes</button></h2><div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div className="accordion-body">Switch text to uppercase, lowercase, or camelCase with one click. Copy a finished result or clear the workspace when you are ready for a fresh start.</div></div></div>
          <div className="accordion-item"><h2 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span className="about-step">03</span>Private and straightforward</button></h2><div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div className="accordion-body">TextUtils works right in your browser. There is no account to create, and your writing is not sent to a server by the text tools.</div></div></div>
        </div>
      </section>
    </main>
  );
}
