import { Container } from '../Container';
import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';
import user from '../Profile/user.json';
import arrStats from '../Statistics/data.json';
import arrFriends from '../FriendList/friends.json';
import arrTransactions from "../TransactionHistory/transactions.json";


export const App = () => {
  return (
    <Container>
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
       
      <Statistics title="Upload stats" stats={arrStats} />
      <FriendList friends={arrFriends} />
      <TransactionHistory transactions={arrTransactions}
      />

    </Container>
  );
};
