import { lazy } from 'react';


const Home = lazy(() => import('../pages/Home/index.jsx'));
const Journal = lazy(() => import('../pages/Journal/index.jsx'));
const LatestIssues = lazy(() => import('../pages/LatestIssues/index.jsx'));
const AimsAndScope = lazy(() => import('../pages/About/AimsAndScope/index.jsx'));
const AllIssues = lazy(() => import('../pages/AllIssues/index.jsx'));
const EditorialBoard = lazy(() => import('../pages/About/EditorialBoard/index.jsx'));
const ArticlesPress = lazy(() => import('../pages/ArticlesPress/index.jsx'));
const SpecialIssueArticleCollection = lazy(() => import('../pages/SpecialIssueArticleCollection/index.jsx'));


export const routes = [
  { path: '/', element: Home },
  { path: '/journals-and-books', element: Journal },
  { path: '/latest-issues', element: LatestIssues },
  { path: '/all-issues', element: AllIssues },
  { path: '/articles-press', element: ArticlesPress },
  { path: '/special-issue-article-collection', element: SpecialIssueArticleCollection },
  { path: '/about/aims-and-scope', element: AimsAndScope },
  { path: '/about/editorial-board', element: EditorialBoard },
];
