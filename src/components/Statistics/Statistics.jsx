import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem, StatPercent } from './Statistics.styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <Container> 
            {title !== "" && <Title>{title}</Title>}
            <StatList>{stats.map(stat => {
                return <StatItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span>{stat.label}</span>
                    <StatPercent>{stat.percentage}%</StatPercent>
                </StatItem>
            }) }</StatList>
        </Container>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};