import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
