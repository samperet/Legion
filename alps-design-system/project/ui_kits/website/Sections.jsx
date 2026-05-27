/* ALPS UI Kit — Section components */

/* ---------- Approach + Practice ---------- */
const ApproachSection = () => (
  <section className="alps-section" id="approach">
    <Container>
      <div className="alps-two-col">
        <div>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="alps-h2">We do not run playbooks.<br/>We read the room.</h2>
        </div>
        <div>
          <p className="alps-lede">
            Every engagement begins with listening — to the principal, to the
            board, to the people in the building. Only then do we propose a path.
          </p>
          <p style={{ marginTop: 18, color: 'var(--alps-slate)' }}>
            The work is plain‑spoken and confidential. We bring four decades of
            operating experience across consumer goods, industrials, and family
            enterprise, and we use it sparingly — the right counsel at the right
            moment, never the loudest voice in the room.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

const practices = [
  { eyebrow: 'Practice', title: 'Succession planning',  body: 'For founders and family principals approaching the next chapter. We structure the handoff and protect the legacy.' },
  { eyebrow: 'Practice', title: 'Board advisory',       body: 'Independent counsel for boards navigating CEO transition, M&A, or strategic reset.', featured: true },
  { eyebrow: 'Practice', title: 'Family enterprise',    body: 'Multi‑generational businesses balancing ownership, governance, and the next generation\u2019s ambitions.' },
];

const PracticeGrid = () => (
  <section className="alps-section alps-section--fog" id="practice">
    <Container>
      <Eyebrow>Practice areas</Eyebrow>
      <h2 className="alps-h2" style={{ marginTop: 8, marginBottom: 48, maxWidth: 720 }}>
        Three practice areas. One operating philosophy.
      </h2>
      <div className="alps-grid-3">
        {practices.map((p, i) => (
          <Card key={i} featured={p.featured}>
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h3 className="alps-h3">{p.title}</h3>
            <p>{p.body}</p>
            <a href="#" className="alps-link">Read more <span>→</span></a>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- Stat block ---------- */
const StatBlock = () => (
  <section className="alps-section alps-section--navy">
    <Container>
      <div className="alps-stats">
        <div><span className="alps-stat__num">40<small>+</small></span><span className="alps-stat__lbl">Years of operating experience among partners</span></div>
        <div><span className="alps-stat__num">120</span><span className="alps-stat__lbl">Engagements completed since 1985</span></div>
        <div><span className="alps-stat__num">3</span><span className="alps-stat__lbl">Offices &mdash; Bar Harbor, Boston, New York</span></div>
      </div>
    </Container>
  </section>
);

/* ---------- Team ---------- */
const team = [
  { name: 'Margaret Holloway',   role: 'Founding Partner',   bio: 'Former CEO, Holloway Industries. Joined ALPS in 1998.' },
  { name: 'James A. Whitcombe',  role: 'Senior Advisor',      bio: 'Forty years across consumer goods and private equity.' },
  { name: 'Eleanor R. Park',     role: 'Partner',             bio: 'Specializes in family enterprise and generational handoff.' },
  { name: 'David K. Sutherland', role: 'Partner, Board Practice', bio: 'Led restructurings at three Fortune 500 boards.' },
];

const TeamRow = () => (
  <section className="alps-section" id="team">
    <Container>
      <div className="alps-section__head">
        <div>
          <Eyebrow>Partners</Eyebrow>
          <h2 className="alps-h2">A small, deeply experienced bench.</h2>
        </div>
        <a href="#" className="alps-link">See the full team <span>→</span></a>
      </div>
      <div className="alps-team-grid">
        {team.map((t, i) => (
          <div key={i} className="alps-team-card">
            <image-slot id={`team-${i}`} shape="rect" placeholder={`Portrait of ${t.name}`} style={{ width: '100%', aspectRatio: '4 / 5' }}></image-slot>
            <h4>{t.name}</h4>
            <span className="alps-team-card__role">{t.role}</span>
            <p>{t.bio}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- Quote ---------- */
const QuoteBlock = () => (
  <section className="alps-section alps-section--fog">
    <Container>
      <figure className="alps-quote">
        <span className="alps-quote__mark">“</span>
        <blockquote>
          ALPS sat with our board for ninety days before they offered a single
          opinion. When the recommendation came, it was the right one — and it
          was ours, not theirs.
        </blockquote>
        <figcaption>
          <strong>Robert Kessler</strong><span>Chair, Kessler Maritime · Engagement 2023</span>
        </figcaption>
      </figure>
    </Container>
  </section>
);

/* ---------- Perspectives ---------- */
const perspectives = [
  { date: 'Apr 2026', kind: 'Letter',  title: 'On choosing a successor before the search begins',  read: '6 min read' },
  { date: 'Feb 2026', kind: 'Memo',    title: 'Three questions a board should ask before the offsite', read: '4 min read' },
  { date: 'Dec 2025', kind: 'Essay',   title: 'The quiet handoff: succession in second‑generation family firms', read: '11 min read' },
  { date: 'Sep 2025', kind: 'Letter',  title: 'When experience is a liability', read: '5 min read' },
];

const PerspectivesList = () => (
  <section className="alps-section" id="perspectives">
    <Container>
      <div className="alps-section__head">
        <div>
          <Eyebrow>Perspectives</Eyebrow>
          <h2 className="alps-h2">Letters, memos, and the occasional essay.</h2>
        </div>
        <a href="#" className="alps-link">All perspectives <span>→</span></a>
      </div>
      <ul className="alps-perspectives">
        {perspectives.map((p, i) => (
          <li key={i}>
            <div className="alps-perspectives__meta">
              <span>{p.date}</span>
              <span className="alps-chip">{p.kind}</span>
            </div>
            <a href="#" className="alps-perspectives__title">{p.title}</a>
            <span className="alps-perspectives__read">{p.read}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/* ---------- Contact ---------- */
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const send = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="alps-section alps-section--navy" id="contact">
      <Container>
        <div className="alps-contact">
          <div className="alps-contact__left">
            <Eyebrow color="#7BB8DC">Begin a conversation</Eyebrow>
            <h2 className="alps-h2" style={{ color: '#fff', marginTop: 8 }}>
              Tell us what you&rsquo;re working through.<br/>We&rsquo;ll tell you whether we can help.
            </h2>
            <ul className="alps-contact__meta">
              <li><strong>Inquiries</strong><a href="mailto:hello@acadialps.com">hello@acadialps.com</a></li>
              <li><strong>Bar Harbor</strong>23 Main Street, Bar Harbor, ME</li>
              <li><strong>Response</strong>Within two business days</li>
            </ul>
          </div>
          <form className="alps-contact__form" onSubmit={send}>
            {sent ? (
              <div className="alps-contact__sent">
                <h3>Thank you.</h3>
                <p>We&rsquo;ll be in touch within two business days.</p>
              </div>
            ) : (
              <>
                <Field label="Full name" value={name} onChange={e => setName(e.target.value)} placeholder="" />
                <Field label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@firm.com" />
                <Field label="How can we help?" multiline value={msg} onChange={e => setMsg(e.target.value)} placeholder="A few sentences is enough." help="All correspondence is held in strict confidence." />
                <Button variant="primary">Send</Button>
              </>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

Object.assign(window, { ApproachSection, PracticeGrid, StatBlock, TeamRow, QuoteBlock, PerspectivesList, ContactSection });
