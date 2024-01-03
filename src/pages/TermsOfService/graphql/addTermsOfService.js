import { gql } from "@apollo/client";

export const CREATE_TOS = gql`
  mutation UpdateUserTos {
    updateUserTos {
      id
      acceptedTos
    }
  }
`;
