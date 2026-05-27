/* ALPS UI Kit — atoms (Button, Card, Field, Eyebrow, Arc, Container) */

const Container = ({ children, style, className = '' }) => (
  <div className={`alps-container ${className}`} style={style}>{children}</div>
);

const Eyebrow = ({ children, color }) => (
  <span className="alps-eyebrow" style={color ? { color } : undefined}>{children}</span>
);

const Button = ({ variant = 'primary', size = 'md', children, onClick, href, icon, iconRight = '→' }) => {
  const cls = `alps-btn alps-btn--${variant} alps-btn--${size}`;
  const inner = (
    <>
      {icon && <span className="alps-btn__icon">{icon}</span>}
      <span>{children}</span>
      {variant === 'ghost' && <span className="alps-btn__arrow">{iconRight}</span>}
    </>
  );
  return href
    ? <a className={cls} href={href} onClick={onClick}>{inner}</a>
    : <button className={cls} onClick={onClick}>{inner}</button>;
};

const Card = ({ featured = false, children, onClick }) => (
  <div className={`alps-card ${featured ? 'is-featured' : ''}`} onClick={onClick}>{children}</div>
);

const Field = ({ label, type = 'text', placeholder, value, onChange, multiline = false, help }) => (
  <div className="alps-field">
    <label>{label}</label>
    {multiline
      ? <textarea placeholder={placeholder} value={value} onChange={onChange} rows={4} />
      : <input type={type} placeholder={placeholder} value={value} onChange={onChange} />}
    {help && <span className="alps-field__help">{help}</span>}
  </div>
);

const Arc = ({ opacity = 0.18, color = '#2299CE', style }) => (
  <svg className="alps-arc" viewBox="0 0 1200 200" fill="none" stroke={color} strokeWidth="3"
       strokeLinecap="round" style={{ opacity, ...style }}>
    <path d="M0 180 C 200 40, 1000 40, 1200 180" />
  </svg>
);

const Icon = ({ name, size = 20, stroke = 1.5, color = 'currentColor' }) => (
  <i data-lucide={name} style={{ width: size, height: size, color, strokeWidth: stroke }}></i>
);

Object.assign(window, { Container, Eyebrow, Button, Card, Field, Arc, Icon });
