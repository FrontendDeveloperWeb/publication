import { Input, Button } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

const POPULAR_SEARCH_TAGS = ['Artificial Intelligence', 'Pandemic(Covid -19)', 'Digital Technologies', 'Digital Technologies', 'Digital Technologies'];

export default function HeroSection() {
  return (
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
                {POPULAR_SEARCH_TAGS.map((tag, idx) => (
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
  );
}
