import React from "react";
import { Provider, createClient, Query } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql"
});

const ALL_BOOKS_QUERY = `
{
  books {
    id
    title
    author {
      name
    }
  }
}`;

const Library = () => (
  <Provider value={client}>
    <Query query={ALL_BOOKS_QUERY}>
      {({ fetching, data }) => (
        <div>
          <h1>{`The library is ${fetching ? "loading..." : "open"}`}</h1>
          {data &&
            data.books.map(book => (
              <p key={book.id}>
                <i>{book.title}</i> by {book.author.name}
              </p>
            ))}
        </div>
      )}
    </Query>
  </Provider>
);

export default Library;
