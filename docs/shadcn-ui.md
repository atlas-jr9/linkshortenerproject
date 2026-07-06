# shadcn UI Component Rules

## Purpose
All UI in this app must use the existing shadcn/ui component library. Do not invent or add custom UI components unless a shadcn component is unavailable and a built-in component cannot be adapted.

## Rules
- Use `shadcn/ui` components for buttons, forms, cards, modals, inputs, typography, layouts, and other interface elements.
- Do not create new custom component primitives for UI elements that can be served by shadcn components.
- Prefer composition of shadcn components over custom wrappers.
- Use path aliases when importing shadcn components and project utilities, e.g. `@/components/ui/Button`.
- Keep UI code consistent with shadcn naming and structure.
- If a required visual pattern is not covered by an existing shadcn component, extend it through composition with shadcn primitives rather than creating a separate custom component library.

## Guidance
- Reuse existing shadcn UI components already present in `components/ui/` before adding anything new.
- Avoid homegrown UI components for common patterns such as forms, buttons, dialogs, and cards.
- When building new pages or features, check `components/ui/` and the project’s shadcn components first.
- Favor `cn()` from `lib/utils.ts` for conditional class names on shadcn component wrappers.

## Why
This rule ensures visual consistency, keeps the UI maintainable, and avoids unnecessary custom component drift in this app.
