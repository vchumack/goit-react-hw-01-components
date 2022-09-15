import styled from '@emotion/styled';
import { setBgColor } from '../utils/setBgColor';

export const ItemFriends = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  gap: 10px;

  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(3)};

  border: ${props => `1px solid ${props.theme.colors.middleGrey}`};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => `5px 5px 5px ${props.theme.colors.grey}`};
`;

export const TextStatus = styled.span`
  display: block;
  border-radius: ${props => props.theme.radii.round};
  height: 20px;
  width: 20px;
  background-color: ${setBgColor};
`;
export const TextStatusTrue = styled.span`
  background-color: ${props => props.theme.colors.green};
`;
export const TextStatusFalse = styled.span`
  background-color: ${props => props.theme.colors.red};
`;

export const UserAvatar = styled.img`
  padding: ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => `inset 0 0 3px 4px ${props.theme.colors.purple}`};
`;

export const UserName = styled.p`
  font-size: ${props => `${props.theme.fontSizes.l}px`};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
