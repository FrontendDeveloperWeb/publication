import { lazy } from 'react';


const Home = lazy(() => import('../pages/Home/index.jsx'));
const Journal = lazy(() => import('../pages/Journal/index.jsx'));
const LatestIssues = lazy(() => import('../pages/LatestIssues/index.jsx'));


export const routes = [
  { path: '/', element: Home },
  { path: '/journals-and-books', element: Journal },
  { path: '/latest-issues', element: LatestIssues },

];
