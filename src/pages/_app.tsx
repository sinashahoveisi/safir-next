import 'assets/styles/main.scss';
import type {AppProps} from 'next/app';
import MaterialUi from '@/config/MaterialUi';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <MaterialUi>
      <Component {...pageProps} />
    </MaterialUi>
  );
}

export default MyApp;
