import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const ALL_BOOKS_QUERY = gql`
  {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

const Library = () => (
  <Query query={ALL_BOOKS_QUERY}>
    {({ loading, data }) => (
      <div>
        <h1>{`The library is ${loading ? "loading..." : "open"}`}</h1>
        {data.books &&
          data.books.map(book => (
            <p key={book.id}>
              <i>{book.title}</i> by {book.author.name}
            </p>
          ))}
      </div>
    )}
  </Query>
);

const WrappedLibrary = () => (
  <ApolloProvider client={client}>
    <Library />
  </ApolloProvider>
);

export default WrappedLibrary;
