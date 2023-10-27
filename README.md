# React on the server

Welcome to the "React on the Server" workshop!
This workshop is designed for mid-junior to senior React developers who want to explore server-side rendering with React.
In this repository, you will find the resources and materials you need to follow along with the workshop.

## Workshop Objectives

The primary objectives of this workshop are to:

1. Learn the basic of server-side rendering (SSR) with React.
2. Gain hands-on experience by working with sample code and practical exercises.

## Requirement

- NodeJS >= 18 - Installing this via [fnm](https://github.com/Schniz/fnm)

  ```sh
  curl -fsSL https://fnm.vercel.app/install | bash
  fnm use 18
  ```

- PNPM >= 8

  ```sh
  corepack enable
  corepace prepare pnpm@latest --activate
  ```

## Initial Setup

- Folk this repository and clone it to your computer
- run `pnpm install` to install the dependency
- Create [Vercel Account](https://vercel.com/docs/accounts/create-an-account) using Github
- [Create a project](https://vercel.com/docs/getting-started-with-vercel/import) and link it to the repository
- [Configure project Root Directory](https://vercel.com/docs/deployments/configure-a-build#root-directory) to be `04-myjournal-next`
- [Create Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres/quickstart#create-a-postgres-database) and link it to the project

## The Application: My Journal

Our application, "My Journal," is a straightforward web blog that offers simple functionality. Users can easily read and write blog posts, making it an accessible and user-friendly platform for sharing content.

## Repository structure

This repository contains one application writing in 5 difference styles.

By looking at these styles, you will learn the transition from building Web Application on the Server to Client and then back to Server

### 1. Multi-Page Application

Multi-Page Applications (MPAs) are the classic web model. They work by creating separate HTML pages for different sections. However, they come with a significant drawback - each click triggers a full page reload from the server, making the user experience slower and straining server resources.

### 2. Single Page Application

Single Page Applications (SPAs) are a modern web development trend, thanks to the growing power of consumer devices. SPAs load a single page initially, using JavaScript to update content seamlessly as users interact. While this approach boosts speed and interactivity, it introduced SEO challenges due to dynamic client-side content. Despite this, SPAs enable developers to create highly responsive web apps, a pivotal part of contemporary web development.

### 3. Server Side Rendering (SSR)

Server Side Rendering (SSR) is a technique that simplifies the rendering process by generating HTML on the server. It's similar to Multi-Page Applications (MPA), where HTML is pre-built on the server. SSR becomes crucial in addressing SEO challenges by ensuring that HTML is sent directly from the server rather than being generated on the client side. Fortunately, React provides us with the means to achieve server-side rendering, enhancing the discoverability and performance of web applications.

### 4. SSR with Next.js

In the modern era, there's no need to handcraft server-side rendering (SSR) solutions from scratch. Several production-grade frameworks for React SSR are readily available. In our case, we'll leverage Next.js, a powerful framework that simplifies and streamlines the process, making SSR implementation efficient and effective.

### 5. React Server Component

Enter React Server Components, a significant advancement in web development. These components aim to enhance the user and developer experience. Instead of rendering the entire HTML on the server and sending it in one go, React Server Components allow us to split the HTML into smaller chunks and send them separately. This approach leads to a more seamless and improved user experience (UX).

## Workshop format

The workshop is divided into two parts: the introduction and the challenge.

Modules 1 and 2 provide the introduction, helping you get started with Multi-Page Applications (MPA) and Single Page Applications (SPA).

In Modules 3 and 4, you'll face challenges that require hands-on experience. Some challenges will be done together, while others you'll tackle on your own. If you encounter difficulties, you can find solutions in the `__solution__` folder. These solutions serve as helpful guides or can be used for reference and copying when needed.
