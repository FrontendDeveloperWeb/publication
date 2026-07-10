import { Dropdown, Space, Input, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './DashboardTopBar.css';

/* ============================================================
   DASHBOARD TOP BAR — standalone navigation + search strip.
   No page grids, sidebars, or footers — just the horizontal bar.
   ============================================================ */

// Shared placeholder menu payload for each nav dropdown.
const NAV_MENU_ITEMS = [
  { key: '1', label: <a href="#browse">Browse all</a> },
  { key: '2', label: <a href="#current">Current volume</a> },
  { key: '3', label: <a href="#archive">Archive</a> },
];

// Left-side nav triggers rendered as Ant Design dropdowns.
const NAV_LINKS = ['Articles & Issues', 'About', 'Publish'];

export default function DashboardTopBar() {
  return (
    <div className="sd-dtb-bar d-flex flex-wrap align-items-center justify-content-between py-3 px-4 bg-white gap-3">

      {/* ================= LEFT: NAV DROPDOWNS ================= */}
      <nav className="sd-dtb-nav d-flex align-items-center gap-4">
        {NAV_LINKS.map((label) => (
          <Dropdown key={label} menu={{ items: NAV_MENU_ITEMS }} trigger={['click']}>
            <a
              className="sd-dtb-nav-link"
              onClick={(e) => e.preventDefault()}
              href="#nav"
            >
              <Space size={6}>
                {label}
                <DownOutlined className="sd-dtb-chevron" />
              </Space>
            </a>
          </Dropdown>
        ))}
      </nav>

      {/* ================= RIGHT: SEARCH + ACTIONS ================= */}
      <div className="sd-dtb-actions d-flex flex-wrap align-items-center gap-3">

        {/* Composite search: gray input flush against charcoal button */}
        <div className="sd-dtb-search-group d-flex align-items-center">
          <Input
            className="sd-dtb-search-input"
            placeholder="Search in this journal"
            variant="borderless"
          />
          <Button className="sd-dtb-search-btn">Search</Button>
        </div>

        {/* Gold/beige accent action button */}
        <Button className="sd-dtb-btn-submit">Submit your article</Button>

        {/* Minimalist underline text link */}
        <a href="#guide" className="sd-dtb-guide-link">Guide for authors</a>

      </div>
    </div>
  );
}
