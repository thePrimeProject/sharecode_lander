import React from "react";
import "./App.css";
import logo from "./logo_IRESHA.png";

const App = () => {
  return (
    <div className="container">
      <div className="content-column">
        <div className="title-logo">
          <img src={logo} alt="IRESHA Logo" className="logo" />
          {/* <h2 className="title">
            
            <br />
          </h2> */}
        </div>
        <h4 className="description">
          This prototype minimises the amount of personal data needed to assess eligibility for social housing support, while still providing information needed by social housing providers. <br />
          Thus reducing the risk of bias against applicants based on their personal data. <br />

          IRESHA Sharecode app is currently hosted on Streamlit. <br />
          Click below to launch it:
        </h4>
        <button
          className="launch-button"
          onClick={() =>
            (window.location.href = "https://iresha.streamlit.app")
          }
        >
          Launch app
        </button>
        <br></br>
        <br></br>

        <div>
          <p style={{ marginBottom: "1rem" }}>
            ----------------------------------------------------------------------------------------------------------------------------
            <br></br>
            This work was done under the UKRI-funded (EP/W03235X/1, EP/W032333/1,
            EP/W032341/1, EP/W032058/1, EP/W032082/1) project called PRIME
            ({" "}
            <a
              href="https://primecommunities.online"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              Protecting Minority Ethnic Communities Online
            </a>
            ). For more information, comments or suggestions, please contact
            Mehdi Rizvi ({" "}
            <a
              href="mailto:s.rizvi@hw.ac.uk"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              s.rizvi@hw.ac.uk
            </a>
            ). To see other apps and outputs from the project, please visit our
            website: {" "}
            <a
              href="https://www.primetoolkit.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              www.primetoolkit.co.uk
            </a>
          
          </p>
          <p>
            The citation for this work is: 
            
            Rizvi, M., Baillie, L., Pang, W.,
            Shahandashti, S., Yuan, Y., Ghosh, S., Lewinska, P., Chen, K.,
            Edmondson, A., Anil Kumar, A. S., Jagadeesan, V. B., Jacob, F., &
            Dodd, C. (2025). “Carefully Connected – Towards Designing More
            Equitable Digital Services,”{" "}
            <a
              href="https://doi.org/10.17861/C1DX-PQ86"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              https://doi.org/10.17861/C1DX-PQ86
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
