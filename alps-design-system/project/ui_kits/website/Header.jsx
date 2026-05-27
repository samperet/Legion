/* ALPS UI Kit — Header (sticky nav) */
const { useState, useEffect } = React;

const Header = ({ onCTA, active = 'approach' }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'approach', label: 'Approach' },
    { id: 'practice', label: 'Practice' },
    { id: 'team', label: 'Team' },
    { id: 'perspectives', label: 'Perspectives' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`alps-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="alps-header__inner">
        <a href="#top" className="alps-header__brand">
          <img src="../../assets/alps-logo.png" alt="Acadia Leadership Partners" />
        </a>
        <nav className="alps-header__nav">
          {items.map(i => (
            <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'is-active' : ''}>{i.label}</a>
          ))}
        </nav>
        <Button variant="dark" size="sm" onClick={onCTA}>Schedule a Conversation</Button>
      </div>
    </header>
  );
};

window.Header = Header;
