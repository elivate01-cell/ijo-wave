import { useState } from 'react';

const SHOWS = [
  ['SAT 14 NOV', '“Lagoon Currents”', 'Muson Centre, Lagos', '₦8,500'],
  ['SAT 05 DEC', '“Keke Rhythms” street edition', 'Freedom Park, Lagos', '₦5,000'],
  ['FRI 19 DEC', '“Harmattan Wind” premiere', 'Nicon Hall, Abuja', '₦10,000'],
  ['SAT 10 JAN', '“Ojude Riddim”', 'June 12 Cultural Centre, Abeokuta', '₦6,500'],
] as const;

const CLASSES = [
  { name: 'Afro-fusion', when: 'Tue & Thu · 6 PM', level: 'Open', price: '₦6,000/class', hue: '#e23b8e' },
  { name: 'Contemporary', when: 'Wed · 7 PM', level: 'Intermediate', price: '₦7,000/class', hue: '#17131f' },
  { name: 'Traditional Roots', when: 'Sat · 10 AM', level: 'Open', price: '₦5,500/class', hue: '#f0a431' },
  { name: 'Kids Company', when: 'Sat · 12 PM', level: 'Ages 6–11', price: '₦4,000/class', hue: '#2f9e8f' },
  { name: 'Pro Training', when: 'Mon–Fri · 8 AM', level: 'Audition only', price: '₦45,000/month', hue: '#5b48d1' },
] as const;

const STATS = [
  ['18', 'dancers on contract'],
  ['3', 'touring troupes'],
  ['41k', 'audience seats filled, 2025'],
  ['12', 'original choreographies'],
] as const;
export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="iw">
      <div className="top">
        <a className="brand" href="#top">IJO<em>WAVE</em></a>
        <nav className="tnav">
          <a href="#shows">Shows</a><a href="#classes">Classes</a><a href="#gallery">Gallery</a><a href="#audition">Audition</a>
        </nav>
        <a className="tcta" href="#audition">Join the company</a>
      </div>
      <header className="hero" id="top">
        <div className="hero-skew" aria-hidden="true"><b className="sk1" /><b className="sk2" /></div>
        <div className="hero-in">
          <p className="kick">Lagos · Dance Company · Est. 2016</p>
          <h1>Dance that moves the city first.</h1>
          <p className="lede">We stage what the streets already hum: keke horns, lagoon wind, owambe drums — carried by eighteen dancers who rehearse above a printing press in Yaba.</p>
          <div className="hbtns">
            <a className="btn solid" href="#shows">Book a show</a>
            <a className="btn ghost" href="#classes">Drop into a class</a>
          </div>
        </div>
      </header>
      <section className="stats">
        <div className="stats-in">
          {STATS.map((s) => <div className="stat" key={s[0]}><b>{s[0]}</b><span>{s[1]}</span></div>)}
        </div>
      </section>
      <section className="shows" id="shows">
        <div className="shead2"><h2>On stage this season</h2><p className="kick">TICKETS AT THE DOOR &amp; ONLINE</p></div>
        {SHOWS.map((s) => (
          <div className="showrow" key={s[0] + s[1]}>
            <span className="sdate">{s[0]}</span>
            <span className="sname">{s[1]}</span>
            <span className="svenue">{s[2]}</span>
            <a className="stkt" href="#shows">{s[3]}</a>
          </div>
        ))}
      </section>
      <section className="classes" id="classes">
        <div className="cls-head"><h2>Classes in the studio</h2><p>Drag → the rail scrolls sideways, like the choreography.</p></div>
        <div className="rail">
          {CLASSES.map((c) => (
            <article className="ccard" key={c.name}>
              <span className="chue" style={{ background: c.hue }} aria-hidden="true" />
              <h3>{c.name}</h3>
              <p className="cwhen">{c.when}</p>
              <p className="clevel">{c.level}</p>
              <p className="cprice">{c.price}</p>
              <a className="cjoin" href="#audition">Reserve a spot →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="g-head"><h2>Poster frames</h2><p>Stills from this season’s rehearsals.</p></div>
        <div className="ggrid">
          {[
            { h: 'linear-gradient(135deg,#e23b8e 0 55%,#17131f 55%)', cap: 'KEKE RHYTHMS · REHEARSAL 03' },
            { h: 'linear-gradient(135deg,#2f9e8f 0 40%,#f0a431 40%)', cap: 'LAGOON CURRENTS · DRESS RUN' },
            { h: 'linear-gradient(135deg,#17131f 0 30%,#e23b8e 30% 70%,#5b48d1 70%)', cap: 'HARMATTAN WIND · FINALE BLOCK' },
          ].map((g) => (
            <figure className="gframe" key={g.cap}>
              <div className="gfill" style={{ background: g.h }} aria-hidden="true" />
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="audition" id="audition">
        <div className="a-skew" aria-hidden="true" />
        <div className="a-in">
          <div>
            <p className="kick light">AUDITION CALL · JANUARY INTAKE</p>
            <h2>We are hiring five dancers.</h2>
            <p className="alede">No certificate needed. Bring two minutes of movement you believe in — barefoot is fine. Saturdays, 9 AM, Yaba studio.</p>
          </div>
          {sent ? (
            <div className="asent">You are on the audition list. Check your mail for the Saturday slot.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Full name<input required placeholder="Your name" /></label>
              <label>Age band<select required defaultValue="">
                <option value="" disabled>Choose</option>
                <option>Under 16</option><option>16–21</option><option>22–29</option><option>30+</option>
              </select></label>
              <label>Movement background<textarea rows={3} required placeholder="Street dance since 2019 · church drama team · no formal training" /></label>
              <button type="submit">Count me in</button>
            </form>
          )}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Ijo Wave Dance Company · Studio: 9 Herbert Macaulay Way, Yaba, Lagos.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}