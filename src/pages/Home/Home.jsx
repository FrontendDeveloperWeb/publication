import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Carousel, Badge, Input, Button, Select } from 'antd';

import {
  FileTextOutlined,
  BookOutlined,
  BarChartOutlined,
  DownloadOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  LockOutlined,
  DownOutlined,
  SearchOutlined,
  GlobalOutlined,
  LeftOutlined,
  RightOutlined,
  FileSearchOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  EyeOutlined,
  InstagramOutlined,


  DatabaseOutlined
} from '@ant-design/icons';

export default function Home() {
  const carouselRef = React.useRef(null);
  const navigate = useNavigate();
  const categories = [
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

  const recentPublications = [
    {
      id: 1,
      title: 'Quantum computing advances in 2024',
      meta: 'Physics Today  ·  Volume 77, Issue 1',
      img: '/assets/img/publication-card-1.png'
    },
    {
      id: 2,
      title: 'Sustainable Material advances in 2024',
      meta: 'Physics Today  ·  Volume 77, Issue 1',
      img: '/assets/img/publication-card-2.png'
    },
    {
      id: 3,
      title: 'Chemical Research advances in 2024',
      meta: 'Physics Today  ·  Volume 77, Issue 1',
      img: '/assets/img/publication-card-3.png'
    }
  ];
  const articles = [
    {
      id: 1,
      title: "New technology awarness.",
      desc: "Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats",
      author: "Jane Cooper",
      date: "2nd January,2022",
      img: "/assets/img/slider-img.png",
      isActive: false
    },
    {
      id: 2, // Center Card - Dark Variant
      title: "New technology awarness.",
      desc: "Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats",
      author: "Jane Cooper",
      date: "2nd January,2022",
      img: "/assets/img/slider-img.png",
      isActive: true
    },
    {
      id: 3,
      title: "New technology awarness.",
      desc: "Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats",
      author: "Jane Cooper",
      date: "2nd January,2022",
      img: "/assets/img/slider-img.png",
      isActive: false
    },
    {
      id: 3,
      title: "New technology awarness.",
      desc: "Ameliorative Effects of Honey on Petrol Vapor-Induced Oxidative Stress in the Reproductive System of Female Wistar Rats",
      author: "Jane Cooper",
      date: "2nd January,2022",
      img: "/assets/img/slider-img.png",
      isActive: false
    }
  ];
  const responsiveSettings = [
    {
      breakpoint: 1200, // Screens smaller than 1200px
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992, // Screens smaller than 992px
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768, // Screens smaller than 768px
      settings: {
        slidesToShow: 1,
      }
    }
  ];
  const indexingLogos = [
    { name: 'INDEX COPERNICUS', logo: '/assets/img/index-img.png', fallback: 'INDEX COPERNICUS' },
    { name: 'Google Scholar', logo: '/assets/img/google-scholer.png', fallback: 'Google Scholar' },
    { name: 'STELLARSCHOLAR', logo: '/assets/img/stelar-img.png', fallback: '⭐ STELLARSCHOLAR' }
  ];

  return (
    <>
      <header>
        <nav className='nav-bar'>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p>For institutions, researchers and clinicians</p>
              </div>
              <div>
                <span>English  </span>
                <span>· My account</span>
                <span>· Help</span>
              </div>
            </div>
          </div>
        </nav>
        <div className="header">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <img src="/public/assets/img/logo.png" alt="" />
              </div>
              <div>
                <ul className='list-area d-flex align-items-center justify-content-between'>
                  <li><a href="#">Journal & Books</a></li>
                  <li><a href="#">
                    <img src="/public/assets/img/nav-q.png" alt="" /></a></li>
                  <li><a href="#">

                    <img src="/public/assets/img/h-back-icon.png" alt="" />
                  </a></li>
                  <li>
                    <button className='custom-btn transparent-btn'>Register</button>
                  </li>
                  <li>
                    <button className='custom-btn yellow-btn'>Register</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
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
                      31M+ peer-reviewed articles
                    </span>
                  </div>

                  <h1 className="display-5 mb-4 text-white sd-serif sd-main-title">
                    Find The <span className="sd-title-italic">research</span> that actually answer your question
                  </h1>

                  <p className="text-white-50 lh-base sd-sub-desc">
                    Search journals, books and open access content across every discipline — indexed, cross-referenced and ready to cite.
                  </p>
                </div>

                {/* RIGHT SIDE ACCURATE ROTATED CARDS */}
                <div className="col-12 col-md-6 col-lg-7 mt-5 mt-lg-0">
                  <div className="sd-cards-wrapper">

                    {/* 1st Card: White, Left Angled */}
                    <div className="sd-card-base sd-card-1">
                      <div className="d-flex justify-content-between align-items-center text-muted sd-card-meta">
                        <span>VOL. 12 NO. 1</span>
                        <span className="badge text-dark border px-2 py-1 sd-card-badge">Open Access</span>
                      </div>
                      <h6 className="sd-serif fw-bold text-dark my-2 sd-card-title">
                        Artificial intelligence in healthcare: A systematic literature review
                      </h6>
                      <p className="text-muted mb-0 sd-card-footer-text">J. Healthcare Informatics - 2026</p>
                    </div>

                    {/* 2nd Card: Tan Color, Right Angled */}
                    <div className="sd-card-base sd-card-2">
                      <div className="text-dark opacity-75 sd-card-meta">
                        VOL. 12 NO. 1
                      </div>
                      <h6 className="sd-serif fw-bold text-dark my-2 sd-card-title">
                        Artificial intelligence in healthcare: A systematic literature review
                      </h6>
                      <p className="text-dark opacity-75 mb-0 sd-card-footer-text">J. Healthcare Informatics - 2026</p>
                    </div>

                    {/* 3rd Card: White, Base Layer */}
                    <div className="sd-card-base sd-card-3">
                      <div className="text-muted sd-card-meta">
                        VOL. 12 NO. 1
                      </div>
                      <h6 className="sd-serif fw-bold text-dark my-2 sd-card-title">
                        Artificial intelligence in healthcare: A systematic literature review
                      </h6>
                      <p className="text-muted mb-0 sd-card-footer-text">J. Healthcare Informatics - 2026</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* FLOATING TAN SEARCH CONTAINER */}
          <div className="container-fluid px-5 mb-5">
            <div className="sd-search-panel">

              {/* Form Rows with AntD Inputs & Bootstrap Grid */}
              <div className="row g-3 align-items-end">
                <div className="col-md-3">
                  <label className="form-label text-dark fw-semibold mb-1.5 sd-input-label">Find articles with the keywords</label>
                  <Input placeholder="Keywords" />
                </div>

                <div className="col-md-4">
                  <label className="form-label text-dark fw-semibold mb-1.5 sd-input-label">In this journal or book title</label>
                  <Input placeholder="Journal/book title" />
                </div>

                <div className="col-md-3">
                  <label className="form-label text-dark fw-semibold mb-1.5 sd-input-label">Author(s)</label>
                  <Input placeholder="Author name" />
                </div>

                <div className="col-md-2">
                  <Button type="primary" icon={<SearchOutlined />} className="w-100 sd-search-btn">
                    Search here
                  </Button>
                </div>
              </div>

              {/* Popular Badges Row */}
              <div className="d-flex flex-wrap align-items-center mt-4 pt-3 sd-popular-divider">
                <span className="text-dark fw-bold me-3 sd-popular-title">Popular :</span>
                <div className="d-flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Pandemic(Covid -19)', 'Digital Technologies', 'Digital Technologies', 'Digital Technologies'].map((tag, idx) => (
                    <div key={idx} className="sd-badge-pill shadow-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Search Link */}
              <div className="text-end mt-3">
                <a href="#advanced" className="text-decoration-none text-dark fw-bold d-inline-flex align-items-center gap-1 sd-advanced-link">
                  Advanced Search <DownOutlined className="sd-icon-nano" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="sd-content-section">

          {/* 1. TOP STATS BAR */}
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

          <div className="container mx-auto px-4 mt-5">

            {/* 2. MAIN TITLE HEADING */}
            <div className="text-center py-3">
              <h2 className="sd-explore-heading sd-serif">
                Explore scientific, technical, <br />
                and medical <span className="sd-title-italic">research</span>
              </h2>
            </div>
            <div className="sd-tabs-section-container py-5">
              <div className="container-fluid" style={{ maxWidth: '1400px' }}>

                {/* TABS HEADER NAVIGATION */}
                <div className="sd-custom-tabs-nav mb-4">
                  <Tabs
                    defaultActiveKey="1"
                    tabBarExtraContent={
                      <a href="#all" className="sd-view-all-pub">
                        View all Publications <ArrowRightOutlined className="ms-1" />
                      </a>
                    }
                    items={[
                      { key: '1', label: <span><ExperimentOutlined className="me-2" />Physical Science and Engineering</span> },
                      { key: '2', label: 'Life Sciences' },
                      { key: '3', label: 'Health Sciences' },
                      { key: '4', label: 'Social Sciences and Humanities' },
                    ]}
                  />
                </div>

                {/* 3-COLUMN LAYOUT GRID */}
                <div className="row g-4">

                  {/* LEFT SIDEBAR: Browse Categories */}
                  <div className="col-12 col-md-4 col-lg-3">
                    <div className="sd-sidebar-card h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="sd-sidebar-header-title">Browse journals and books in:</div>
                        <ul className="sd-sidebar-ul">
                          {categories.map((cat, idx) => (
                            <li key={idx} className="sd-sidebar-li-item">
                              <ExperimentOutlined className="sd-li-icon me-2" />
                              <span className="sd-li-text">{cat.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 border-top">
                        <Button className="sd-btn-browse-all w-100 d-flex align-items-center justify-content-center">
                          Browse all titles <ArrowRightOutlined className="ms-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE COLUMN: Carousel Banner + Popular Articles */}
                  <div className="col-12 col-md-8 col-lg-5">

                    {/* CAROUSEL / SLIDER */}
                    <Carousel autoplay effect="fade" className="sd-middle-carousel">
                      <div>
                        <div className="sd-carousel-slide-item">
                          <div className="sd-carousel-overlay-content">
                            <h3 className="sd-carousel-title">Artificial intelligence in healthcare: A systematic literature review</h3>
                            <p className="sd-carousel-desc">
                              Search journals, books and open access content across every discipline — indexed, cross-referenced and ready to cite.
                            </p>
                            <button className="sd-btn-carousel-oa">
                              <img src="/assets/img/unlock-icon.png" alt="" />
                              Open Access
                            </button>
                          </div>
                        </div>
                      </div>
                    </Carousel>

                    {/* POPULAR ARTICLES SECTION */}
                    <div className="sd-popular-wrapper mt-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="sd-section-heading-title ">
                          <ClockCircleOutlined className="me-2" /> Popular Articles
                        </span>
                        <a href="#view-all" className="sd-section-heading-link">
                          Vie all articles <ArrowRightOutlined className="ms-1" />
                        </a>
                      </div>

                      {/* ARTICLE ITEM 1 */}
                      <div className="sd-article-item-card mb-3">
                        <h5 className="sd-art-title">Artificial intelligence in healthcare: A systematic literature review</h5>
                        <div className="sd-art-meta">Expert Systems with Applications  •  Volume 242, Part A</div>
                        <span className="sd-badge-pill-status oa-color">
                          <img src="/assets/img/unlock-borderless.png" alt="" className='me-1' /> Open Access
                        </span>
                      </div>

                      {/* ARTICLE ITEM 2 */}
                      <div className="sd-article-item-card">
                        <h5 className="sd-art-title">Artificial intelligence in healthcare: A systematic literature review</h5>
                        <div className="sd-art-meta">Expert Systems with Applications  •  Volume 242, Part A</div>
                        <span className="sd-badge-pill-status ra-color">
                          <BookOutlined className="me-1" /> Research Articles
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Recent Publications */}
                  <div className="col-12 col-lg-4">
                    <div className="sd-recent-publications-card h-100">
                      <div className="sd-section-heading-title sd-border-bottom">
                        <ClockCircleOutlined className="me-2" /> Recent Publication
                      </div>

                      <div className="d-flex flex-column gap-3">
                        {recentPublications.map((pub) => (
                          <div key={pub.id} className="sd-recent-pub-row-item">
                            <div className="sd-recent-img-wrapper">
                              <img src={pub.img} alt={pub.title} />
                            </div>
                            <div className="sd-recent-details-wrapper">
                              <h6 className="sd-recent-pub-title">{pub.title}</h6>
                              <div className="sd-recent-pub-meta">{pub.meta}</div>
                              <span className="sd-badge-pill-status ra-color mt-1">
                                <BookOutlined className="me-1" /> Research Article
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM CALL TO ACTION RIBBON */}
                <div className="sd-bottom-ribbon-banner mt-5">
                  <div className="sd-ribbon-icon-box">
                    <ArrowRightOutlined />
                  </div>
                  <div className="sd-ribbon-text-msg">
                    Register now to receive recommended articles based on your activity
                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </section>
      <section className='artical-sec'>
        <div className="sd-articles-section py-5">
          <div className="container" style={{ maxWidth: '1380px' }}>

            {/* SECTION TITLE */}
            <div className="text-center mb-5">
              <h2 className="sd-articles-main-heading">Article</h2>
            </div>

            {/* ANT DESIGN CAROUSEL / SLIDER */}
            <div className="sd-articles-carousel-wrapper">
              <Carousel
                ref={carouselRef}
                dots={false}
                infinite={true}
                slidesToShow={3}
                responsive={responsiveSettings}
                arrows={false}
              >
                {articles.map((art) => (
                  <div key={art.id} className="p-2 d-flex justify-content-center">
                    <div className={`sd-article-card ${art.isActive ? 'sd-active-dark-card' : 'sd-light-card'}`} style={{ margin: '0 auto' }}>

                      {/* CARD IMAGE CONTAINER WITH SHINING STAR / OVERLAY OPTION */}
                      <div className="sd-card-img-box">
                        <img src={art.img} alt={art.title} />
                        {/* Replicating the golden graphic detail found on top right of image */}
                        <div className="sd-gold-star-accent">✦</div>
                      </div>

                      {/* CARD BODY CONTENT */}
                      <div className="sd-card-body-content">
                        <h4 className="sd-art-card-title">{art.title}</h4>
                        <p className="sd-art-card-desc">{art.desc}</p>

                        {/* CARD FOOTER META */}
                        <div className="sd-card-footer-meta d-flex align-items-center justify-content-between pt-3">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                              alt={art.author}
                              className="sd-author-avatar"
                            />
                            <span className="sd-meta-text-info">
                              {art.author} <span className="mx-1">|</span> {art.date}
                            </span>
                          </div>
                          <a href="#read" className="sd-read-more-link">Read More</a>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* CUSTOM CONTROLS / PAGINATION BUTTONS Linked with Carousel Actions */}
            <div className="d-flex justify-content-center align-items-center mt-5 gap-1">
              <button
                className="sd-btn-pag-arrow sd-arrow-left"
                onClick={() => carouselRef.current.prev()}
              >
                <LeftOutlined />
              </button>
              <button
                className="sd-btn-pag-arrow sd-arrow-right active"
                onClick={() => carouselRef.current.next()}
              >
                <RightOutlined />
              </button>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="sd-oa-section-wrapper">

          {/* 1. TOP DARK TEAL BANNER RIBBON */}
          <div className="sd-oa-top-banner">

            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="d-flex align-items-start gap-3">
                    <div className="sd-oa-lock-icon-box">
                      <LockOutlined />
                    </div>
                    <div>
                      <h2 className="sd-oa-banner-heading">
                        <span className="sd-oa-highlight-gold">1.1 million</span> articles on ScienceDirect are open access
                      </h2>
                      <p className="sd-oa-banner-subtext">
                        Our open access journals ensure that every published article is freely available to researchers,
                        educators, students, and the public worldwide. All manuscripts undergo a rigorous peer-review
                        process to maintain high academic standards, while authors retain greater visibility
                        and reach through unrestricted online access.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 text-lg-end mt-3 mt-lg-0 ps-lg-5 ms-4">
                  <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                    <Button className="sd-oa-btn-gold">
                      View open access journals
                    </Button>
                    <a href="#publishing-choices" className="sd-oa-banner-link">
                      Read about publishing choices <ArrowRightOutlined className="ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. LOWER CONTENT TWO-COLUMN LAYOUT */}
          <div className="sd-oa-lower-content py-5">
            <div className="container">
              <div className="row g-5 align-items-center">

                {/* LEFT SIDE: QUALITY RESEARCH AND LOGOS */}
                <div className="col-12 col-lg-5">
                  <div className="sd-oa-left-block">
                    <div className="sd-oa-mini-accent-title">
                      <span className="sd-oa-line-accent">—</span> Access & Discover
                    </div>
                    <h3 className="sd-oa-main-title-serif my-3">
                      Quality research is <br />
                      <span className="sd-oa-title-italic-gold">accessible to all</span>
                    </h3>
                    <p className="sd-oa-left-desc mb-4">
                      Our open access journals ensure that every published article is freely available
                      to researchers, educators, students, and the public worldwide.
                    </p>

                    {/* INDEXING CARD BUTTONS */}
                    <div className="sd-oa-logos-stack d-flex flex-column gap-3">
                      {indexingLogos.map((item, index) => (
                        <div key={index} className="sd-oa-logo-card-btn d-flex align-items-center justify-content-between">
                          <div className="sd-oa-logo-img-wrapper d-flex align-items-center">
                            {item.logo ? (
                              <img src={item.logo} alt={item.name} className="sd-oa-brand-img" />
                            ) : (
                              <span className="sd-oa-brand-fallback font-weight-bold">{item.fallback}</span>
                            )}
                          </div>
                          <div className="sd-oa-logo-arrow">
                            <ArrowRightOutlined />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: BACKGROUND IMAGE WITH OVERLAPPING FLOATING CARD */}
                <div className="col-12 col-lg-7 position-relative mt-5 mt-lg-0">
                  <div className="sd-oa-right-image-container">

                    {/* BACK IMAGE (Muted golden overlay applied in CSS) */}
                    <div className="sd-oa-bg-photo-frame">
                      <img
                        src="/assets/img/discussing-img.png"
                        alt="Team discussing research"
                        className="sd-oa-main-bg-img"
                      />
                    </div>

                    {/* FLOATING DARK OVERLAP CARD */}
                    <div className="sd-oa-floating-overlap-card">
                      <div className="sd-oa-float-icon-box mb-3">
                        <FileTextOutlined />
                      </div>
                      <h4 className="sd-oa-float-title">Publication Fee</h4>
                      <span className="sd-oa-float-tag mb-1 mt-1 d-inline-block">Open Access</span>

                      <p className="sd-oa-float-desc">
                        Our open access journals ensure that every published article is freely available
                        to researchers, educators, students, and the public worldwide. All manuscripts
                        undergo a rigorous peer-review process to maintain high academic standards,
                        while authors retain greater visibility and reach through unrestricted online access.
                      </p>

                      <hr className="sd-oa-float-divider my-3" />

                      {/* BULLET CHECKLIST */}
                      <ul className="sd-oa-float-checklist mb-4">
                        <li><EyeOutlined className="me-2" /> High Visibility & discoverability</li>
                        <li><EyeOutlined className="me-2" />Indexed is leading database</li>
                        <li><EyeOutlined className="me-2" /> Open access for global research</li>
                      </ul>

                      <Button className="sd-oa-float-btn-more w-100 d-flex align-items-center justify-content-center">
                        Learn More <ArrowRightOutlined className="ms-2" />
                      </Button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <footer className="sd-main-footer-section">
        <div className="container position-relative" style={{ maxWidth: '1240px' }}>

          {/* 1. FLOATING SEARCH RIBBON PANEL */}
          <div className="sd-footer-search-ribbon">
            <div className="sd-ribbon-dots-right"></div>
            <div className="row align-items-center g-3 position-relative" style={{ zIndex: 3 }}>
              <div className="col-12 col-xl-5 d-flex align-items-center gap-3">
                <div className="sd-ribbon-icon-circle">
                  <FileSearchOutlined />
                </div>
                <div>
                  <h4 className="sd-ribbon-title m-0">Need help finding something?</h4>
                  <p className="sd-ribbon-subtext m-0 mt-1">
                    Our open access journals ensure that every published article is freely available to researchers, educators, students, and the public worldwide.
                  </p>
                </div>
              </div>

              <div className="col-12 col-xl-7">
                <div className="sd-search-inputs-row d-flex flex-wrap flex-sm-nowrap gap-2">
                  <Input
                    placeholder="Search here articles..."
                    prefix={<SearchOutlined style={{ color: '#8fa0a0' }} />}
                    className="sd-custom-search-input"
                  />
                  <Select defaultValue="All Topics" className="sd-custom-select-topic">
                    <Option value="All Topics">All Topics</Option>
                    <Option value="Science">Science</Option>
                    <Option value="Health">Health</Option>
                    <Option value="Technology">Technology</Option>
                  </Select>
                  <Button className="sd-btn-search-trigger d-flex align-items-center justify-content-center">
                    <SearchOutlined className="me-1" /> Search here
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MAIN FOOTER CONTENT LINKS */}
          <div className="row sd-footer-links-grid">

            {/* BRAND COLUMN */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="sd-footer-brand-logo mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Elsevier_Logo.svg/1200px-Elsevier_Logo.svg.png"
                  alt="Logo Accent Tree"
                  className="sd-footer-logo-tree me-2"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <span className="sd-brand-name-text">ScienceDirect</span>
              </div>
              <p className="sd-brand-description-para mb-4">
                Our open access journals ensure that every published article is freely available to researchers, educators, students, and the public worldwide.
              </p>

              <div className="sd-social-connect-block">
                <h6 className="sd-social-title mb-3">Stay Connected</h6>
                <div className="d-flex gap-2">
                  <a href="#linkedin" className="sd-social-icon-circle"><LinkedinOutlined /></a>
                  <a href="#twitter" className="sd-social-icon-circle"><TwitterOutlined /></a>
                  <a href="#link" className="sd-social-icon-circle"><GlobalOutlined /></a>
                  <a href="#instagram" className="sd-social-icon-circle"><InstagramOutlined /></a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-6 col-md-2 col-lg-2 offset-lg-1 mb-4 mb-md-0">
              <h5 className="sd-footer-col-heading">Quick Links</h5>
              <ul className="sd-footer-ul-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#submit">Submit</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* AUTHOR GUIDE */}
            <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
              <h5 className="sd-footer-col-heading">Author Guide</h5>
              <ul className="sd-footer-ul-links">
                <li><a href="#authors">For Authors</a></li>
                <li><a href="#structure">Structure Of Manuscript</a></li>
                <li><a href="#checklist">Manuscript Checklist</a></li>
                <li><a href="#evaluation">Manuscripts Evaluation</a></li>
                <li><a href="#policies">Policies On Article Publication</a></li>
              </ul>
            </div>

            {/* CONTACT US */}
            <div className="col-12 col-md-3 col-lg-3">
              <h5 className="sd-footer-col-heading">Contact Us</h5>
              <ul className="sd-footer-ul-links">
                <li className="sd-contact-highlight-li">+1 234 56 78 910</li>
                <li className="sd-contact-highlight-li">example123@gmail.com</li>
                <li><a href="#checklist">Manuscript Checklist</a></li>
                <li><a href="#evaluation">Manuscripts Evaluation</a></li>
                <li><a href="#policies">Policies On Article Publication</a></li>
              </ul>
            </div>

          </div>

          {/* 3. BOTTOM BASEBAR */}
          <div className="sd-footer-bottom-basebar d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="sd-copyright-text">
              Copyright © 2025 . All rights reserved.
            </div>
            <div className="sd-basebar-links-row d-flex gap-4 mt-3 mt-md-0">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Condition</a>
              <a href="#legal">Legal</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
