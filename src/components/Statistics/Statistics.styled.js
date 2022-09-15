import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${props => props.theme.spacing(12)};
  width: 400px;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  padding-top: ${props => props.theme.spacing(7)};
  padding-bottom: ${props => props.theme.spacing(7)};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.grey};
`;

export const ListStat = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;

  /* background-color: burlywood; */
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3333%;
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  background-color: ${prop => prop.bgc};
`;

export const TextLabel = styled.span`
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: ${props => `${props.theme.fontSizes.s}px`};
  color: ${props => props.theme.colors.white};
`;

export const TextPercentage = styled.span`
  font-size: ${props => `${props.theme.fontSizes.m}px`};
  color: ${props => props.theme.colors.white};
`;
