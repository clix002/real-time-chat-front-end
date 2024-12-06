import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

export const GET_MESSAGES = gql`
  query MessageByUser($receiverId: Int) {
    messageByUser(receiverId: $receiverId) {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;
