import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Carousel, Badge, Input, Button, Select, Checkbox, Switch, Pagination } from 'antd';
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
  ArrowUpOutlined,
  HeartOutlined,
  BankOutlined,
  AimOutlined,
  ExportOutlined,


  NotificationOutlined,

  FilePdfOutlined,


} from '@ant-design/icons';

const { Option } = Select;

export default function LatestIssues() {
  const [activeTab, setActiveTab] = useState('abstract');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreviews, setShowPreviews] = useState(false);

  // Per page items count rule (Har page/tab par 2 cards dekhane ke liye)
  const pageSize = 2;

  // --- COMPACT DYNAMIC CARDS REPOSITORY MATRIX ---
  const allArticles = [
    {
      id: 1,
      title: "Alginate oligosaccharides prevent and treat obesity by promoting brown fat thermogenesis rather than regulating gut microbiota",
      authors: "Yuncong Xu, Jun Jiang, Tao Li, Qiaojuan Yan ... Shaoqing Yang",
      pages: "Pages 1–21",
      introduction: "Spinal cord injury (SCI) stands as the primary cause of disability, still lacking a clear pathogenesis and effective treatment. The role of macrophages is particularly unclear in SCI, especially regarding cellular senescence.",
      objectives: "To investigate the role and underlying mechanism of Ubiquitously transcribed Tetratricopeptide repeat, X chromosome (UTX) in regulating macrophage senescence following SCI.",
      methods: "A contusive SCI model was constructed to explore the presence of senescent macrophages. After screening for UTX by a PCR array, conditioned knockout UTX mice was constructed."
    },
    {
      id: 2,
      title: "Structural bio-engineering structures in modern subtropical agricultural soils: A 2026 framework analysis",
      authors: "Dr. Amara Sterling, Liam Vance, Zhao Taylor",
      pages: "Pages 22–45",
      introduction: "Subtropical soil structures require precise structural bio-engineering to overcome modern erosion trends over dynamic weather cycles.",
      objectives: "Isolate precise DNA cascades optimizing immediate root-binding frameworks without degrading natural microbial flora.",
      methods: "Automated core profiling arrays deployed over 400 sample matrices across regional sectors within the agricultural belt."
    },
    {
      id: 3,
      title: "Machine Learning models for real-time predictive degradation tracking in deep structural systems",
      authors: "Marcus Vance, Elena Rostova, Kenji Tanaka",
      pages: "Pages 46–78",
      introduction: "Structural tracking models traditionally rely on retrospective physical assessments, delaying key infrastructure interventions.",
      objectives: "Construct a neural framework capable of predicting load failures 72 hours before critical damage limits are breached.",
      methods: "Deployment of distributed piezoelectric sensory layers across active test spans linked to a centralized processing matrix."
    },
    {
      id: 4,
      title: "Comparative evaluation of multi-crop integration matrices under extreme semi-arid climate shifts",
      authors: "Sarah Jenkins, Ahmed Mansoor, Clara Dupont",
      pages: "Pages 79–102",
      introduction: "Semi-arid agricultural regions are facing unprecedented temperature spikes, disrupting traditional crop cycles.",
      objectives: "To evaluate the yield efficiency of co-planting leguminous variations with deep-root cereal categories.",
      methods: "A three-year randomized block design study executed across experimental plots with automated drip irrigation modulation."
    }
  ];

  // --- GET CURRENT PAGE CARDS LOOP ---
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentArticlesForPage = allArticles.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>

      <section className='journal-sec'>
        <div className="sd-hero-container">

          {/* HERO SECTION WITH TEAL OVERLAY */}
          <div className="sd-hero-bg">
            <div className="container px-5">
              <div className="row align-items-center">

                {/* LEFT SIDE: STANDALONE FLOATING BOOK/JOURNAL COVER */}
                <div className="col-12 col-md-5 col-lg-5 offset-lg-1 d-flex justify-content-center justify-content-md-center">
                  <div className="sd-jb-book-cover-shadow-box">
                    {/* Using a placeholder rendering identical layouts of the book cover */}

                    <img
                      src="/assets/img/golf-banner.png"
                      alt="Golf Simplified Cover"
                      className="sd-jb-main-cover-img img-fluid"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: METADATA, TITLE, AND METRICS PANEL */}
                <div className="col-12 col-md-7 col-lg-6 text-white ps-md-4 ps-lg-5">
                  <div className="sd-jb-meta-content">

                    {/* MINI OPEN ACCESS INDICATOR */}
                    <div className="sd-jb-oa-indicator-pill mb-3">
                      <span className="sd-jb-dash-line">—</span> Open access
                    </div>

                    {/* MAIN HERO JOURNAL TITLES */}
                    <h1 className="sd-jb-main-heading-serif mb-3">
                      <span className="sd-jb-italic-gold-brand">Journal</span> of Advanced Research
                    </h1>

                    {/* DESCRIPTION SUBTEXT SUMMARY */}
                    <p className="sd-jb-body-desc mb-5">
                      Search journals, books and open access content across every discipline — indexed, cross-referenced and ready to cite.
                    </p>

                    {/* METRIC METERS DATA GRID DISPLAY */}
                    <div className="d-flex align-items-baseline gap-5">
                      <div className="sd-jb-metric-stat-box">
                        <div className="sd-jb-metric-huge-num">21.7</div>
                        <div className="sd-jb-metric-label">CiteScore</div>
                      </div>

                      <div className="sd-jb-metric-stat-box">
                        <div className="sd-jb-metric-huge-num">17.1</div>
                        <div className="sd-jb-metric-label">Impact factor</div>
                      </div>
                    </div>

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
        <div className="sd-ae-dashboard-wrapper py-4">
          <div className="container" style={{ maxWidth: '1280px' }}>

            {/* ================= SEARCH & TOP BAR ================= */}
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 bg-white p-3 border rounded shadow-sm">
              <div className="d-flex align-items-center gap-4">
                <span className="sd-ae-nav-brand-item font-weight-bold text-dark">Articles & Issues</span>
                <span className="sd-ae-nav-brand-item">About</span>
                <span className="sd-ae-nav-brand-item">Publish</span>
              </div>
              <div className="d-flex align-items-center gap-2 flex-grow-1 max-width-600 justify-content-end">
                <Input
                  placeholder="Search in this journal"
                  className="sd-ae-top-search-input"
                  style={{ maxWidth: '300px' }}
                />
                <Button type="primary" className="sd-ae-btn-dark-teal"><SearchOutlined /> Search</Button>
                <Button className="sd-ae-btn-khaki-gold">Submit your article</Button>
                <a href="#authors" className="sd-ae-author-guide-link ms-2">Guide for authors</a>
              </div>
            </div>

            {/* MAIN BODY GRID */}
            <div className="row g-4">

              {/* ================= LEFT CONTROLS & SIDEBAR PANEL ================= */}
              <div className="col-12 col-md-4 col-lg-3">
                <div className="sd-ae-volume-status-card mb-3 text-white">
                  <div className="sd-jl-call-body">
                    <div className="sd-jl-circle-search-badge mb-2">
                      <img src="/assets/img/search-icon.png" alt="" />
                    </div>
                    <h4 className="m-0 sd-jl-title font-serif">Volume 85</h4>
                    <p className="sd-ae-volume-date mb-2">Pages 1–1222 (July 2026)</p>
                  </div>
                  <div className="sd-jl-footer">
                    <Button className="w-100 sd-ae-btn-khaki-gold-solid d-flex align-items-center justify-content-center gap-2">
                      <DownloadOutlined /> Download full issue
                    </Button>
                  </div>

                </div>

                <div className="sd-ae-sidebar-action-box p-3 border rounded bg-white mb-3">
                  <h6 className="sd-ae-panel-label-title mb-2">Actions for selected articles</h6>
                  <p className="text-muted small mb-3">Select all/Deselect all</p>
                  <div className="d-flex flex-column gap-2 mb-3">
                    <Button className="w-100 d-flex align-items-center justify-content-center gap-2 sd-ae-btn-light">
                      <DownloadOutlined /> Download full issue
                    </Button>
                    <Button className="w-100 d-flex align-items-center justify-content-center gap-2 sd-ae-btn-light">
                      <ExportOutlined /> Export citations
                    </Button>
                  </div>
                  <div className=" pt-2 border-top">
                    <Switch size="small" checked={showPreviews} onChange={(checked) => setShowPreviews(checked)} /> <span className="small text-secondary font-weight-medium">Show all article previews</span>

                  </div>
                </div>

                <div className="sd-ae-sidebar-contents-box p-3 border rounded bg-white">
                  <h6 className="sd-ae-panel-label-title mb-3">Contents</h6>
                  <ul className="sd-ae-contents-index-links">
                    <li><a href="#agri" className="active-item"><img src="/assets/img/bar-icon.png" alt="" /> Agricultural Sciences</a></li>
                    <li><a href="#basic"><img src="/assets/img/bar-icon.png" alt="" /> Basic and Biological Sciences</a></li>
                    <li><a href="#dent"><img src="/assets/img/bar-icon.png" alt="" /> Dentistry</a></li>
                    <li><a href="#math"><img src="/assets/img/bar-icon.png" alt="" /> Mathematics, Engineering...</a></li>
                    <li><a href="#med"><img src="/assets/img/bar-icon.png" alt="" /> Medicine</a></li>
                    <li><a href="#pharma"><img src="/assets/img/bar-icon.png" alt="" /> Pharmaceutical Sciences</a></li>
                    <li><a href="#vet"><img src="/assets/img/bar-icon.png" alt="" /> Veterinary Medicine</a></li>
                  </ul>
                </div>
              </div>

              {/* ================= RIGHT CONTENT AREA ================= */}
              <div className="col-12 col-md-8 col-lg-9">
                <div className="sd-ae-updates-alert-ribbon p-4 mb-4 rounded d-flex align-items-start gap-3">
                  <div className="sd-ae-bell-alert-badge">
                    <img src="/assets/img/bell-icon.png" alt="" />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="m-0 text-dark font-weight-bold mb-1">Stay Updated with Every New Issue</h6>
                    <p className="m-0 text-muted small">Never miss the latest research. Receive instant notifications whenever a new journal issue is published.</p>
                    <Button className="sd-ae-btn-dark-teal mt-3 px-4 btn-sm">Sign In to Enable Alerts</Button>
                  </div>
                </div>

                <div className="d-flex justify-content-end mb-4 gap-2">
                  <Button
                    className="sd-ae-btn-volume-switch btn-sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  >
                    <LeftOutlined /> Previous vol/issue
                  </Button>
                  <Button
                    className="sd-ae-btn-volume-switch btn-sm"
                    disabled={currentPage === Math.ceil(allArticles.length / pageSize)}
                    onClick={() => setCurrentPage(p => Math.min(p + 1, Math.ceil(allArticles.length / pageSize)))}
                  >
                    Next vol/issue <RightOutlined />
                  </Button>
                </div>

                <h3 className="sd-ae-section-category-title mb-4 pb-2 border-bottom">Agricultural Sciences</h3>

                {/* ================= ARRAYS RENDER LOOP WINDOW ================= */}
                {currentArticlesForPage.map((article) => (
                  <div key={article.id} className="sd-ae-main-article-card-box p-4 border rounded bg-white mb-4">

                    {/* Card Header Layer */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <input type="checkbox" defaultChecked className="form-check-input sd-ae-custom-checkbox" />
                        <span className="sd-ae-badge-type">Research article</span>
                        <span className="sd-ae-badge-oa">Open Access</span>
                      </div>
                      <div className="d-flex gap-2">
                        <Button size="small" className="sd-ae-action-pill-btn"><FilePdfOutlined /> View PDF</Button>
                        <Button size="small" className="sd-ae-action-pill-btn"><EyeOutlined /> Article preview</Button>
                      </div>
                    </div>

                    {/* Dynamic Heading Title targeting requested row */}
                    <h4 className="sd-ae-article-main-headline mb-2">{article.title}</h4>
                    <p className="sd-ae-article-authors-text mb-1 text-muted">{article.authors}</p>
                    <p className="sd-ae-article-pages-range text-muted small mb-4">{article.pages}</p>

                    {/* ================= OFFICIAL ANTD TABS SCHEME INSIDE CARD ================= */}
                    <div className="sd-ae-interactive-tabs-container">
                      <Tabs
                        activeKey={activeTab}
                        onChange={(key) => setActiveTab(key)}
                        className="sd-ae-custom-antd-tabs"
                        items={[
                          {
                            key: 'abstract',
                            label: 'Abstract',
                            children: (
                              <div className="sd-ae-abstract-inner-text-flow pt-2">
                                <div className="d-flex align-items-center gap-2 mb-3 text-khaki-gold font-weight-bold small">
                                  <FileTextOutlined /> ABSTRACT
                                </div>
                                <h6 className="sd-ae-body-sub-title mb-2">Introduction</h6>
                                <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.introduction}</p>
                                <h6 className="sd-ae-body-sub-title mb-2">Objectives</h6>
                                <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.objectives}</p>
                                <h6 className="sd-ae-body-sub-title mb-2">Methods</h6>
                                <p className="sd-ae-body-paragraph-text text-secondary mb-1">{article.methods}</p>
                              </div>
                            )
                          },
                          {
                            key: 'graphical',
                            label: 'Graphical abstract',
                            children: (
                              <div className="sd-ae-graphical-inner-preview text-center py-4 text-muted border rounded bg-light mt-2">
                                <EyeOutlined style={{ fontSize: '24px', color: '#cfb28d', marginBottom: '8px' }} />
                                <p className="m-0 small">Graphical Abstract asset layer workspace for ID: #{article.id}</p>
                              </div>
                            )
                          }
                        ]}
                      />
                    </div>

                  </div>
                ))}

                {/* ================= MATCHED STYLED ANTD PAGINATION CONTROLLER ================= */}
                <div className="sd-ae-global-footer-pagination d-flex justify-content-center align-items-center mt-5">
                  <Pagination
                    current={currentPage}
                    onChange={(page) => setCurrentPage(page)}
                    total={allArticles.length}
                    pageSize={pageSize}
                    showSizeChanger={false}
                    className="sd-ae-custom-antd-pagination"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
