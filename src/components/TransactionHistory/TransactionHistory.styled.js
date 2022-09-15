import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(12)};
  width: 500px;
  font-size: ${props => `${props.theme.fontSizes.s}px`};
  border-collapse: collapse;
  text-align: center;
`;

export const ThTable = styled.th`
  background: ${props => props.theme.colors.turquoise};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  border-top-left-radius: ${props => props.theme.radii.middle};
  border-top-right-radius: ${props => props.theme.radii.middle};
`;

export const TrTable = styled.tr`
  background: ${props =>
    props.index % 2 === 1
      ? `${props.theme.colors.middleGrey}`
      : `${props.theme.colors.white}`};
  border-bottom: ${props => `1px solid ${props.theme.colors.turquoise}`};
`;

export const TdTable = styled.td`
  padding: ${props => props.theme.spacing(3)};
  border: ${props => `0.5px solid ${props.theme.colors.turquoise}`}; ;
`;
