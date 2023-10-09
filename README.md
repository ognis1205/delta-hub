This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Delta Catalog Configuration
==============================

| Name                   | Environment Variable | Required | Description                                                                      |
|:----------------------:|:--------------------:|:--------:|----------------------------------------------------------------------------------|
| `nextauth_url`         | NEXTAUTH_URL         | yes      | Your canonical URL                                                               |
| `nextauth_secret`      | NEXTAUTH_SECRET      | yes      | Your NextAuth JWT encryption secret                                              |
| `google_client_id`     | GOOGLE_CLIENT_ID     | yes      | Google API client ID for OIDC                                                    |
| `google_client_secret` | GOOGLE_CLIENT_SECRET | yes      | Google API client secret for OIDC                                                |

Obtaining Authentication Credentials
==============================

To use Google's OAuth 2.0 with Delta Catalog via NextAuth, you will need Google's OAuth 2.0 authentication credentials, which include a client ID and client secret. Here is the process for obtaining them:

1. Access the Google Developer Console.
2. Agree to the usage of Google Cloud.
3. Create a new project.
4. Create the OAuth consent screen.
5. Register your application and obtain authentication credentials (client ID and client secret).

Getting the JWT Secret
==============================

NextAuth uses JWT (JSON Web Tokens) to manage sessions. The JWT secret is used for signing JWTs. It should be a random string.
The following example demonstrates how to generate a JWT secret using the `openssl` command.

```bash
$ openssl rand -base64 32
IHPcQI71tUBPOJ7jxkRhjKRv7Ak5nvnz9xCZEPBeN8U=
```
