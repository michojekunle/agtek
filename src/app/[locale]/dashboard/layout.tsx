import {NextIntlClientProvider, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import { Be_Vietnam_Pro } from 'next/font/google';
const beVietnamPro = Be_Vietnam_Pro({ weight: '400', subsets: ['latin'] })

// Can be imported from a shared config
const locales = ['en', 'es', 'fr'];

type Props = {
    children: React.ReactNode
    params: {
        locale: string
    }
}

export default function LocaleLayout({children, params: {locale}}: Props) {

  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={beVietnamPro.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}