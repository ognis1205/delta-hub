DeltaHub
==============================

<p float="left" align="center">
  <img src="./dev/images/screen.gif" width="450px">
</p>

A platform and cloud-based service for data sharing based on delta-sharing-rs using Next.js and TypeScript.

DeltaHub Configuration
==============================

| Name                     | Environment Variable   | Required | Description                                                                      |
|:------------------------:|:----------------------:|:--------:|----------------------------------------------------------------------------------|
| `nextauth_url`           | NEXTAUTH_URL           | yes      | Your canonical URL                                                               |
| `nextauth_secret`        | NEXTAUTH_SECRET        | yes      | Your NextAuth JWT encryption secret                                              |
| `google_client_id`       | GOOGLE_CLIENT_ID       | yes      | Google API client ID for OIDC                                                    |
| `google_client_secret`   | GOOGLE_CLIENT_SECRET   | yes      | Google API client secret for OIDC                                                |
| `github_client_id`       | GITHUB_CLIENT_ID       | yes      | GitHub API client ID for OIDC                                                    |
| `github_client_secret`   | GITHUB_CLIENT_SECRET   | yes      | GitHub API client secret for OIDC                                                |
| `delta_sharing_base_url` | DELTA_SHARING_BASE_URL | yes      | Delta Sharing RS Backend URL                                                     |

Obtaining Authentication Credentials
==============================

To use Google's OAuth 2.0 with Delta Catalog via NextAuth, you will need Google's OAuth 2.0 authentication credentials, which include a client ID and client secret. Here is the process for obtaining them:

1. Access the Google Developer Console.
2. Create a new project.
3. Create the OAuth consent screen.
4. Register your application and obtain authentication credentials (client ID and client secret).

To use GitHub's OAuth 2.0 with Delta Catalog via NextAuth, you will need GitHub's OAuth 2.0 authentication credentials, which include a client ID and client secret. Here is the process for obtaining them:

1. Access the GitHub Developer Settings.
2. Create a new OAuth App.
3. Create the OAuth consent screen.
4. Register your application and obtain authentication credentials (client ID and client secret).

Getting the JWT Secret
==============================

NextAuth uses JWT (JSON Web Tokens) to manage sessions. The JWT secret is used for signing JWTs. It should be a random string.
The following example demonstrates how to generate a JWT secret using the `openssl` command.

```bash
$ openssl rand -base64 32
IHPcQI71tUBPOJ7jxkRhjKRv7Ak5nvnz9xCZEPBeN8U=
```
