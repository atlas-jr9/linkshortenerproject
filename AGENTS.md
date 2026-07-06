# Link Shortener Project - Agent Instructions

## Project Overview
This is a **Next.js 16** application for shortening and managing URLs with user authentication. The project combines modern web technologies for a robust, type-safe development experience.

### Key Technologies
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Frontend**: React 19 with Tailwind CSS 4
- **Database**: PostgreSQL (Neon serverless) with Drizzle ORM v1.0-rc
- **Authentication**: Clerk (OAuth provider)
- **UI Components**: shadcn/ui components
- **Styling**: Tailwind CSS v4 with design tokens
- **Package Manager**: npm

### Environment Setup
Required environment variables in `.env.local`:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `DATABASE_URL` - Neon PostgreSQL connection string (include ?sslmode=require)

---

## Coding Standards Documentation

All coding standards are documented in the `/docs` directory.
It is ABSOLUTELY MANDATORY to read the relevant individual `/docs/*.md` instruction file BEFORE generating ANY code. No code should be produced without reviewing the applicable `/docs` guidance first.

- See `/docs/authentication.md` for Clerk auth and protected-route rules.
- See `/docs/shadcn-ui.md` for UI component usage rules.

#
---

## Critical Rules for Agents

### ✅ DO:
- **Always use TypeScript** with strict types for all code
- **Use path aliases** (`@/...`) instead of relative paths
- **Create interfaces** for all props and data structures
- **Use `cn()` utility** from `lib/utils.ts` for conditional classes
- **Follow naming conventions** (PascalCase for components, camelCase for utilities)
- **Document public functions** with JSDoc comments
- **Handle errors explicitly** with try-catch blocks
- **Use server components** by default, only add `'use client'` when needed
- **Test for type safety** - no implicit `any` types
- **Check `/docs/` files** before implementing any feature

### ❌ DON'T:
- Don't use `any` type - use explicit types or `unknown` with type guards
- Don't create class components - use functional components only
- Don't use relative imports like `../../components/Button`
- Don't mix quote styles (use double quotes consistently)
- Don't add unnecessary dependencies - check existing packages first
- Don't commit environment variables - use `.env.local`
- Don't disable ESLint rules without justification
- Don't write non-testable code with side effects
- Don't ignore TypeScript errors or use `@ts-ignore`
- Don't skip the documentation - it contains important patterns

---

## Implementation Checklist

When implementing a feature, follow this checklist:

1. **Read Documentation**
   - [ ] Check relevant `/docs/` files for patterns
   - [ ] Review similar existing code in the project
   - [ ] Understand the feature requirements clearly

2. **Type Safety**
   - [ ] Define interfaces/types for all data
   - [ ] Use strict TypeScript typing
   - [ ] No implicit `any` types allowed

3. **File Organization**
   - [ ] Create files in correct directories
   - [ ] Follow naming conventions
   - [ ] Use path aliases for imports
   - [ ] Group related files logically

4. **Code Quality**
   - [ ] Write readable, self-documenting code
   - [ ] Add JSDoc comments for public APIs
   - [ ] Follow the formatting standards
   - [ ] Reuse existing utilities and components

5. **Component Patterns** (if creating components)
   - [ ] Define Props interface
   - [ ] Use composition over props
   - [ ] Implement proper error boundaries
   - [ ] Ensure accessibility

6. **Styling**
   - [ ] Use Tailwind classes only (no inline styles)
   - [ ] Use semantic color tokens
   - [ ] Use `cn()` for conditional classes
   - [ ] Test responsive variants

7. **Testing**
   - [ ] Code is testable (pure functions where possible)
   - [ ] External dependencies are mockable
   - [ ] Error cases are handled

8. **Database** (if using ORM)
   - [ ] Follow schema naming conventions
   - [ ] Use typed queries
   - [ ] Handle errors appropriately
   - [ ] Use relations for joins

---

## Project Structure Quick Reference

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (providers, styles)
│   ├── page.tsx            # Home page
│   ├── (auth)/             # Auth routes
│   ├── api/                # API endpoints
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # shadcn UI components
│   ├── features/           # Feature components
│   └── common/             # Shared components
├── db/                     # Database
│   ├── schema.ts           # Drizzle schema
│   └── index.ts            # DB client
├── lib/                    # Utilities
│   ├── utils.ts            # Helper functions
│   └── hooks/              # Custom hooks
├── docs/                   # **Coding standards (READ THESE)**
└── public/                 # Static assets
```

---

## Next.js 16 Critical Notes

<!-- BEGIN:nextjs-agent-rules -->
**This is NOT the Next.js you know** - version 16 has breaking changes. **Before writing any code:**
- Read the relevant guide in `node_modules/next/dist/docs/`
- Heed all deprecation notices
- Test thoroughly in development mode
- Refer to `/docs/nextjs-conventions.md` for this project's patterns
<!-- END:nextjs-agent-rules -->

---

## Common Tasks

### Creating a new component
1. Read [Component Structure & Patterns](docs/component-structure.md)
2. Create file in `components/` with PascalCase name
3. Define Props interface
4. Use `cn()` for classes
5. Export as named export

### Creating an API endpoint
1. Read [Next.js Conventions](docs/nextjs-conventions.md) - API Routes section
2. Create file in `app/api/` directory
3. Use named exports (GET, POST, etc.)
4. Return `Response` objects with proper status codes
5. Handle errors with try-catch

### Adding database functionality
1. Read [Database & ORM Standards](docs/database-orm.md)
2. Define schema in `db/schema.ts` if needed
3. Use `db` client from `db/index.ts`
4. Follow query patterns from documentation
5. Handle errors appropriately

### Styling components
1. Read [Styling & Tailwind CSS](docs/styling-tailwind.md)
2. Use only Tailwind classes (no inline styles)
3. Use semantic color tokens
4. Use `cn()` for conditional classes
5. Test responsive variants

---

## Questions or Uncertainties?

Always refer to:
1. The specific `/docs/` file for your task
2. Similar code patterns in the existing codebase
3. Next.js documentation (v16+) in node_modules
4. Type safety and TypeScript compiler errors
