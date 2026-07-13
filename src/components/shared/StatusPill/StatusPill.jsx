import { BookOutlined } from '@ant-design/icons';

/**
 * Article status pill (`sd-badge-pill-status`). Two visual variants:
 *   - open-access → unlock icon, "Open Access", oa-color
 *   - research    → book icon, "Research Articles", ra-color
 *
 * `label` overrides the default text (e.g. singular "Research Article");
 * `className` appends extra utilities (e.g. spacing like "mt-1").
 */
const VARIANTS = {
  'open-access': {
    colorClass: 'oa-color',
    icon: <img src="/assets/img/unlock-borderless.png" alt="" className="me-1" />,
    label: 'Open Access',
  },
  research: {
    colorClass: 'ra-color',
    icon: <BookOutlined className="me-1" />,
    label: 'Research Articles',
  },
};

export default function StatusPill({ variant = 'research', label, className = '' }) {
  const preset = VARIANTS[variant] ?? VARIANTS.research;
  const classes = ['sd-badge-pill-status', preset.colorClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {preset.icon}{label ?? preset.label}
    </span>
  );
}
