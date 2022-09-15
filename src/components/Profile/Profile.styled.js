import styled from '@emotion/styled';

export const DivProfile = styled.div`
  margin-top: ${props => props.theme.spacing(12)};
  margin-bottom: ${props => props.theme.spacing(12)};
  padding-top: ${props => props.theme.spacing(12)};
  margin-right: auto;
  margin-left: auto;
  width: 300px;

  /* background-color: blueviolet; */
`;

export const DivDescription = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(7)};

  background-color: ${props => props.theme.colors.white};
`;

export const UserAvatar = styled.img`
  margin-bottom: ${props => props.theme.spacing(5)};
  width: 130px;
  height: 130px;
  border-radius: ${props => props.theme.radii.round};
  border: ${props => `1px solid ${props.theme.colors.grey}`};
`;

export const UserName = styled.p`
  margin-bottom: ${props => props.theme.spacing(3)};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => `${props.theme.fontSizes.l}px`};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
`;

export const TextDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.grey};
  font-size: ${props => `${props.theme.fontSizes.m}px`};
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.lightGrey};
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3333%;
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.middleGrey}`};
`;

export const TextStats = styled.span`
  margin-bottom: ${props => props.theme.spacing()};
  color: ${props => props.theme.colors.grey};
  font-size: ${props => `${props.theme.fontSizes.m}px`};
`;

export const TextQuantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => `${props.theme.fontSizes.m}px`};
`;
