import { readme } from '@/assets/readme';
import { Markdown } from '@/components/markdown/markdown';
import { DefaultLayout } from '@/layout/default-layout';
export const HomePage = () => {
  return (
    <DefaultLayout
      meta={{
        title: 'Home Page',
      }}
    >
      <div className="border rounded-lg p-6 bg-card space-y-8">
        <Markdown content={readme} />
      </div>
    </DefaultLayout>
  );
};
