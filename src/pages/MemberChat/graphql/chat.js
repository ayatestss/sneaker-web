import { useQuery, gql } from "@apollo/client";

// Define your GraphQL query
const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      content
      sender
      recipient
    }
  }
`;

// Use the useQuery hook to execute the query
function Messages() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching messages: {error.message}</div>;
  }

  return (
    <div>
      {data.messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}
    </div>
  );
}
