import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "../styles/custom.css";

// import { Provider } from "react-redux";
// import { createStore } from "redux";

// const store = createStore(reducers)

function MyApp({ Component, pageProps }) {
  return (
    // <Provider>
    <Component {...pageProps} />
    // </Provider>
  );
}

export default MyApp;
