# Server Side Rendering

## Requirement

Read the requirement setup [here](../README.md#requirement)

## Initial Setup

- run `pnpm install` to install the dependency
- run `pnpm prisma db push` to initialize the database
- run `pnpm seed` to seed the database
- run `pnpm prisma generate` to generate [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)

## Start server

- run `pnpm start`
- visit http://localhost:4000

## First Challenge - Article List

After starting the server and visiting http://localhost:4000 to access the article list page, you'll see a user interface displaying a list of articles. However, if you examine the Network Console and check the network response, you'll notice that there's a missing piece - the HTML responsible for showing the article list.

The reason behind this gap is that we're currently rendering React components on the client-side using ReactDOM. Your task is to change this approach. We want to render React components on the server, creating the HTML content that's needed to display the article list. This HTML will then be sent to the client for rendering using ReactDOM.

In simple terms, your goal is to make sure that React components are rendered on the server before reaching the client, which will result in a seamless display of the article list.

### Hint

The only files you will be editing are

```sh
src/app.js
src/client/articles.js
src/views/articles.ejs
```

## Second Challenge - Add Article

In this challenge, we're focusing on building the "Add Article" page, where you can create new articles. When you visit http://localhost:4000/add, you'll notice that the current page uses an EJS template editor instead of our desired React Component.

If you attempt to use the same solution as in the first challenge, you might run into an error. This is because React Components aren't always meant to be rendered on the server, especially when they rely on specific browser features, like geolocation.

Your task is to put your knowledge to use and render the React Component only on the client-side. This means making sure that the React Component works as expected while also handling any issues related to server and client-side rendering.

### Hint

Look at the initial implementation of the First Challenge.

The only files you will be editing are

```sh
src/app.js
src/client/add.js
src/views/add.ejs
```

## Third Challenge - Article Detail

In this third challenge, we're diving into the creation of the "Article Detail" page. After listing and adding new articles, it's time to provide users with a closer look at what each article entails.

Currently, the implementation utilizes an EJS template, similar to the second challenge. However, we want to leverage your knowledge gained from the First Challenge to render React Components on the server.

The twist here is that the React Component for the Article Detail Page employs `@tanstack/react-query` rather than solely receiving data via props. This offers you an opportunity to explore how this library handles Server-Side Rendering and enhances your understanding of server-side rendering complexities.

### Hint

Take a close look at the initial implementation from the First Challenge. Additionally, dive into the documentation on [prefetching](https://tanstack.com/query/v5/docs/react/guides/prefetching) and [Server-Side Rendering (SSR)](https://tanstack.com/query/v5/docs/react/guides/ssr)

While delving into these documents, it's natural to feel a bit overwhelmed. However, there's no need to worry. For our specific use case with @tanstack/react-query, the key concept you'll need to focus on for SSR is [setQueryData](https://tanstack.com/query/v5/docs/react/guides/prefetching#manually-priming-a-query).

The only files you will be editing are

```sh
src/app.js
src/client/articleId.js
src/views/articleId.ejs
```

## Bonus Challenge - Edit Article

Upon completing both the Add Article and Article Detail pages, you should now possess a solid understanding of how to acquire and update data through Server-Side Rendering (SSR) and APIs. It's time to put this knowledge to the test by taking on the Edit Article Page. In this challenge, you'll combine and apply the skills you've acquired to construct this page. Utilizing your knowledge of retrieving data from the Article Detail page and updating articles with APIs from the Add Article page

There is not hint for this challenge.
