import { Input, Button } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

export default function DashboardTopBar() {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 bg-white p-3 border rounded shadow-sm">
      <div className="d-flex align-items-center gap-4">
        <span className="sd-ae-nav-brand-item font-weight-bold text-dark">Articles & Issues <DownOutlined className="sd-ae-nav-chevron" /></span>
        <span className="sd-ae-nav-brand-item">About <DownOutlined className="sd-ae-nav-chevron" /></span>
        <span className="sd-ae-nav-brand-item">Publish <DownOutlined className="sd-ae-nav-chevron" /></span>
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
  );
}
