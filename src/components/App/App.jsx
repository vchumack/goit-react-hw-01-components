import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';
import user from '../Profile/user.json';
import arrStats from '../Statistics/data.json';
import arrFriends from '../FriendList/friends.json';
import arrTransactions from '../TransactionHistory/transactions.json';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box
      width="700px"
      pb={2}
      pt={2}
      ml="auto"
      mr="auto"
      mt={5}
      mb={5}
      bg="primaryBg"
    >
      <Box width="400px" pb={2} pt={2} ml="auto" mr="auto" mt={5} mb={5}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Box>
      <Box width="500px" pb={2} pt={5} ml="auto" mr="auto">
        <Statistics title="Upload stats" stats={arrStats} />
      </Box>
      <Box width="400px" pb={2} pt={5} ml="auto" mr="auto" mt={5} mb={5}>
        <FriendList friends={arrFriends} />
      </Box>
      <Box width="600px" pb={2} pt={5} ml="auto" mr="auto" mt={5} mb={5}>
        <TransactionHistory transactions={arrTransactions} />
      </Box>
    </Box>
  );
};
