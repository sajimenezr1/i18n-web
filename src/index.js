import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from './locales/en';
import JobsList from "./components/jobslist";


const messages = {
  'es-ES': localeEsMessages,
  'en-US': localeEnMessages,
};


const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  return messages[language] ? language : 'es-ES';
};

const App = () => {
  const language = getBrowserLanguage();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <JobsList />
    </IntlProvider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

