import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  width: 400px;
  background-color: white;
`;

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: grey;
`;

export const ListStat = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;

  /* background-color: burlywood; */
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3333%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${prop => prop.bgc};
`;

export const TextLabel = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  color: white;
`;

export const TextPercentage = styled.span`
  font-size: 20px;
  color: white;
`;
