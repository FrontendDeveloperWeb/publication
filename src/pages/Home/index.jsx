import HeroSection from '../../components/partials/home/HeroSection.jsx';
import ExploreResearchSection from '../../components/partials/home/ExploreResearchSection.jsx';
import ArticlesCarouselSection from '../../components/partials/home/ArticlesCarouselSection.jsx';
import OpenAccessSection from '../../components/partials/home/OpenAccessSection.jsx';

const CATEGORIES = [
  { name: 'Chemical Engineering' },
  { name: 'Chemistry' },
  { name: 'Computer Science' },
  { name: 'Earth and Planetary Science' },
  { name: 'Energy' },
  { name: 'Engineering' },
  { name: 'Material Science' },
  { name: 'Mathematics' },
  { name: 'Physics and astronomy' },
];

const POPULAR_ARTICLES = [
  {
    id: 1,
    title: 'Artificial intelligence in healthcare: A systematic literature review',
    meta: 'Expert Systems with Applications  •  Volume 242, Part A',
    badgeType: 'open-access',
  },
  {
    id: 2,
    title: 'Artificial intelligence in healthcare: A systematic literature review',
    meta: 'Expert Systems with Applications  •  Volume 242, Part A',
    badgeType: 'research-article',
  },
];

const RECENT_PUBLICATIONS = [
  {
    id: 1,
    title: 'Quantum computing advances in 2024',
    meta: 'Physics Today  ·  Volume 77, Issue 1',
    img: '/assets/img/publication-card-1.png',
  },
  {
    id: 2,
    title: 'Sustainable Material advances in 2024',
    meta: 'Physics Today  ·  Volume 77, Issue 1',
    img: '/assets/img/publication-card-2.png',
  },
  {
    id: 3,
    title: 'Chemical Research advances in 2024',
    meta: 'Physics Today  ·  Volume 77, Issue 1',
    img: '/assets/img/publication-card-3.png',
  },
];

const CAROUSEL_ARTICLES = [
  {
    id: 1,
    title: 'New technology awarness.',
    desc: 'Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats',
    author: 'Jane Cooper',
    date: '2nd January,2022',
    img: '/assets/img/slider-img.png',
    isActive: false,
  },
  {
    id: 2, // Center Card - Dark Variant
    title: 'New technology awarness.',
    desc: 'Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats',
    author: 'Jane Cooper',
    date: '2nd January,2022',
    img: '/assets/img/slider-img.png',
    isActive: true,
  },
  {
    id: 3,
    title: 'New technology awarness.',
    desc: 'Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats',
    author: 'Jane Cooper',
    date: '2nd January,2022',
    img: '/assets/img/slider-img.png',
    isActive: false,
  },
  {
    id: 4,
    title: 'New technology awarness.',
    desc: 'Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats',
    author: 'Jane Cooper',
    date: '2nd January,2022',
    img: '/assets/img/slider-img.png',
    isActive: false,
  },
];

const INDEXING_LOGOS = [
  { name: 'INDEX COPERNICUS', logo: '/assets/img/index-img.png', fallback: 'INDEX COPERNICUS' },
  { name: 'Google Scholar', logo: '/assets/img/google-scholer.png', fallback: 'Google Scholar' },
  { name: 'STELLARSCHOLAR', logo: '/assets/img/stelar-img.png', fallback: '⭐ STELLARSCHOLAR' },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreResearchSection
        categories={CATEGORIES}
        popularArticles={POPULAR_ARTICLES}
        recentPublications={RECENT_PUBLICATIONS}
      />
      <ArticlesCarouselSection articles={CAROUSEL_ARTICLES} />
      <OpenAccessSection indexingLogos={INDEXING_LOGOS} />
    </>
  );
}
