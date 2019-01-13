import React from "react";
import { Provider, Client, Connect, query } from "urql";

const client = new Client({
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
  <Provider client={client}>
    <Connect query={query(ALL_BOOKS_QUERY)}>
      {({ loaded, data }) => (
        <div>
          <h1>{`The library is ${loaded ? "open" : "loading..."}`}</h1>
          {data &&
            data.books.map(book => (
              <p key={book.id}>
                <i>{book.title}</i> by {book.author.name}
              </p>
            ))}
        </div>
      )}
    </Connect>
  </Provider>
);

export default Library;
