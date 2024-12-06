import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation SignupUser($userNew: UserInput) {
    signupUser(userNew: $userNew) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation SigninUser($userSignin: UserSignin) {
    signinUser(userSignin: $userSignin) {
      token
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation CreateMessage($text: String, $receiverId: Int) {
    createMessage(text: $text, receiverId: $receiverId) {
      text
      senderId
      receiverId
      id
      createdAt
    }
  }
`;
