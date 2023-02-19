import { Profile } from "./Profile/Profile";
import user from '../user.json';
import { Statistics } from "./Statistics";
import data from "../data.json";
import { FriendList } from "./FriendList";
import friends from "../friends.json";
import { TransactionHistory } from "./TransactionHistory";
import transactions from "../transactions.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};
