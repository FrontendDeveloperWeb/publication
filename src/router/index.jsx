import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/index.jsx'));
const Journal = lazy(() => import('../pages/Journal/index.jsx'));
const LatestIssues = lazy(() => import('../pages/LatestIssues/index.jsx'));
const AimsAndScope = lazy(() => import('../pages/About/AimsAndScope/index.jsx'));
const AllIssues = lazy(() => import('../pages/AllIssues/index.jsx'));
const EditorialBoard = lazy(() => import('../pages/About/EditorialBoard/index.jsx'));
const ArticlesPress = lazy(() => import('../pages/ArticlesPress/index.jsx'));
const SpecialIssueArticleCollection = lazy(() => import('../pages/SpecialIssueArticleCollection/index.jsx'));

/**
 * Route table. `meta` drives the shared page chrome that <Layout> renders
 * automatically, so individual pages never re-import the hero / stats / topbar:
 *   - hero:   'standard' renders the shared <PageHero>; pages with a bespoke
 *             hero (Home, Journal) keep it inside the page and set hero: null.
 *   - stats:  renders the shared <StatsBar> band.
 *   - topbar: renders the shared <DashboardTopBar> band. Pages whose topbar is
 *             structurally nested inside their own content (Journal, Special
 *             Issues) keep it in-page and leave this false.
 */
export const routes = [
  { path: '/', element: Home, meta: { hero: null, stats: false, topbar: false } },
  { path: '/journals-and-books', element: Journal, meta: { hero: null, stats: false, topbar: false } },
  { path: '/latest-issues', element: LatestIssues, meta: { hero: 'standard', stats: true, topbar: false } },
  { path: '/all-issues', element: AllIssues, meta: { hero: 'standard', stats: true, topbar: true } },
  { path: '/articles-press', element: ArticlesPress, meta: { hero: 'standard', stats: true, topbar: false } },
  { path: '/special-issue-article-collection', element: SpecialIssueArticleCollection, meta: { hero: 'standard', stats: true, topbar: false } },
  { path: '/about/aims-and-scope', element: AimsAndScope, meta: { hero: 'standard', stats: true, topbar: false } },
  { path: '/about/editorial-board', element: EditorialBoard, meta: { hero: 'standard', stats: true, topbar: false } },
];

const DEFAULT_META = { hero: null, stats: false, topbar: false };

/** Resolve the layout chrome config for a given pathname. */
export function getRouteMeta(pathname) {
  return routes.find((route) => route.path === pathname)?.meta ?? DEFAULT_META;
}
