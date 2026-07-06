# Authentication Guidelines

## Clerk is the only authentication method
- All authentication in this app must be handled through Clerk.
- Do not add custom auth flows, homegrown session logic, or any other auth providers.
- Use Clerk components and server helpers from `@clerk/nextjs`.

## Protected route requirements
- `/dashboard` is a protected route.
- Users must be logged in to access `/dashboard`.
- If a user is not authenticated, redirect them to sign in via Clerk.
- If a user is already logged in and tries to access the homepage (`/`), redirect them to `/dashboard`.

## Sign-in and sign-up behavior
- Clerk sign in and sign up should always launch as a modal when triggered from the UI.
- Use `SignInButton` and `SignUpButton` with `mode="modal"` wherever sign-in or sign-up actions appear.
- The existing Clerk route pages `/sign-in` and `/sign-up` may still exist for path-based routing, but user-facing actions should prefer modal launch.

## Implementation guidance
- Wrap the app with `ClerkProvider` in `app/layout.tsx`.
- Use `Show` or Clerk auth state helpers to render sign-in/sign-up controls conditionally.
- For protected pages, use Clerk server-side auth helpers or middleware to enforce login before rendering.
- Keep auth logic centralized around Clerk and avoid mixing other auth frameworks or custom token handling.
