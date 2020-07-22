import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import configureStore from "./redux/configureStore";
import UserList from "./components/users";
import PostList from "./components/posts";

// import './styles.css';

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "users posts";
  grid-gap: 20px;
`;
const UserListContainer = styled.section`
  grid-area: users;
`;
const PostListContainer = styled.section`
  grid-area: posts;
`;

function AppExample1() {
  return (
    <MainContainer>
      <UserListContainer>
        <h2>Users</h2>
        <UserList />
      </UserListContainer>
      <PostListContainer>
        <h2>Posts</h2>
        <PostList />
      </PostListContainer>
    </MainContainer>
  );
}

const store = configureStore();

const ReduxAppExample1 = () => <Provider store={store}>
  <AppExample1 />
</Provider>;

export default ReduxAppExample1;
