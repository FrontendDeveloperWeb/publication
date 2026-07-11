import { Button } from 'antd';
import { LockOutlined, ArrowRightOutlined, FileTextOutlined, EyeOutlined } from '@ant-design/icons';

export default function OpenAccessSection({ indexingLogos }) {
  return (
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
  );
}
