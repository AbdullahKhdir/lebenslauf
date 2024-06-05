import React from 'react';

import Layout from '../components/Layout';
import MariaDB from '../assets/sass/fontawesome/webfonts/fa-maria-db.svg';
import MONGOOSE from '../assets/sass/fontawesome/webfonts/fa-mongoose.svg';
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
                stroke="#495057"
              >
                <path
                    className="maria-db-icon"
                    d="M29.942 6.518c-0.597 0.293-1.3 0.465-2.042 0.465-0.017 0-0.034-0-0.051-0l0.003 0c-0.543 0-1.064 0.096-1.546 0.271l0.032-0.010c-1.052 0.391-1.916 1.082-2.513 1.969l-0.012 0.018c-0.495 0.693-1.011 1.505-1.487 2.343l-0.074 0.142c-0.382 0.63-0.759 1.169-1.168 1.681l0.024-0.031c-0.701 0.866-1.6 1.545-2.63 1.971l-0.044 0.016c-1.369 0.617-3.070 1.245-4.818 1.767l-0.308 0.079c-1.341 0.441-2.665 0.922-2.958 1.080-1.109 0.603-2.030 1.418-2.737 2.398l-0.016 0.024c-1.253 1.65-1.215 1.641-3.801 1.183q-0.421-0.051-0.844-0.079c-0.12-0.026-0.258-0.041-0.399-0.041-0.483 0-0.925 0.173-1.268 0.461l0.003-0.003-0.284 0.269 0.221 0.11c0.268 0.167 0.496 0.331 0.714 0.508l-0.013-0.010c0.202 0.167 0.426 0.328 0.661 0.473l0.026 0.015c0.089 0.041 0.164 0.084 0.236 0.131l-0.007-0.004c-0.078 0.169-0.173 0.314-0.287 0.443l0.002-0.002c-0.544 0.726-0.741 1.088-0.717 1.31 0.024 0.205 0.040 0.212 0.537 0.212 0.027 0.001 0.059 0.001 0.091 0.001 0.533 0 1.043-0.096 1.515-0.271l-0.030 0.010c1.352-0.551 2.496-1.138 3.582-1.809l-0.103 0.059c0.704-0.485 1.508-0.922 2.358-1.271l0.086-0.031c0.102-0.025 0.442-0.087 0.742-0.142 0.42-0.055 0.906-0.087 1.4-0.087 0.647 0 1.282 0.054 1.899 0.159l-0.067-0.009c0.135 0.016 0.466 0.056 0.75 0.080 0.208 0.014 0.402 0.048 0.587 0.1l-0.020-0.005c0.033 0.015 0.592 0.046 1.247 0.070 1.167 0.032 1.38 0.009 1.625-0.236 0.256-0.353 0.467-0.761 0.613-1.199l0.009-0.032c0.261-0.804 0.521-1.151 0.457-0.615-0.1 1.117-0.418 2.14-0.912 3.055l0.021-0.042c-0.351 0.662-0.738 1.234-1.179 1.758l0.012-0.015c-0.402 0.434-0.394 0.45 0.11 0.394 0.991-0.155 1.876-0.516 2.641-1.039l-0.022 0.014c1.225-0.975 2.167-2.255 2.717-3.727l0.019-0.059c0.134-0.337 0.275-0.275 0.229 0.104-0.016 0.117-0.047 0.394-0.071 0.622l-0.039 0.41 0.441-0.252c1.245-0.867 2.178-2.107 2.644-3.555l0.014-0.049c0.473-1.33 0.936-2.995 1.294-4.699l0.047-0.269c0.106-0.524 0.223-0.961 0.363-1.387l-0.024 0.085c0.092-0.425 0.305-0.791 0.599-1.071l0.001-0.001c0.37-0.353 0.768-0.684 1.189-0.987l0.033-0.023c0.63-0.358 1.134-0.87 1.473-1.486l0.010-0.020c0.16-0.307 0.254-0.671 0.254-1.057 0-0.227-0.033-0.447-0.093-0.655l0.004 0.016c-0.165-0.252-0.355-0.245-0.954 0.008z">
                </path>
              </svg>
            </li>
            <li className="list-inline-item">
              <svg className="mongo-db-icon" width={124} height={124} viewBox="0 -183 512 512" fill="#495057"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M476.713 60.463c-.46.092-.922 1.107-.922 1.66-.092 3.692-.184 13.474-.184 20.118 0 .185.276.554.553.554 1.384.092 4.706.184 7.567.184 3.968 0 6.275-.553 7.568-1.106 3.321-1.662 4.89-5.261 4.89-9.23 0-8.95-6.275-12.365-15.596-12.365-.646-.092-2.49-.092-3.876.185zm23.81 41.25c0-9.136-6.737-14.212-18.918-14.212-.554 0-4.43-.092-5.353.092-.277.093-.645.278-.645.555 0 6.551-.093 16.98.184 21.04.184 1.753 1.477 4.245 3.046 4.983 1.66.923 5.444 1.107 8.028 1.107 7.29 0 13.658-4.06 13.658-13.565zm-42.634-46.325c.922 0 3.69.276 10.796.276 6.737 0 12.089-.184 18.641-.184 8.028 0 19.102 2.86 19.102 14.857 0 5.906-4.153 10.613-9.597 12.92-.276.092-.276.276 0 .368 7.751 1.939 14.581 6.737 14.581 15.78 0 8.86-5.537 14.489-13.566 17.996-4.891 2.122-10.981 2.86-17.164 2.86-4.707 0-17.349-.553-24.362-.368-.738-.278.646-3.6 1.291-4.153 1.662-.093 2.953-.185 4.707-.739 2.492-.645 2.768-1.384 3.137-5.167.185-3.23.185-14.674.185-22.794 0-11.166.093-18.733 0-22.424-.092-2.86-1.107-3.784-3.137-4.338-1.57-.276-4.153-.646-6.276-.922-.462-.462 1.107-3.6 1.662-3.968zm-53.248 57.399c2.216 1.752 6.553 2.49 10.429 2.49 4.983 0 9.966-.921 14.765-5.26 4.891-4.428 8.305-11.257 8.305-22.146 0-10.429-3.968-18.919-12.089-23.901-4.614-2.862-10.52-4.06-17.349-4.06-2.03 0-3.968.092-5.167.645-.278.185-.923 1.015-.923 1.476-.185 1.846-.185 16.057-.185 24.363 0 8.582 0 20.579.185 21.963 0 1.385.645 3.507 2.03 4.43zm-20.948-57.4c1.754 0 8.49.277 11.72.277 5.815 0 9.967-.276 20.948-.276 9.228 0 16.98 2.491 22.517 7.197 6.736 5.814 10.244 13.843 10.244 23.624 0 13.935-6.368 21.964-12.736 26.578-6.366 4.706-14.672 7.474-26.484 7.474-6.275 0-17.072-.184-26.024-.277h-.092c-.461-.83.738-4.06 1.476-4.152 2.4-.277 3.046-.37 4.246-.83 1.937-.739 2.307-1.754 2.584-5.168.276-6.368.184-14.027.184-22.702 0-6.182.092-18.272-.093-22.148-.276-3.229-1.66-4.06-4.429-4.614-1.384-.276-3.23-.646-5.813-.922-.37-.647 1.291-3.507 1.752-4.06z" fill="#495057"></path> <path d="M272.033 116.385c-2.307-.277-3.968-.645-5.998-1.568-.277-.185-.739-1.107-.739-1.477-.184-3.23-.184-12.458-.184-18.64 0-4.984-.83-9.321-2.953-12.366-2.492-3.508-6.09-5.537-10.705-5.537-4.06 0-9.505 2.768-14.027 6.644-.092.092-.83.739-.738-.277 0-1.015.185-3.045.277-4.43.093-1.292-.646-1.937-.646-1.937-2.953 1.476-11.258 3.414-14.304 3.69-2.214.463-2.768 2.585-.46 3.323h.092c2.49.738 4.152 1.569 5.443 2.4.923.738.831 1.753.831 2.584.092 6.92.092 17.533-.184 23.347-.092 2.307-.738 3.137-2.4 3.506l.185-.092c-1.292.277-2.307.553-3.876.738-.554.554-.554 3.507 0 4.153 1.015 0 6.367-.277 10.798-.277 6.09 0 9.228.277 10.796.277.646-.738.831-3.507.462-4.153-1.754-.092-3.046-.276-4.245-.646-1.661-.37-2.123-1.199-2.216-3.137-.183-4.892-.183-15.227-.183-22.24 0-1.938.553-2.861 1.106-3.415 2.123-1.845 5.538-3.137 8.583-3.137 2.953 0 4.89.923 6.367 2.123 2.03 1.66 2.676 4.06 2.953 5.813.461 3.968.277 11.812.277 18.641 0 3.691-.277 4.614-1.66 5.075-.647.277-2.308.647-4.246.83-.646.647-.461 3.508 0 4.154 2.676 0 5.814-.277 10.428-.277 5.721 0 9.413.277 10.89.277.46-.554.645-3.23.276-3.969zm25.562-35.25c-4.89 0-7.936 3.783-7.936 9.688 0 5.999 2.676 12.92 10.243 12.92 1.292 0 3.692-.554 4.798-1.846 1.754-1.66 2.954-4.983 2.954-8.49 0-7.659-3.784-12.273-10.059-12.273zm-.646 40.787c-1.845 0-3.138.554-3.968 1.016-3.876 2.49-5.629 4.89-5.629 7.752 0 2.675 1.015 4.797 3.23 6.643 2.676 2.307 6.367 3.415 11.073 3.415 9.413 0 13.566-5.076 13.566-10.058 0-3.508-1.754-5.815-5.352-7.106-2.584-1.108-7.29-1.662-12.92-1.662zm.646 23.994c-5.629 0-9.69-1.2-13.196-3.876-3.415-2.584-4.891-6.46-4.891-9.136 0-.738.185-2.769 1.846-4.614 1.014-1.108 3.23-3.23 8.49-6.829.184-.092.276-.184.276-.37 0-.184-.185-.369-.369-.46-4.337-1.661-5.629-4.338-5.999-5.814v-.185c-.091-.554-.276-1.107.555-1.661.646-.461 1.569-1.015 2.583-1.66 1.569-.924 3.23-1.939 4.245-2.77.185-.184.185-.368.185-.553 0-.185-.185-.37-.37-.461-6.458-2.123-9.688-6.922-9.688-14.12 0-4.706 2.122-8.951 5.905-11.627 2.584-2.03 9.044-4.522 13.289-4.522h.277c4.337.092 6.736 1.015 10.15 2.215 1.846.646 3.6.922 6 .922 3.598 0 5.167-1.107 6.458-2.398.093.184.278.646.37 1.845.092 1.2-.277 2.953-1.2 4.245-.738 1.015-2.399 1.754-4.06 1.754h-.462c-1.661-.185-2.4-.37-2.4-.37l-.368.185c-.092.185 0 .369.092.646l.093.185c.184.83.553 3.321.553 3.968 0 7.567-3.045 10.888-6.275 13.38-3.138 2.307-6.736 3.783-10.797 4.153-.092 0-.46 0-1.292.092-.461 0-1.107.093-1.2.093h-.092c-.738.184-2.583 1.107-2.583 2.675 0 1.384.83 3.046 4.798 3.323.83.092 1.66.092 2.584.185 5.26.368 11.812.83 14.857 1.845 4.245 1.568 6.921 5.352 6.921 9.874 0 6.83-4.89 13.197-13.011 17.164-3.968 1.754-7.937 2.677-12.274 2.677zm52.6-64.32c-1.937 0-3.691.46-4.983 1.383-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.367-2.215 2.676-2.216 4.061-6.645 4.061-12.828 0-11.996-5.999-20.025-14.765-20.025zm1.662 39.496c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.996 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-3.045 2.03-8.305 3.968-12.643 3.968h.001zM187.411 81.595c-1.938 0-3.691.461-4.984 1.384-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.368-2.215 2.675-2.216 4.06-6.645 4.06-12.828 0-11.996-5.906-20.025-14.765-20.025zm1.661 39.497c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.997 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-2.953 2.03-8.213 3.968-12.642 3.968zm-105.478-.923c-.185-.276-.37-1.107-.277-2.122 0-.739.185-1.2.277-1.384 1.938-.278 2.953-.555 4.06-.831 1.846-.462 2.584-1.476 2.676-3.783.278-5.537.278-16.058.185-23.348v-.185c0-.83 0-1.846-1.015-2.584-1.477-.922-3.23-1.752-5.537-2.4-.83-.275-1.384-.737-1.292-1.29 0-.554.554-1.2 1.754-1.385 3.045-.277 10.98-2.214 14.118-3.599.185.184.462.739.462 1.477l-.092 1.014c-.093 1.016-.185 2.216-.185 3.415 0 .369.37.646.738.646.185 0 .37-.092.554-.185 5.906-4.614 11.258-6.275 14.026-6.275 4.523 0 8.03 2.123 10.706 6.552.184.278.369.37.646.37.184 0 .46-.092.553-.277 5.445-4.153 10.89-6.645 14.488-6.645 8.582 0 13.658 6.368 13.658 17.165 0 3.045 0 7.013-.092 10.613 0 3.229-.092 6.182-.092 8.305 0 .46.645 1.937 1.66 2.214 1.292.646 3.046.923 5.353 1.292h.092c.185.646-.184 3.045-.553 3.507-.554 0-1.385 0-2.307-.092a136.208 136.208 0 0 0-7.014-.185c-5.721 0-8.674.092-11.536.277-.183-.738-.276-2.953 0-3.507 1.662-.276 2.492-.554 3.508-.83 1.846-.554 2.307-1.385 2.4-3.784 0-1.753.368-16.703-.186-20.302-.553-3.691-3.322-8.028-9.413-8.028-2.307 0-5.905.923-9.412 3.598-.184.185-.37.646-.37.923v.093c.37 1.937.37 4.153.37 7.567v5.998c0 4.153-.093 8.029 0 10.981 0 2.031 1.2 2.492 2.215 2.862.554.091.922.184 1.384.276.83.185 1.661.37 2.953.646.185.37.185 1.569-.092 2.584-.093.554-.278.83-.37.923-3.137-.092-6.367-.185-11.073-.185-1.384 0-3.784.093-5.814.093-1.662 0-3.23.092-4.152.092-.093-.185-.278-.83-.278-1.846 0-.83.185-1.476.37-1.661.461-.092.83-.184 1.292-.184 1.106-.185 2.03-.37 2.952-.554 1.57-.461 2.123-1.292 2.215-3.322.277-4.614.554-17.81-.092-21.133-1.107-5.352-4.152-8.028-9.044-8.028-2.86 0-6.46 1.384-9.412 3.6-.462.368-.831 1.29-.831 2.121v5.445c0 6.644 0 14.95.092 18.549.093 1.106.461 2.399 2.584 2.86.462.092 1.2.277 2.123.37l1.66.276c.186.554.093 2.769-.276 3.507-.923 0-2.03-.092-3.323-.092-1.937-.093-4.429-.185-7.197-.185-3.23 0-5.537.092-7.383.185-1.292-.185-2.307-.185-3.414-.185z" fill="#495057"></path> <path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#495057"></path> <path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#495057"></path> <path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#495057"></path> <path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#495057"></path> <path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#495057"></path> <path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#495057"></path> </g> </g></svg>
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
