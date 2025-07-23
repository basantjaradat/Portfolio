import "../styles/global.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
