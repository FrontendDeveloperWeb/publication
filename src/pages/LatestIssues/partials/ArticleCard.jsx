import { Tabs, Button } from 'antd';
import { EyeOutlined, FileImageOutlined } from '@ant-design/icons';

export default function ArticleCard({ article, activeTab, onTabChange }) {
  return (
    <div className="sd-ae-main-article-card-box p-4 border rounded bg-white mb-4">

      {/* Card Header Layer */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-2">
          <input type="checkbox" defaultChecked className="form-check-input sd-ae-custom-checkbox" />
          <span className="sd-ae-badge-type">Research article</span>
          <span className="sd-ae-badge-oa">Open Access</span>
        </div>
        <div className="d-flex gap-2">
          <Button size="small" className="sd-ae-action-pill-btn beige">  <img src="/assets/img/arrow-down.png" alt="" /> View PDF</Button>
          <Button size="small" className="sd-ae-action-pill-btn transparent"><EyeOutlined /> Article preview</Button>
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
          onChange={onTabChange}
          className="sd-ae-custom-antd-tabs"
          items={[
            {
              key: 'abstract',
              label: 'Abstract',
              children: (
                <div className="sd-ae-abstract-inner-text-flow pt-2">
                  <div className="d-flex align-items-center gap-2 mb-3 text-khaki-gold font-weight-bold small">
                    <div className="d-flex align-items-center gap-2">
                      <div className="sd-ae-abstract-icon-frame d-flex align-items-center justify-content-center me-2">
                        <img src="/assets/img/file-icon.png" alt="" />
                      </div>
                      <p>Abstract</p>
                    </div>
                  </div>
                  <h6 className="sd-ae-body-sub-title mb-2">Introduction</h6>
                  <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.introduction}</p>
                  <h6 className="sd-ae-body-sub-title mb-2">Objectives</h6>
                  <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.objectives}</p>
                  <h6 className="sd-ae-body-sub-title mb-2">Methods</h6>
                  <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.methods}</p>
                  <h6 className="sd-ae-body-sub-title mb-2">Results</h6>
                  <p className="sd-ae-body-paragraph-text text-secondary mb-3">{article.results}</p>
                  <h6 className="sd-ae-body-sub-title mb-2">Conclusions</h6>
                  <p className="sd-ae-body-paragraph-text text-secondary mb-1">{article.conclusions}</p>
                </div>
              )
            },
            {
              key: 'graphical',
              label: 'Graphical abstract',
              children: (
                <div className="sd-ae-graphical-inner-preview pt-2">
                  <div className="d-flex align-items-center gap-2 mb-3 text-khaki-gold font-weight-bold small">
                    <FileImageOutlined /> GRAPHICAL ABSTRACT
                  </div>
                  <div className="sd-ae-graphical-abstract-frame">
                    <img src={article.graphicalAbstract} alt={`Graphical abstract for ${article.title}`} className="img-fluid" />
                  </div>
                </div>
              )
            }
          ]}
        />
      </div>

    </div>
  );
}
