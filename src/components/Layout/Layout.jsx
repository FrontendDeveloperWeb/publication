import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import PageLoader from '../Common/PageLoader.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="content">
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
}
