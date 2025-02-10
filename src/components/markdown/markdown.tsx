import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

interface MarkdownProperties {
  content: string;
  className?: string;
}

export const Markdown = ({ content, className }: MarkdownProperties) => {
  return (
    <div className={cn('prose dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Override default element styling
          h1: ({ children }) => (
            <h1 className="text-heading1 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-heading2 mb-3 mt-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-heading3 mb-2 mt-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 mb-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-6 mb-4">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-black dark:text-white">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
