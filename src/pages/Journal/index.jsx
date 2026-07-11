import { useMemo, useState } from 'react';
import StatsBar from '../../components/StatsBar/StatsBar.jsx';
import HeroSection from './partials/HeroSection.jsx';
import FiltersSidebar from './partials/FiltersSidebar.jsx';
import PublicationsList from './partials/PublicationsList.jsx';
import DashboardTopBar from '../../components/JournalDashboard/DashboardTopBar.jsx';

const ITEMS_PER_PAGE = 7;

// Raw mock database mapping image values precisely
const ALL_PUBLICATIONS = [
  { id: 1, title: "A New Era in Alzheimer's Research", type: "Books", path: "Pathogenesis, Prevention, and Treatment", year: 2024, hasButton: true, isOpenAccess: false },
  { id: 2, title: "A Practical Guide for Finding Interventions That Work for Autistic People", type: "Books", path: "Diversity-Affirming Evidence-Based Practice - Second Edition", year: 2024, hasButton: false, isOpenAccess: false },
  { id: 3, title: "A Practical Guide to Functional Assessment and Treatment for Severe Problem Behavior", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: 2024, hasButton: false, isOpenAccess: false },
  { id: 4, title: "A New Era in Alzheimer's Research", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 5, title: "AACE Endocrinology and Diabetes", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 6, title: "AASRI Procedia", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 7, title: "Biolology Advanced Research Tools", type: "Textbooks", path: "Molecular Pathogenesis Trends", year: 2025, hasButton: false, isOpenAccess: false },
  { id: 8, title: "Clinical Neurology Handbook", type: "Handbooks", path: "Neurological Foundations Volume II", year: 2023, hasButton: false, isOpenAccess: true },
  { id: 9, title: "A New Era in Alzheimer's Research", type: "Books", path: "Pathogenesis, Prevention, and Treatment", year: 2024, hasButton: true, isOpenAccess: false },
  { id: 10, title: "A Practical Guide for Finding Interventions That Work for Autistic People", type: "Books", path: "Diversity-Affirming Evidence-Based Practice - Second Edition", year: 2024, hasButton: false, isOpenAccess: false },
  { id: 11, title: "A Practical Guide to Functional Assessment and Treatment for Severe Problem Behavior", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: 2024, hasButton: false, isOpenAccess: false },
  { id: 12, title: "A New Era in Alzheimer's Research", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 13, title: "AACE Endocrinology and Diabetes", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 14, title: "AASRI Procedia", type: "Journals", path: "Pathogenesis, Prevention, and Treatment", year: null, hasButton: false, isOpenAccess: true },
  { id: 15, title: "Biolology Advanced Research Tools", type: "Textbooks", path: "Molecular Pathogenesis Trends", year: 2025, hasButton: false, isOpenAccess: false },
  { id: 16, title: "Clinical Neurology Handbook", type: "Handbooks", path: "Neurological Foundations Volume II", year: 2023, hasButton: false, isOpenAccess: true },
];

export default function Journal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('A-Z');

  // Filter & Sort Logic Computation
  const filteredPublications = useMemo(() => {
    let result = [...ALL_PUBLICATIONS];

    if (selectedTypes.length > 0) {
      result = result.filter((pub) => selectedTypes.includes(pub.type));
    }

    result.sort((a, b) => (sortBy === 'Z-A' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)));

    return result;
  }, [selectedTypes, sortBy]);

  // Pagination Window Slice calculation
  const totalItems = filteredPublications.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const currentDataSlice = useMemo(() => {
    const startOffset = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPublications.slice(startOffset, startOffset + ITEMS_PER_PAGE);
  }, [filteredPublications, currentPage]);

  const handleFilterChange = (checkedValues) => {
    setSelectedTypes(checkedValues);
    setCurrentPage(1); // Reset index frame window
  };

  return (
    <>
      <HeroSection />

      <section className="stat-sec">
        <StatsBar />
      </section>
      <section>
        <div className="container">
          <DashboardTopBar />
        </div>
      </section>
      <section>
        <div className="sd-jl-container py-5">
          <div className="container">
            <div className="row g-4">
              <FiltersSidebar onFilterChange={handleFilterChange} />
              <PublicationsList
                publications={currentDataSlice}
                totalItems={totalItems}
                sortBy={sortBy}
                onSortChange={setSortBy}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
