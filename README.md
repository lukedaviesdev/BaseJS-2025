# BaseJS - Modern React Application

A modern, opinionated React application template with a robust development setup, designed for building scalable and interactive web applications.

## 🚀 Features

- **Modern React** (v18) with TypeScript support
- **TanStack Router** for type-safe routing
- **Tailwind CSS** with:
  - Custom theming and dark mode support
  - Typography plugin for beautiful content styling
  - Class Variance Authority for component variants
  - Tailwind Merge for class name merging
- **UI Components:**
  - Radix UI primitives for accessible components
  - Shadcn/UI inspired component system
  - Custom Markdown component with GitHub Flavored Markdown support
  - Motion components for animations
- **State Management & Data Fetching:**
  - React Query for server state management
  - React Hook Form for form handling
- **Development Tools:**
  - Vite for lightning-fast development
  - Plop for code generation
  - Comprehensive ESLint configuration
  - Git hooks with Husky and lint-staged
  - Automated code quality checks on commit

## 📁 Project Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable UI components
│   ├── ui/       # Base UI components (buttons, inputs, etc.)
│   ├── markdown/ # Markdown rendering component
│   ├── motion/   # Animation components
│   ├── card/     # Card components
│   └── repo-data/ # Repository data components
├── lib/          # Utility functions and shared logic
├── layout/       # Layout components and templates
├── pages/        # Page components
├── routes/       # Route definitions and layouts
├── index.css     # Global styles
├── main.tsx      # Application entry point
└── routeTree.gen.ts  # Generated route tree
```

## 🛠️ Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Routing:** TanStack Router
- **State Management:**
  - React Query
  - React Hook Form
- **Styling:**
  - Tailwind CSS
  - Class Variance Authority
  - Tailwind Merge
  - Tailwind Animate
- **UI Components:**
  - Radix UI primitives
  - Custom component system
  - React Markdown with GFM support
  - Motion for animations
- **Development Tools:**
  - Vite (Build tool)
  - ESLint (Linting)
  - Prettier (Code formatting)
  - Plop (Code generation)
  - TypeScript ESLint (Static type checking)

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run lint:fix` - Fix linting and formatting issues
- `npm run generate` - Run plop generators for code scaffolding
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Code Generation

The project includes Plop generators to quickly scaffold new components, pages, and routes. This helps maintain consistency and saves development time.

### Generating a New Page

To create a new page with its corresponding route:

```bash
npm run generate
```

Then select "page" from the menu and follow the prompts. This will:

1. Create a new page component in `src/pages`
2. Generate a corresponding route in `src/routes`
3. Set up the basic TypeScript types and imports
4. Add the route to the routing system

Example of a generated page structure:

```tsx
// src/pages/example.tsx
export default function ExamplePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Example Page</h1>
    </div>
  );
}

// src/routes/example.tsx
import { createFileRoute } from '@tanstack/react-router';
import ExamplePage from '../pages/example';

export const Route = createFileRoute('/example')({
  component: ExamplePage,
});
```

The generator will automatically:

- Follow project naming conventions
- Set up proper TypeScript types
- Add necessary imports
- Configure routing
- Create test files (if configured)

## 💡 Key Components and Features

### Motion Components

The application includes motion components for smooth animations and transitions, making the UI more dynamic and engaging.

### Form Handling

React Hook Form is integrated for efficient form management with:

- Form validation
- Error handling
- Field management
- Performance optimization

### Data Fetching

React Query is used for:

- Server state management
- Caching
- Background updates
- Error handling
- Loading states

### Markdown Component

A powerful Markdown component that supports:

- GitHub Flavored Markdown (GFM)
- Syntax highlighting for code blocks
- Custom styling that matches your theme
- Dark mode support
- Accessible content rendering

Example usage:

```tsx
import { Markdown } from '@/components/markdown/markdown';

const MyComponent = () => {
  const markdownContent = `
    # Hello World
    This is **bold** and this is *italic*.
  `;

  return <Markdown content={markdownContent} />;
};
```

## 💅 Styling System

The template uses a comprehensive styling system:

- **Tailwind CSS** for utility-first styling
- **Typography Plugin** for beautiful prose content
- **CSS Variables** for theme customization
- **Dark Mode** support out of the box
- **Component Variants** using Class Variance Authority
- **Animation utilities** with tailwindcss-animate

## 📦 Project Configuration

The template includes configuration for:

