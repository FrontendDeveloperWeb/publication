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

export default function Journal() {
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
                <h1>Journal</h1>
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
