import '../styles/global.css';
import { AppProps } from 'next/app';

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
