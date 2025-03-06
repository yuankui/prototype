# CLAUDE.md for Prototype

## Build Commands
- `npm run dev` - Start development server with turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run Prisma migrations
- `npm run prisma:studio` - Open Prisma Studio

## Code Style

### TypeScript
- Strict mode enabled
- Use explicit types for function parameters and return values
- Use path alias: import from `@/*` instead of relative paths

### Formatting
- Use Prettier with: semi=true, singleQuote=false, tabWidth=2, trailingComma=all, printWidth=100
- No trailing spaces
- Use ES2017 syntax features

### Components
- Use functional components with explicit typing
- Use named exports for components
- Prefer small, focused components

### Error Handling
- Use try/catch for async operations
- Handle Promise rejections explicitly
- Provide informative error messages

### Imports
- Group imports: React first, external libs, internal modules, styles
- Use absolute imports with `@/*` path alias