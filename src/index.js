import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store , persistor} from './redux/store';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["ar", "en"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

  //Create rtl cache
const cacheRtl = createCache({
  key: cookies.get("i18next") === "ar" ? "muirtl" : "muiltr",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={cacheRtl}>
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<h1></h1>}>
              <App />
          </Suspense>
        </PersistGate>
    </Provider>
    </BrowserRouter>
  </CacheProvider>
);
