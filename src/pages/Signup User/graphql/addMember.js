import { gql } from '@apollo/client';

export const CREATE_MEMBER = gql`
  mutation CreateMember($data: CreateMemberInput!) {
    createMember(data: $data) {
      id
    }
  }
`;
