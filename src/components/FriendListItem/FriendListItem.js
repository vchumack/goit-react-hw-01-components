import {
  ItemFriends,
  TextStatus,
  UserAvatar,
  UserName,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ItemFriends>
      <TextStatus isOnline={isOnline}>{isOnline}</TextStatus>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </ItemFriends>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
