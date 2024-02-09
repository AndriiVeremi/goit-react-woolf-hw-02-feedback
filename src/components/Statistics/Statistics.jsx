import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, positive, total }) => {
  return (
    <div>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Total: {positive}</p>     
    </div>
  );
};
