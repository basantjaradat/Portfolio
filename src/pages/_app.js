// src/pages/_app.js
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />;
}