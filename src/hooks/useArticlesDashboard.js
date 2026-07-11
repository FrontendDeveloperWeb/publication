import { useState } from 'react';

/**
 * Shared state for the article-dashboard pages (Latest Issues, Articles in Press).
 * Both pages drive an identical Abstract/Graphical tab, paginated card feed and
 * preview toggle — this hook owns that logic so the pages stay presentational.
 *
 * @param {Array}  articles - full article list to paginate.
 * @param {number} pageSize - cards shown per page.
 */
export function useArticlesDashboard(articles, pageSize = 2) {
  const [activeTab, setActiveTab] = useState('abstract');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreviews, setShowPreviews] = useState(false);

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const articlesForPage = articles.slice(indexOfFirstItem, indexOfLastItem);

  return {
    activeTab,
    setActiveTab,
    currentPage,
    setCurrentPage,
    showPreviews,
    setShowPreviews,
    articlesForPage,
  };
}
