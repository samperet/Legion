/* ALPS UI Kit — Hero (deep navy block with arc motif) */

const Hero = ({ onPrimary, onSecondary }) => (
  <section className="alps-hero" id="top">
    <div className="alps-hero__photo" style={{ backgroundImage: 'url(../../assets/hero-alps.png)' }} />
    <div className="alps-hero__scrim" />
    <Container>
      <div className="alps-hero__inner">
        <Eyebrow color="#7BB8DC">Acadia Leadership Partners</Eyebrow>
        <h1 className="alps-hero__title">
          The summit is rarely<br/>reached alone.
        </h1>
        <p className="alps-hero__lede">
          Independent counsel for boards, founders, and chief executives
          navigating succession, growth, or the next ascent. Forty years of
          operating experience — one conversation at a time.
        </p>
        <div className="alps-hero__cta">
          <Button variant="primary" onClick={onPrimary}>Schedule a Conversation</Button>
          <Button variant="ghost-light" onClick={onSecondary}>Read our approach</Button>
        </div>
      </div>
    </Container>
    <div className="alps-hero__meta">
      <span>Est. 1985</span>
      <span>Bar Harbor · Boston · New York</span>
    </div>
  </section>
);

window.Hero = Hero;
