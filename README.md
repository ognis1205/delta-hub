Delta Catalog Client
==============================

delta-catalog-ts is a TypeScript-based Delta Sharing client that includes administration functionality.
This is a work in progress, and many parts of the implementation are merely mock-ups [12/10/2023].

<p align="center">
  <img src="./dev/images/screen.gif" width="85%"/>
</p>

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
