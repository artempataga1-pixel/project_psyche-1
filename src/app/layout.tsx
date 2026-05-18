import type { Metadata } from 'next'
import { Inter, Open_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ScrollReset from '@/components/ScrollReset'
import { LazyMotion, domAnimation } from 'framer-motion'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://martherapy.ru'),
  title: 'Психолог онлайн в Москве — арт-терапевт Юлия | мАртерапия',
  description: 'Психолог-арт-терапевт Юлия в Москве — онлайн и очно. КПТ, арт-терапия, тревога, творческие блоки, кризисы. Пробная сессия от 3 000 ₽. Запишитесь сегодня.',
  keywords: 'психолог онлайн, арт-терапевт Москва, психолог Москва, арт-терапия онлайн, КПТ, тревога, творческие блоки, психологическая помощь',
  alternates: {
    canonical: 'https://martherapy.ru',
  },
  openGraph: {
    title: 'Психолог онлайн в Москве — арт-терапевт Юлия | мАртерапия',
    description: 'Психолог-арт-терапевт Юлия в Москве — онлайн и очно. КПТ, арт-терапия, тревога, творческие блоки, кризисы. Пробная сессия от 3 000 ₽.',
    url: 'https://martherapy.ru',
    siteName: 'мАртерапия',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'мАртерапия — психолог-арт-терапевт Юлия, Москва',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Психолог онлайн в Москве — арт-терапевт Юлия | мАртерапия',
    description: 'Психолог-арт-терапевт Юлия в Москве — онлайн и очно. КПТ, арт-терапия, тревога, творческие блоки, кризисы. Пробная сессия от 3 000 ₽.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Юлия',
  jobTitle: 'Психолог, арт-терапевт',
  description: 'Психолог-арт-терапевт, интегративный подход. КПТ, арт-терапия, юнгианский анализ, МАК, ТДТ, терапевтическое письмо.',
  image: 'https://martherapy.ru/hero-photo.jpg',
  url: 'https://martherapy.ru',
  sameAs: ['https://t.me/juulymart', 'https://t.me/martherapy'],
  hasCredential: 'Диплом психологического факультета, арт-терапия, артлоготерапия, МАК, ТДТ',
  memberOf: {
    '@type': 'Organization',
    name: 'Ассоциация интегративной психологии',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'мАртерапия — психолог онлайн',
  description: 'Психологические консультации онлайн и очно в Москве. Арт-терапия, КПТ, интегративный подход.',
  url: 'https://martherapy.ru',
  telephone: '+7 (999) 123-45-67',
  email: 'juuly@mail.ru',
  image: 'https://martherapy.ru/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Москва',
    addressCountry: 'RU',
  },
  priceRange: 'от 3 000 ₽',
  openingHours: 'Mo-Su 09:00-22:00',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Подойдёт ли метод, если я совсем не умею рисовать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Арт-терапия не про искусство, а про честный диалог с собой. Каракули, линии или цвет — всё, что угодно. Умение рисовать не нужно совсем.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как проходит онлайн-сессия?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoom с включённой камерой. Материалы высылаю заранее — картинки для скачивания, ссылки на Miro, подборки музыки.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что если станет больно или страшно во время сессии?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Вы в любой момент можете остановиться. Мы идём в вашем темпе, я создаю максимально бережную среду.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли получить чек или договор?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, предоставляю документы для физических и юридических лиц. Все расчёты прозрачны.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько сессий обычно нужно?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Зависит от запроса. Для конкретной темы — 3-5 встреч. Для глубинной работы с паттернами — от 3 месяцев. На первой встрече наметим реалистичный план.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${openSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
          }}
        />
        <LazyMotion features={domAnimation}>
          <ScrollReset />
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
