import { BookOutlined } from '@ant-design/icons';

export default function RecentPublicationCard({ publication }) {
  return (
    <div className="sd-recent-pub-row-item">
      <div className="sd-recent-img-wrapper">
        <img src={publication.img} alt={publication.title} />
      </div>
      <div className="sd-recent-details-wrapper">
        <h6 className="sd-recent-pub-title">{publication.title}</h6>
        <div className="sd-recent-pub-meta">{publication.meta}</div>
        <span className="sd-badge-pill-status ra-color mt-1">
          <BookOutlined className="me-1" /> Research Article
        </span>
      </div>
    </div>
  );
}
