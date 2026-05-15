import { footer } from '@/content/footer'

interface FooterProps {
  variant?: 'light-b'
}

export default function Footer({ variant }: FooterProps) {
  const isLight = variant === 'light-b'

  const bg = isLight ? '#FDF7F4' : '#15202D'
  const topDivider = isLight
    ? 'linear-gradient(90deg, transparent, rgba(216,180,160,0.4), transparent)'
    : 'linear-gradient(90deg, transparent, rgba(216,180,160,0.2), transparent)'
  const linkColor = isLight ? 'rgba(44,62,80,0.50)' : 'rgba(248,249,250,0.4)'
  const midDivider = isLight ? 'rgba(44,62,80,0.08)' : 'rgba(255,255,255,0.05)'
  const legalColor = isLight ? 'rgba(44,62,80,0.40)' : 'rgba(248,249,250,0.2)'
  const copyColor = isLight ? 'rgba(44,62,80,0.25)' : 'rgba(248,249,250,0.12)'

  return (
    <footer className="py-12" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">

        {/* Разделительная линия */}
        <div
          className="mb-10"
          style={{ height: '1px', background: topDivider }}
        />

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Социальные сети */}
          <div className="flex gap-4">
            {footer.socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 transition-all duration-200 hover:opacity-100 hover:-translate-y-0.5"
                style={{ color: linkColor, fontFamily: 'var(--font-inter)' }}>
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Разделитель */}
        <div className="mt-10 mb-5" style={{ height: '1px', background: midDivider }} />

        <p className="text-center text-xs mt-6" style={{ color: copyColor, fontFamily: 'var(--font-inter)' }}>
          © {footer.year} Все права защищены.
        </p>
      </div>
    </footer>
  )
}
