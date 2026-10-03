import styles from './SectionHeading.module.css';

type Props = {
  id?: string | undefined;
  title: string;
  intro?: string | undefined;
  onDark?: boolean | undefined;
  className?: string | undefined;
};

export function SectionHeading({ id, title, intro, onDark, className }: Props) {
  return (
    <div className={[styles.heading, onDark && styles.onDark, className].filter(Boolean).join(' ')}>
      <h2 id={id}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}
