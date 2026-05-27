/* ALPS UI Kit — Footer */

const Footer = () => (
  <footer className="alps-footer">
    <Container>
      <div className="alps-footer__grid">
        <div className="alps-footer__brand">
          <img src="../../assets/alps-logo.png" alt="ALPS" />
          <p>Acadia Leadership Partners, Inc. Independent advisory for senior leaders since 1985.</p>
        </div>
        <div>
          <h4>Practice</h4>
          <ul><li><a href="#">Succession</a></li><li><a href="#">Board advisory</a></li><li><a href="#">Family enterprise</a></li></ul>
        </div>
        <div>
          <h4>Firm</h4>
          <ul><li><a href="#">Approach</a></li><li><a href="#">Team</a></li><li><a href="#">Perspectives</a></li><li><a href="#">Careers</a></li></ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul><li><a href="mailto:hello@acadialps.com">hello@acadialps.com</a></li><li>Bar Harbor · Boston · New York</li></ul>
        </div>
      </div>
      <div className="alps-footer__legal">
        <span>© 2026 Acadia Leadership Partners, Inc.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </Container>
  </footer>
);

window.Footer = Footer;
