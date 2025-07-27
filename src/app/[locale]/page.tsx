import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

// * components
import ThemeSelect from '@/components/ThemeSelect';

const HomePage = async () => {
  const t = await getTranslations('HomePage');

  return (
    <article className='flex h-dvh flex-col items-center justify-center gap-y-4'>
      <h1>{t('title')}</h1>

      <ThemeSelect />

      <div dir='ltr' className='flex gap-x-4 *:underline'>
        <Link href='/' locale='fa'>
          fa
        </Link>

        <Link href='/' locale='en'>
          en
        </Link>
      </div>
    </article>
  );
};

export default HomePage;
