import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.getAddress()} · {config.getPhone()} ·
            <a href={`mailto:${config.getEmail()}`}>{config.getEmail()}</a>
          </div>
          <p className="lead mb-5">
              Ich bin Abdullah, Khdir, {config.calculateAge('1997-04-01')} Jahre alt und komme aus Syrien. Ich bin seit {config.calculateAge('2015-08-22')} Jahren in Deutschland und arbeite gerade
              als Full Stack Web Developer bei der Deutschen Telekom Individual Solutions & Products GmbH.
              In 2021 absolvierte ich eine Ausbildung als Fachinformatiker für Anwendungsentwicklung bei der Deutschen Telekom AG.
              Während meiner Ausbildung habe ich Erfahrungen in unterschiedlichen Bereichen gesammelt, die in der Telekommunikationswelt wichtig sind und in der IT-Welt als Programmierer benötigt werden.
              Ich habe auch Erfahrungen in dem Automatisierungsbereich, wo unterschiedliche Netzkomponenten durch Agenten gesteuert und automatisiert werden können, und habe an die Entwicklung vom SNMP-Agent gearbeitet, welches für die Steuerung und Automatisierung von Power-Distribution-Units eingesetzt werden kann.
              Zusätzlich habe ich mit der Entwicklung von automatisierten System-Tests die Qualität des Projekts geprüft, und sammelte ich Wissen über die Entwicklung von Web-Applikationen mit der Nutzung von umfangreichen Technologien, als auch Erfahrungen für den Entwurf und Entwicklung von Oberflächen (GUI).
              Aktuell spezielaisiere ich konkret und tief in den unterschiedlichen Technologien und Framework, die sich um die Web-Entwicklung umdrehen.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Erfahrungen</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack PHP Web Developer</h3>
              <div className="subheading mb-3">Deutsche Telekom Individual Solutions &amp; Products GmbH</div>
              <p>
                Durch den Einsatz vom Laravel Framework arbeite ich an den Entwickelung bzw. Implementierung, Anpassung, Data-Model-Entwurf, Testing, und Organisierung von einem Tool,
                die Aufträge und Verträge globalen und lokalen Kunden archiviert und adressiert.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Juni 2021 - Präsens</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Autiomatisierungsbereich</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                Ich habe ein SNMP-Agent der Hilfe von Programmiersprahe Java entwickelt,
                welcher zur Steuerung von Power-Distribution-Units durch SNMP-Protokoll dient.
                Ebenso habe ich an unterschiedlichen Automatisierungs-Lösungen gearbeitet,
                die Netzkomponenten durch den Agent automatisiert werden können.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">März 2021 - Juni 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Entwicklung Web-Applikationen</h3>
              <div className="subheading mb-3">Berufliche Entwicklung</div>
              <p>
                Durch verschiedene Projekte könnte ich im Bereich Entwicklung von Web-Applikationen mit der Nutzung von MERN-Technologien Kenntnisse aneigenen.
                Zusätzlich bin ich auch mit separaten Frontends-Applikationen vertraut.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Februar 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Entwicklung von Graphical User Interface</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                Ich habe eine Graphical-User-Interface mit der Hilfe von Programmiersprahe Java für ein Power-Distribution-Unit-Device entwickelt, die die Funktionalitäten des Produkts steuert
                und überwacht.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Entwicklung und Betreuung von Datenbank</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                Ich habe eine Oberfläche für eine Datenbank mit der Nutzung von MS-Access entwickelt und betreut,
                die sich mit den Tools aller Abteilungen befasst.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dezember 2020</span>
            </div>
          </div>
          </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">BERUFLICHER WERDEGANG</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">Fachinformatiker als Anwendungsentwickler</h3>
              <div className="subheading mb-3">Ausbildung bei der Deutschen Telekom AG in Nürnberg</div>
              <div>Umfangreichen Themen in der Telekommunikationswelt, spezifisch in dem Automatisierungsbereich</div>
                <p></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - September 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">Sprachliche Kenntnisse</h3>
              <div className="subheading mb-3">Universität Oldenburg</div>
              <div>Abschluss Sprachkurs DSH-1 mit Zertifikat</div>
                <p>Ich verfüge auch über sehr gute Kenntnisse in englische Sprache</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">März 2017 - Februar 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Al Imam Ali Senior High School, Amman</h3>
              <div className="subheading mb-3">Gymnasium Abitur</div>
                <p></p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2013 - Mai 2015</span>
              </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">KENNTNISSE</h2>
          <div className="subheading mb-3">
            Programmiersprachen &amp; Tools
          </div>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
            <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-cuttlefish">++</i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-cuttlefish">#</i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-laravel"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linkedin"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-figma"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-windows"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-apple"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-stack-overflow"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-gitlab"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-microsoft"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-yarn"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-ubuntu"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-symfony"></i>
            </li>
            <li className="list-inline-item">
              <i class="fa fa-file-code"></i>
            </li>
            <li className="list-inline-item">
              <svg
                className="maria-db-icon"
                fill="#495057"
                width={64}
                height={64}
                viewBox="0 0 32 32"
              >
                <path
                    className="maria-db-icon"
                    d="M29.942 6.518c-0.597 0.293-1.3 0.465-2.042 0.465-0.017 0-0.034-0-0.051-0l0.003 0c-0.543 0-1.064 0.096-1.546 0.271l0.032-0.010c-1.052 0.391-1.916 1.082-2.513 1.969l-0.012 0.018c-0.495 0.693-1.011 1.505-1.487 2.343l-0.074 0.142c-0.382 0.63-0.759 1.169-1.168 1.681l0.024-0.031c-0.701 0.866-1.6 1.545-2.63 1.971l-0.044 0.016c-1.369 0.617-3.070 1.245-4.818 1.767l-0.308 0.079c-1.341 0.441-2.665 0.922-2.958 1.080-1.109 0.603-2.030 1.418-2.737 2.398l-0.016 0.024c-1.253 1.65-1.215 1.641-3.801 1.183q-0.421-0.051-0.844-0.079c-0.12-0.026-0.258-0.041-0.399-0.041-0.483 0-0.925 0.173-1.268 0.461l0.003-0.003-0.284 0.269 0.221 0.11c0.268 0.167 0.496 0.331 0.714 0.508l-0.013-0.010c0.202 0.167 0.426 0.328 0.661 0.473l0.026 0.015c0.089 0.041 0.164 0.084 0.236 0.131l-0.007-0.004c-0.078 0.169-0.173 0.314-0.287 0.443l0.002-0.002c-0.544 0.726-0.741 1.088-0.717 1.31 0.024 0.205 0.040 0.212 0.537 0.212 0.027 0.001 0.059 0.001 0.091 0.001 0.533 0 1.043-0.096 1.515-0.271l-0.030 0.010c1.352-0.551 2.496-1.138 3.582-1.809l-0.103 0.059c0.704-0.485 1.508-0.922 2.358-1.271l0.086-0.031c0.102-0.025 0.442-0.087 0.742-0.142 0.42-0.055 0.906-0.087 1.4-0.087 0.647 0 1.282 0.054 1.899 0.159l-0.067-0.009c0.135 0.016 0.466 0.056 0.75 0.080 0.208 0.014 0.402 0.048 0.587 0.1l-0.020-0.005c0.033 0.015 0.592 0.046 1.247 0.070 1.167 0.032 1.38 0.009 1.625-0.236 0.256-0.353 0.467-0.761 0.613-1.199l0.009-0.032c0.261-0.804 0.521-1.151 0.457-0.615-0.1 1.117-0.418 2.14-0.912 3.055l0.021-0.042c-0.351 0.662-0.738 1.234-1.179 1.758l0.012-0.015c-0.402 0.434-0.394 0.45 0.11 0.394 0.991-0.155 1.876-0.516 2.641-1.039l-0.022 0.014c1.225-0.975 2.167-2.255 2.717-3.727l0.019-0.059c0.134-0.337 0.275-0.275 0.229 0.104-0.016 0.117-0.047 0.394-0.071 0.622l-0.039 0.41 0.441-0.252c1.245-0.867 2.178-2.107 2.644-3.555l0.014-0.049c0.473-1.33 0.936-2.995 1.294-4.699l0.047-0.269c0.106-0.524 0.223-0.961 0.363-1.387l-0.024 0.085c0.092-0.425 0.305-0.791 0.599-1.071l0.001-0.001c0.37-0.353 0.768-0.684 1.189-0.987l0.033-0.023c0.63-0.358 1.134-0.87 1.473-1.486l0.010-0.020c0.16-0.307 0.254-0.671 0.254-1.057 0-0.227-0.033-0.447-0.093-0.655l0.004 0.016c-0.165-0.252-0.355-0.245-0.954 0.008z">
                </path>
              </svg>
            </li>
            <li className="list-inline-item">
              <svg 
                  className="mongo-db-icon" 
                  width={60} 
                  height={60} 
                  viewBox="0 0 1024 1024" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="#495057"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle className="mongo-db-icon" cx="512" cy="512" r="512" style={{fill: '#495057'}}></circle>
                        <path
                            d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                            style={{fill: '#fff'}}></path>
                    </g>
              </svg>
            </li>
          </ul>
          
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
            <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
            <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
            <i className="fa-li fa fa-check"></i>
              EDV
            </li>
          
          </ul>
          
          <div className="subheading mb-3 language">Languages</div>
          <ul style={{paddingLeft: "20px", listStyle: "none"}}>
            <li>
              <i class="fa fa-language" style={{fontSize: "24px", position: "relative", fontSize: "24px", top: "4px", paddingRight: "10px"}}></i>
              English B1
            </li>
            <li>
              <i className="fa fa-language" style={{fontSize: "24px", position: "relative", fontSize: "24px", top: "4px", paddingRight: "10px"}}></i>
              German C1
            </li>
            <li>
              <i className="fa fa-language" style={{fontSize: "24px", position: "relative", fontSize: "24px", top: "4px", paddingRight: "10px"}}></i>
              Arabic native language
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex "
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">INTERESSEN</h2>
          <p>
              Lernen von den neuen Technologien, die die IT-Welt allen bereichen umdreht.
              Spezifisch die Programmierungstechnologien, die im Praxis häufig eingestzt sind.
          </p>
          <p className="mb-0">
              Ich mag reisen, und neue Orte, Eigenschaften, Kulturen und Menschen kennenzulernen.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
