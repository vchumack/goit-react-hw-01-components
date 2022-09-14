import PropTypes from 'prop-types';
import {
  DivProfile,
  DivDescription,
  ListStats,
  UserName,
  UserAvatar,
  TextDescription,
  ItemStats,
  TextStats,
  TextQuantity,
} from './Profile.styled';

export function Profile(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <DivProfile>
      <DivDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TextDescription>@{tag}</TextDescription>
        <TextDescription>{location}</TextDescription>
      </DivDescription>

      <ListStats>
        <ItemStats>
          <TextStats>Followers</TextStats>
          <TextQuantity>{followers}</TextQuantity>
        </ItemStats>
        <ItemStats>
          <TextStats>Views</TextStats>
          <TextQuantity>{views}</TextQuantity>
        </ItemStats>
        <ItemStats>
          <TextStats>Likes</TextStats>
          <TextQuantity>{likes}</TextQuantity>
        </ItemStats>
      </ListStats>
    </DivProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
