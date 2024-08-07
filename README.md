# next-crud-snippets

A light and smart next.js application for CRUD on Snippets

## Specs

- Prisma to instantiate a SQlite database
- Next.js
- Typescript
- Next "src" folder structure

## Server Actions

The key to understand here is that some code is on our server side and some are on the client side.

On normal React.js applications, server actions would be structured like the following image:
![alt text](image.png)

On Next.js applications, things are way different:
![alt text](image-1.png)

Taking this app as an example of what happens on the background and how next.js handle data:
![alt text](image-2.png)

## Components (server and client)

### Server component

This kind of component bends rules of traditional components.

Using this, we can probably achieve better performance + UX!.

By default, all next.js components are `server sided`.

We can use async/await. Don´t need useState or useEffect to do `data fetching`.

Limitations:

- Can `not`use any king of hook
- Can `not` assign any event handlers


### Client component

Essentially the same kind of React components that are used on React applications.

All the usual rules of components.

Can use hooks, event handlers, etc.

On `Next.js`, to use a client component, we need to use a special string: `"use client"` on top of our component.

Limitations:

- Can `not` show a Server Component (except one case)

Recomendation on using a client component:

- You need to use hooks
- You need to use event handlers

Even though this kind of component tells us that is directly related to the client, when user makes a request to the 
server, client components do get rendered one time on the server, then html is formed and sent to the client as a 
server response.

## Special file names

On Next.js applications, we have some special file names reserved for special purposes.

![alt text](image-3.png)

## Rendering a client component inside a server side component

![alt text](image-4.png)

The solution for the edit page is as follows:

![alt text](image-5.png)

### Server action inside client components

![alt text](image-6.png)

Ok, we already know how and why to use `server actions` on next applications, but here we get a major important
rule when working with client components:

`Server actions cannot be defined in client components`

![alt text](image-7.png)

There are two ways to deal with this situation:

#### Passing a server action through props 

This way, the parent component, which must be a server component, passes through props the action. Pretty much like a 
normal react component behavior.

#### Exporting the action from a isolated file

Using this option, we have the bennefit of sharing this action through all our application, which is hosted on an 
isolated file.

This way we must use the string `"use server"` just one single time on the top of the file, and thats it.

### Using a server action 

There are many different ways to use a server action inside a client component. Very interesting solutions are:

#### Using bind of the action itself among componenet data (state...)

There is a huge benefit. Form will work even if the client can´t run javascript (big companies, government)

#### Using async await and event handlers

On this solution, we don´t have to worry about the bind function and it is closer to a react normal behavior.

## Handling errors

