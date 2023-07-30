import { gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $confirmPassword: String!) {
    registerUser(email: $email, password: $password, confirmPassword: $confirmPassword) {
      id
      email
    }
  }
`;

export default REGISTER_USER;