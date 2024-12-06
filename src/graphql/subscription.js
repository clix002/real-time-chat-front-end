import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
  subscription Subscription {
    messageCreated {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;
