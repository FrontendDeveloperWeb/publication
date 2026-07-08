import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { routes } from './router/index.jsx';
import { useScrollToTop } from './hooks/useScrollToTop.js';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