- TypeScript (`tsconfig.json`)
- ESLint (`.eslintrc.js`)
- Prettier (`.prettierrc`)
- Vite (`vite.config.ts`)
- Tailwind CSS (`tailwind.config.js`)
- Plop (`plopfile.js`)

## 🔧 Customization

The template is designed to be easily customizable. You can:

- Use plop generators to create new components and routes
- Modify the Tailwind configuration
- Add or remove ESLint rules
- Customize the component system
- Extend the routing configuration
- Add additional tools and libraries as needed

## 📚 Best Practices

- Type-safe development with TypeScript
- Component-driven development
- Consistent code style with ESLint and Prettier
- Modern React patterns and hooks
- Accessible UI components using Radix UI
- Efficient state management with React Query
- Form handling with React Hook Form
- Code generation with Plop
- Utility-first styling with Tailwind CSS

## 🧪 Testing

The project includes a comprehensive testing setup using:

- **Vitest** - Fast unit test runner compatible with Vite
- **React Testing Library** - DOM testing utilities
- **Jest DOM** - Custom DOM element matchers
- **User Event** - Advanced user event simulation

### Test Structure

Tests are co-located with their components using the `.test.tsx` extension. The testing setup includes:

```tsx
// Example test file (button.test.tsx)
import { render, screen } from '@/test/test-utils';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Testing Utilities

Custom test utilities are provided in `src/test/test-utils.tsx`:

- Custom render function with providers
- User event setup for interaction testing
- Common test utilities and matchers

### Best Testing Practices

1. **Component Testing:**

   - Test component rendering
   - Test user interactions
   - Test different component states
   - Test accessibility features
   - Test component variants

2. **Test Organization:**

   - Co-locate tests with components
   - Use descriptive test names
   - Group related tests with describe blocks
   - Keep tests focused and atomic

3. **Testing Patterns:**

   ```tsx
   // Testing variants
   it('renders different variants', () => {
     const { rerender } = render(<Button variant="primary" />);
     expect(screen.getByRole('button')).toHaveClass('bg-primary');

     rerender(<Button variant="secondary" />);
     expect(screen.getByRole('button')).toHaveClass('bg-secondary');
   });

   // Testing user interactions
   it('handles user interactions', async () => {
     const { user } = render(<Button onClick={mockFn} />);
     await user.click(screen.getByRole('button'));
     expect(mockFn).toHaveBeenCalled();
   });
   ```

4. **Coverage Requirements:**
   - Unit tests for all components
   - Integration tests for complex features
   - Coverage reports available via `npm run test:coverage`

### Visual Testing Interface

The project includes Vitest UI for a better testing experience:

- Interactive test runner
- Real-time test feedback
- Component preview
- Test debugging tools

Run `npm run test:ui` to launch the visual testing interface.

## 🔧 Git Hooks

The project uses Git hooks through Husky and lint-staged to ensure code quality:

### Pre-commit Hook

The following checks run automatically before each commit:

- **Type Checking:**
  - Full TypeScript type check
  - Ensures no type errors exist
- **TypeScript files (.ts, .tsx):**
  - ESLint for code quality
  - Prettier for code formatting
  - Vitest for related test files
- **Other files (.json, .css, .md):**
  - Prettier for formatting

This ensures that:

- All code follows the project's style guide
- Tests pass for modified files
- Code is properly formatted
- No type errors exist
- No linting errors are committed

### Pre-push Hook

The following checks run before pushing to remote:

- **Type Checking:**
  - Full TypeScript type check
  - Ensures no type errors exist
- **Test Suite:**
  - Runs all tests
  - Generates coverage report
  - Fails if any test fails
  - Fails if coverage thresholds are not met

This ensures that:

- All tests pass before code is pushed
- Code coverage meets requirements
- No type errors are pushed
- Code quality is maintained across the repository

### Available Scripts

- `npm run type-check` - Run TypeScript type checking
- `npm run test:ci` - Run tests in CI mode with coverage

### Customizing Git Hooks

You can modify the Git hooks configuration in:

- `package.json` - `lint-staged` section for pre-commit actions
- `.husky/pre-commit` - Pre-commit hook script
- `.husky/pre-push` - Pre-push hook script
- Add more hooks in the `.husky` directory as needed

### Skipping Hooks

In case you need to skip the Git hooks (not recommended):

```bash
# Skip pre-commit hooks
git commit -m "your message" --no-verify

# Skip pre-push hooks
git push --no-verify
```
