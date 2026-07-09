import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Carousel, Badge, Input, Button, Select, Checkbox, } from 'antd';
import {
    FileTextOutlined,
    BookOutlined,
    BarChartOutlined,
    DownloadOutlined,
    ExperimentOutlined,
    ClockCircleOutlined,
    LockOutlined,
    DownOutlined,
    GlobalOutlined,
    LeftOutlined,
    RightOutlined,
    FileSearchOutlined,
    EyeOutlined,
    InstagramOutlined,
    DatabaseOutlined,
    ArrowRightOutlined,
    SearchOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';

const { Option } = Select;
export default function Journal() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortBy, setSortBy] = useState('A-Z');

    const itemsPerPage = 7;

    // Raw mock database mapping image values precisely
    const allPublications = [
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
        { id: 16, title: "Clinical Neurology Handbook", type: "Handbooks", path: "Neurological Foundations Volume II", year: 2023, hasButton: false, isOpenAccess: true }
    ];

    // Filter & Sort Logic Computation
    const filteredPublications = useMemo(() => {
        let result = [...allPublications];

        if (selectedTypes.length > 0) {
            result = result.filter(pub => selectedTypes.includes(pub.type));
        }

        if (sortBy === 'Z-A') {
            result.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        return result;
    }, [selectedTypes, sortBy]);

    // Pagination Window Slice calculation
    const totalItems = filteredPublications.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const currentDataSlice = useMemo(() => {
        const startOffset = (currentPage - 1) * itemsPerPage;
        return filteredPublications.slice(startOffset, startOffset + itemsPerPage);
    }, [filteredPublications, currentPage]);

    const handleFilterChange = (checkedValues) => {
        setSelectedTypes(checkedValues);
        setCurrentPage(1); // Reset index frame window
    };

    return (
        <>

            <section className='journal-sec'>
                <div className="sd-hero-container">

                    {/* HERO SECTION WITH TEAL OVERLAY */}
                    <div className="sd-hero-bg">
                        <div className="container px-5">
                            <div className="row">

                                {/* LEFT CONTENT AREA */}
                                <div className="col-12 col-md-6 col-lg-5 sd-left-content">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="sd-gold-line"></div>
                                        <span className="sd-stat-text">
                                            5,972 journals · 38,542 books
                                        </span>
                                    </div>

                                    <h1 className="display-5 mb-4 text-white sd-serif sd-main-title">
                                        <span className="sd-title-italic"> Browse</span>  the shelf, not
                                        the noise.
                                    </h1>

                                    <p className="text-white-50 lh-base sd-sub-desc">
                                        Search journals, books and open access content across every discipline — indexed, cross-referenced and ready to cite.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="container px-5 mt-5">
                            <div className="sd-search-panel">

                                {/* Form Rows with AntD Inputs & Bootstrap Grid */}
                                <div className="row g-3 align-items-end">
                                    <div className="col-md-5">
                                        <label className="form-label text-dark fw-semibold mb-1.5 sd-input-label">Journal or book title</label>
                                        <Input placeholder="e.g. Alzheimer’s Research" />
                                    </div>

                                    <div className="col-md-5">
                                        <label className="form-label text-dark fw-semibold mb-1.5 sd-input-label">Subject area</label>
                                        <Input placeholder="All subject areas" />
                                    </div>



                                    <div className="col-md-2">
                                        <Button type="primary" icon={<SearchOutlined />} className="w-100 sd-search-btn">
                                            Search here
                                        </Button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* FLOATING TAN SEARCH CONTAINER */}


                </div>
            </section>
            <section className='stat-sec'>
                <div className="sd-stats-bar">

                    <div className="sd-stats-container">
                        <div className="sd-stat-item">
                            <img src="public/assets/img/articles-chapters.png" alt="" />
                            <div>
                                <p className='sd-title'>25M+</p>
                                <p>Articles & Chapters</p>
                            </div>
                        </div>
                        <div className="sd-stat-item">
                            <img src="public/assets/img/peer-reviewed.png" alt="" />
                            <div>
                                <p className='sd-title'>4000+</p>
                                <p>Peer-reviewed journals</p>
                            </div>
                        </div>
                        <div className="sd-stat-item">
                            <img src="public/assets/img/open-journals.png" alt="" />
                            <div>
                                <p className='sd-title'>5000+</p>
                                <p>Open Access Journals</p>
                            </div>
                        </div>
                        <div className="sd-stat-item">
                            <img src="public/assets/img/downloads.png" alt="" />
                            <div>
                                <p className='sd-title'>100M+</p>
                                <p>Downloads</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="sd-jl-container py-5">
                    <div className="container" >
                        <div className="row g-4">

                            {/* ================= LEFT SIDEBAR FILTERS ================= */}
                            <div className="col-12 col-md-4 col-lg-3">

                                {/* CALL FOR PAPERS BANNER BOX */}
                                <div className="sd-jl-call-papers-box mb-4">
                                    <div className="sd-jl-call-body">
                                        <div className="sd-jl-circle-search-badge mb-2">
                                            <img src="/assets/img/search-icon.png" alt="" />
                                        </div>
                                        <h6 className="sd-jl-banner-prompt-title">Publishing next? <span className="fw-normal text-muted-white">Find the right home for your research before you submit.</span></h6>
                                    </div>
                                    <div className="sd-jl-footer">
                                        <a href="#calls" className="sd-jl-banner-action-link mt-3 d-inline-block">
                                            Browse calls for papers <ArrowRightOutlined className="ms-1" />
                                        </a>
                                    </div>
                                </div>

                                {/* FILTER CONTROLS ACCORDION BOX */}
                                <div className="sd-jl-filter-sidebar-card">
                                    <div className="select-area">
                                        <h5 className="sd-jl-filter-main-title pb-2 mb-2">Refine by subject</h5>

                                        <div className="mb-3">
                                            <label className="sd-jl-select-lbl">Find articles with the keywords</label>
                                            <Select defaultValue="All Subjects areas" className="w-100 sd-jl-antd-select">
                                                <Option value="all">All Subjects areas</Option>
                                            </Select>
                                        </div>

                                        <div className="mb-4">
                                            <label className="sd-jl-select-lbl">Secondary subject area</label>
                                            <Select defaultValue="All Secondary subject areas" className="w-100 sd-jl-antd-select">
                                                <Option value="all">All Secondary subject areas</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* PUBLICATION TYPE CHECKBOX GROUP */}
                                    <div className="sd-jl-filter-group mt-3 mb-4">
                                        <h6 className="sd-jl-group-sub-title mb-3">Publication type</h6>
                                        <Checkbox.Group className="w-100 d-flex flex-column gap-2" onChange={handleFilterChange}>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Checkbox value="Journals">Journals</Checkbox><span className="sd-count-lbl">5,972</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Checkbox value="Books">Books</Checkbox><span className="sd-count-lbl">31,204</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Checkbox value="Textbooks">Textbooks</Checkbox><span className="sd-count-lbl">3,118</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Checkbox value="Handbooks">Handbooks</Checkbox><span className="sd-count-lbl">1,940</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Checkbox value="Reference works">Reference works</Checkbox><span className="sd-count-lbl">862</span>
                                            </div>
                                        </Checkbox.Group>
                                    </div>

                                    {/* JOURNAL STATUS CHECKBOX */}
                                    <div className="sd-jl-filter-group border-top  mb-4">
                                        <h6 className="sd-jl-group-sub-title mb-2">Journal status</h6>
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <Checkbox value="accepts">Accepts submissions</Checkbox><span className="sd-count-lbl">4,301</span>
                                        </div>
                                    </div>

                                    {/* ACCESS TYPE ACCENT BADGES */}
                                    <div className="sd-jl-filter-group border-top pt-3">
                                        <h6 className="sd-jl-group-sub-title mb-2">Access type</h6>
                                        <div className="d-flex flex-column gap-2 mt-2">
                                            <span className="sd-filter-badge-pill pill-light-blue">Open access</span>
                                            <span className="sd-filter-badge-pill pill-gold-tan">Contains open access</span>
                                            <span className="sd-filter-badge-pill pill-muted-grey">Subscription</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* ================= RIGHT SIDE CONTENT LIST ================= */}
                            <div className="col-12 col-md-8 col-lg-9 ps-lg-4">

                                {/* HEADER INTERFACES */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h2 className="sd-jl-all-titles-head m-0">All Titles <span className="text-muted fw-normal font-sans">({totalItems})</span></h2>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="sd-jl-sort-label text-muted">Sort by</span>
                                        <Select value={sortBy} onChange={(val) => setSortBy(val)} className="sd-jl-sort-dropdown" style={{ width: 110 }}>
                                            <Option value="A-Z">Title, A-Z</Option>
                                            <Option value="Z-A">Title, Z-A</Option>
                                        </Select>
                                    </div>
                                </div>

                                {/* SEPARATOR ALPHABET SIGNIFIER MARKS */}
                                <div className="sd-jl-alphabet-divider mb-4">A</div>

                                {/* DYNAMIC LIST ITERATION */}
                                <div className="sd-jl-items-stack d-flex flex-column">
                                    {currentDataSlice.length > 0 ? (
                                        currentDataSlice.map((pub) => (
                                            <div key={pub.id} className="sd-jl-publication-row-item py-4 border-bottom">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="pe-3">
                                                        <h4 className="sd-jl-pub-item-title mb-1">{pub.title}</h4>
                                                        <div className="sd-jl-pub-item-path mb-3">{pub.path}</div>

                                                        {/* BOTTOM BADGE MARKS */}
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="sd-item-type-badge">{pub.type}</span>
                                                            {pub.year && <span className="sd-item-year-text">{pub.year}</span>}
                                                            {pub.isOpenAccess && <span className="sd-item-oa-badge-pill">Open access</span>}
                                                        </div>
                                                    </div>

                                                    {/* ACTION CONTROLS ON RIGHT TERMINAL BOUND */}
                                                    <div>

                                                        <Button className="sd-jl-btn-solid-view d-flex align-items-center gap-2">
                                                            View <ArrowUpOutlined style={{ transform: 'rotate(45deg)' }} />
                                                        </Button>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-5 text-center text-muted">No items found matching the filter matrix.</div>
                                    )}
                                </div>

                                {/* ================= EXACT WORKING PAGINATION BAR ================= */}
                                {totalPages > 1 && (
                                    <div className="sd-jl-pagination-bar-wrapper d-flex justify-content-center align-items-center mt-5">
                                        <button
                                            className="sd-jl-pag-btn-step arrow-left"
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        >
                                            <LeftOutlined />
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                            <button
                                                key={pageNumber}
                                                className={`sd-jl-pag-btn-num ${currentPage === pageNumber ? 'active-gold' : ''}`}
                                                onClick={() => setCurrentPage(pageNumber)}
                                            >
                                                {pageNumber}
                                            </button>
                                        ))}

                                        {/* Ellipsis placeholder block to keep strict asset alignment configuration from design */}
                                        {totalPages > 3 && <span className="sd-jl-pag-ellipse">···</span>}
                                        {totalPages > 3 && (
                                            <button className="sd-jl-pag-btn-num">42</button>
                                        )}

                                        <button
                                            className="sd-jl-pag-btn-step arrow-right"
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        >
                                            <RightOutlined />
                                        </button>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
