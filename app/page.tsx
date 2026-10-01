import CopyEmail from "@/components/CopyEmail";
import { Avatar, Spotlight, Typing } from "@/components/FX";
import d from "@/data.json";

const Chips = ({ items }: { items: string[] }) => (
  <div className="chips">{items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
);

export default function Home() {
  const allSkills = d.skills.flatMap((s) => s.items);
  return (
    <>
      <Spotlight />
      <div className="aurora" aria-hidden />
      <nav className="nav" aria-label="Sections">
        {["about", "skills", "projects", "experience", "education", "certifications", "contact"].map((s) => (
          <a key={s} href={`#${s}`}>{s[0].toUpperCase() + s.slice(1)}</a>
        ))}
      </nav>

      <main>
        <section className="hero" id="about">
          <Avatar src={d.photo} name={d.name} />
          <p className="muted">Hi, I&apos;m</p>
          <h1>{d.name}</h1>
          <p className="role"><Typing words={d.roles} /></p>
          <p className="lead">{d.summary}</p>
          <div className="row">
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
          <div className="chips">{d.links.map((l) => <a key={l.label} className="chip big" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
        </section>

        <div className="marquee" aria-hidden>
          <div className="track">{[...allSkills, ...allSkills].map((s, i) => <span key={i}>{s}</span>)}</div>
        </div>

        <section className="stats">
          {d.stats.map((s) => (
            <div key={s.label} className="card stat"><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </section>

        <section id="skills">
          <h2>Tech stack</h2>
          <div className="grid">
            {d.skills.map((s) => (
              <div key={s.group} className="card"><h3>{s.group}</h3><Chips items={s.items} /></div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid two">
            {d.projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <Chips items={p.tech} />
                <div className="row left">
                  <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live demo</a>
                  <a className="btn" href={p.code} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="stack">
            {d.experience.map((e) => (
              <article key={e.title} className="card">
                <div className="split"><h3>{e.title}</h3><span className="chip">{e.when}</span></div>
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="stack">
            {d.education.map((e) => (
              <article key={e.title} className="card">
                <div className="split"><h3>{e.title}</h3><span className="chip">{e.when}</span></div>
                <p>{e.where}</p>
                <p className="muted">{e.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <div className="grid two">
            {d.certGroups.map((g) => {
              const items = g.items as (string | { t: string; by: string; when?: string })[];
              const names = items.filter((x): x is string => typeof x === "string");
              const full = items.filter((x): x is { t: string; by: string; when?: string } => typeof x !== "string");
              return (
                <div key={g.group} className="card">
                  <div className="split"><h3>{g.group}</h3><span className="chip">{items.length}</span></div>
                  {names.length > 0 && <Chips items={names} />}
                  {full.length > 0 && (
                    <ul className="cl">
                      {full.map((c) => (
                        <li key={c.t}><b>{c.t}</b><span>{c.by}{c.when ? `, ${c.when}` : ""}</span></li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2>Leadership and activities</h2>
          <div className="grid two">
            {d.leadership.map((l) => (
              <article key={l.title} className="card">
                <h3>{l.title}</h3><p className="muted">{l.where}</p><p>{l.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="center">
          <h2>Let&apos;s build something together</h2>
          <p className="lead">I&apos;m open to internships and entry-level roles. Based in {d.location}.</p>
          <div className="row">
            <a className="btn primary" href={`mailto:${d.email}`}>Email me</a>
            <CopyEmail email={d.email} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {d.name}</span>
        <div className="chips">{d.links.map((l) => <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
      </footer>
    </>
  );
}
