import styled from '@emotion/styled';
import { setBgColor } from '../utils/setBgColor';

export const ItemFriends = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  gap: 10px;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  border: 1px solid #e8edf3;
  background-color: white;
  box-shadow: 5px 5px 5px grey;
`;

export const TextStatus = styled.span`
  display: block;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: ${setBgColor};
`;
export const TextStatusTrue = styled.span`
  background-color: rgba(37, 158, 37, 0.621);
`;
export const TextStatusFalse = styled.span`
  background-color: rgba(165, 39, 39, 0.748);
`;

export const UserAvatar = styled.img`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #f6f8fa;
  box-shadow: inset 0 0 3px 4px hsla(271, 37%, 70%, 0.401);
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
