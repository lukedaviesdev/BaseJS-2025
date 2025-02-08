export const readme = `# BaseJS - Modern React Application

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

## 📁 Project Structure

\`\`\`
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
\`\`\`

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
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 📝 Available Scripts

- \`\`\`bash
npm run dev
\`\`\` - Start development server
- \`\`\`bash
npm run build
\`\`\` - Build for production
- \`\`\`bash
npm run preview
\`\`\` - Preview production build
- \`\`\`bash
npm run lint
\`\`\` - Run ESLint with auto-fix
- \`\`\`bash
npm run format
\`\`\` - Format code with Prettier
- \`\`\`bash
npm run format:check
\`\`\` - Check code formatting
- \`\`\`bash
npm run lint:fix
\`\`\` - Fix linting and formatting issues
- \`\`\`bash
npm run generate
\`\`\` - Run plop generators for code scaffolding

## 🏗️ Code Generation

The project includes Plop generators to quickly scaffold new components, pages, and routes. This helps maintain consistency and saves development time.

### Generating a New Page

To create a new page with its corresponding route:

\`\`\`bash
npm run generate
\`\`\`

Then select "page" from the menu and follow the prompts. This will:
1. Create a new page component in \`src/pages\`
2. Generate a corresponding route in \`src/routes\`
3. Set up the basic TypeScript types and imports
4. Add the route to the routing system

Example of a generated page structure:

\`\`\`tsx
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
\`\`\`

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
\`\`\`tsx
import { Markdown } from '@/components/markdown/markdown';

const MyComponent = () => {
  const markdownContent = \`
    # Hello World
    This is **bold** and this is *italic*.
  \`;

  return <Markdown content={markdownContent} />;
};
\`\`\`

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
- TypeScript (\`tsconfig.json\`)
- ESLint (\`.eslintrc.js\`)
- Prettier (\`.prettierrc\`)
- Vite (\`vite.config.ts\`)
- Tailwind CSS (\`tailwind.config.js\`)
- Plop (\`plopfile.js\`)

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

`;
