import GlobalStyles from "@/components/GlobalStyles";
import Theme from "@/components/Theme";
import wrapper from "@/store/store";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Head>
        <title>미소녀채팅관리자</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
