import {ListStatistic, ItemStatistic} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, positive, total }) => {
  return (
    <ListStatistic>
      <ItemStatistic>Good: {good}</ItemStatistic>
      <ItemStatistic>Neutral: {neutral}</ItemStatistic>
      <ItemStatistic>Bad: {bad}</ItemStatistic>
      <ItemStatistic>Total: {total}</ItemStatistic>
      <ItemStatistic>Positive feedback: {positive}</ItemStatistic>     
    </ListStatistic>
  );
};
