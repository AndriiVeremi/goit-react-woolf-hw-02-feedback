import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h1>{title}</h1> 
      <div>{children}</div>
    </div>
  );
};
