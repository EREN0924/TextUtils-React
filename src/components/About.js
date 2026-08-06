import React from "react";

export default function About(props) {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    border:
      props.mode === "dark"
        ? "1px solid white"
        : "1px solid rgba(0,0,0,.125)",
  };

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2 className="mb-4">About Us</h2>

      <div className="accordion" id="accordionExample">
        {/* Accordion Item 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Analyze your text instantly with detailed statistics including
              word count, character count, and estimated reading time.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is completely free to use. You can analyze, edit,
              format, and transform your text directly in your browser without
              creating an account or installing any software.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This application works seamlessly on all modern browsers,
              including Google Chrome, Mozilla Firefox, Microsoft Edge, and
              Safari, providing a smooth and responsive user experience.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr className="my-5" />

      <div
        className="text-center"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <p className="mb-0">
          © 2026 <strong>TextUtils</strong> | Developed by{" "}
          <strong>Soham Pisal</strong>
        </p>
      </div>
    </div>
  );
}