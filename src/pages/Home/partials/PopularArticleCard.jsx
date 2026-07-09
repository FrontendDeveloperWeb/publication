import { BookOutlined } from '@ant-design/icons';

export default function PopularArticleCard({ title, meta, badgeType = 'research-article' }) {
  const isOpenAccess = badgeType === 'open-access';

  return (
    <div className="sd-article-item-card">
      <h5 className="sd-art-title">{title}</h5>
      <div className="sd-art-meta">{meta}</div>
      <span className={`sd-badge-pill-status ${isOpenAccess ? 'oa-color' : 'ra-color'}`}>
        {isOpenAccess
          ? <img src="/assets/img/unlock-borderless.png" alt="" className="me-1" />
          : <BookOutlined className="me-1" />}
        {isOpenAccess ? 'Open Access' : 'Research Articles'}
      </span>
    </div>
  );
}
