import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const guardrails = ['SIMULATION_ONLY', 'ADVISORY_ONLY', 'HUMAN_FINAL'];

const doctrineSections = [
  {
    eyebrow: 'Book I',
    title: 'Foundations',
    text: 'Start with Genesis State, truth discipline, and human accountability.',
    to: '/docs/parts/01-part-i',
  },
  {
    eyebrow: 'Book II',
    title: 'Agent Architecture',
    text: 'Study the conceptual roles of JD, JM, JB, JG, and HUMAN review.',
    to: '/docs/parts/02-part-ii',
  },
  {
    eyebrow: 'Book III',
    title: 'Data & Truth',
    text: 'Follow event sourcing, timelines, and preservation of contradiction.',
    to: '/docs/parts/03-part-iii',
  },
  {
    eyebrow: 'Book IV',
    title: 'Guardian Doctrine',
    text: 'Review educational safety boundaries and Guardian layer concepts.',
    to: '/docs/parts/04-part-iv',
  },
];

const layers = [
  ['JD', 'Edge Reality Layer', '/docs/glossary#jd'],
  ['JM', 'Fusion Hypothesis Layer', '/docs/glossary#jm'],
  ['JB', 'Advisory Synthesis', '/docs/glossary#jb'],
  ['JG', 'Guardian Review', '/docs/glossary#jg'],
  ['HUMAN', 'HUMAN_FINAL judgement', '/docs/glossary#human_final'],
];

const learningPath = [
  ['1', 'Orient', 'Read the master overview and Part I.', '/docs/parts/00-j-trinity-c4isr'],
  ['2', 'Map the layers', 'Use the architecture page and diagrams together.', '/docs/parts/02-part-ii'],
  ['3', 'Study truth handling', 'Move into event timeline and AAR concepts.', '/docs/parts/03-part-iii'],
  ['4', 'Review boundaries', 'Close with Guardian doctrine and glossary terms.', '/docs/parts/04-part-iv'],
];

export default function Home() {
  return (
    <Layout
      title="Educational Doctrine Library"
      description="J-TRINITY C4ISR educational documentation website">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Professional doctrine library</p>
              <h1>J-TRINITY C4ISR</h1>
              <p className={styles.lede}>
                A reading-first tactical academic platform for studying the supplied J-TRINITY doctrine,
                architecture concepts, safety boundaries, and after-action learning patterns.
              </p>
              <div className={styles.guardrailRow} aria-label="Doctrine boundaries">
                {guardrails.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/docs/parts/00-j-trinity-c4isr">
                  Start Doctrine
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/diagrams">
                  Study Diagrams
                </Link>
              </div>
            </div>
            <aside className={styles.heroPanel} aria-label="Learning boundaries">
              <span>Learning Mode</span>
              <strong>Educational documentation only</strong>
              <p>No backend, no Firebase, no command workflow, no real-world control features.</p>
            </aside>
          </div>
        </section>

        <section className={styles.overview}>
          <div className={styles.sectionHeader}>
            <p>Doctrine Overview</p>
            <h2>Read the structure without losing the thread.</h2>
          </div>
          <div className={styles.sectionGrid}>
            {doctrineSections.map((section) => (
              <Link key={section.title} className={styles.sectionCard} to={section.to}>
                <small>{section.eyebrow}</small>
                <span>{section.title}</span>
                <p>{section.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.architecture}>
          <div className={styles.sectionHeader}>
            <p>Architecture Summary</p>
            <h2>Layered concepts, human-final boundaries.</h2>
          </div>
          <div className={styles.layerRail}>
            {layers.map(([code, label, to]) => (
              <Link key={code} className={styles.layerNode} to={to}>
                <strong>{code}</strong>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.learning}>
          <div className={styles.sectionHeader}>
            <p>Quick-Start Learning Path</p>
            <h2>A clean route through the doctrine.</h2>
          </div>
          <div className={styles.pathList}>
            {learningPath.map(([step, title, text, to]) => (
              <Link key={step} className={styles.pathItem} to={to}>
                <b>{step}</b>
                <span>{title}</span>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
