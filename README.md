# Stack Learner Monorepo

This is the monorepo for Stack Learner's applications and packages. The project uses pnpm as the package manager and Turborepo for build system orchestration.

## Prerequisites

- Node.js >= 20
- pnpm 9.0.0 or higher

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd sl_monorepo
```

2. Install dependencies:
```bash
pnpm i
```

This command will:
- Install all project dependencies
- Set up Git hooks using Husky
- Configure the development environment

## Available Commands

- `pnpm i`: Install dependencies and prepare the development environment
- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications and packages
- `pnpm start`: Start all applications in production mode
- `pnpm test`: Run tests across all packages
- `pnpm lint`: Run linting across all packages
- `pnpm lint:fix`: Fix linting issues across all packages
- `pnpm format`: Format all files using Prettier
- `pnpm clean`: Clean build artifacts and cache

## Project Structure

The monorepo is organized into three main directories:

### `/apps`
Contains all the standalone applications. Each application is independent and can be deployed separately. These are typically end-user facing applications like web frontends, APIs, or services.

### `/packages`
Houses shared libraries and utilities that are used across multiple applications. These packages are internal dependencies that provide:
- Common UI components
- Shared business logic
- Utility functions
- Type definitions
- Configuration presets

### `/tooling`
Contains development and build tools, configurations, and scripts that are used across the monorepo. This includes:
- Build configurations
- ESLint configs
- TypeScript configs
- Testing setups
- Other development utilities

## Development Guidelines

### What You Can Modify

**Safe to Modify:**
- Application code in `/apps` directory
- Package code in `/packages` directory
- Documentation files
- Component tests
- Application-specific configurations

### What Requires Care/Review

**Modify with Caution:**
- Shared configurations in `/tooling`
- Root-level configuration files (package.json, turbo.json)
- Workspace configurations (pnpm-workspace.yaml)
- Build and deployment scripts

### What Not to Modify

**Avoid Modifying:**
- Lock files (pnpm-lock.yaml) directly
- CI/CD workflows without team approval
- Version numbers in package.json files (use proper release process)
- Core infrastructure configurations

## Best Practices

1. **Monorepo Commands:**
   - Always use `pnpm` (not npm or yarn)
   - Run commands from the root directory
   - Use turborepo cache for faster builds

2. **Code Quality:**
   - Follow the established code style (enforced by Prettier)
   - Ensure all linting passes before committing
   - Write tests for new features

3. **Git Workflow:**
   - Commit messages follow conventional commits (enforced by commitlint)
   - Keep PRs focused and reasonably sized
   - Ensure CI passes before merging

## Troubleshooting

If you encounter issues:

1. Clean the cache and node_modules:
```bash
pnpm clean
rm -rf node_modules
pnpm i
```

2. Clear Turborepo cache:
```bash
rm -rf .turbo
```

3. Ensure you're using the correct Node.js version (check package.json)