import styled from '@emotion/styled';

export const DivProfile = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 300px;

  /* background-color: blueviolet; */
`;

export const DivDescription = styled.div`
  text-align: center;
  padding: 30px;

  background-color: white;
`;

export const UserAvatar = styled.img`
  margin-bottom: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const TextDescription = styled.p`
  margin-bottom: 15px;
  color: grey;
  font-size: 18px;
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;

  background-color: #f3f8f9;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3333%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #e8edf3;
`;

export const TextStats = styled.span`
  margin-bottom: 5px;
  color: grey;
  font-size: 16px;
`;

export const TextQuantity = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
