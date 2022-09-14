import { getRandomHexColor } from '../utils/randomColor';
import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  ListStat,
  ItemStat,
  TextLabel,
  TextPercentage,
} from './Statistics.styled';

export function Statistics({ stats, title }) {
  console.log(stats);

  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}

      <ListStat>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemStat key={id} bgc={getRandomHexColor()}>
              <TextLabel>{label}</TextLabel>
              <TextPercentage>{percentage}%</TextPercentage>
            </ItemStat>
          );
        })}
      </ListStat>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
