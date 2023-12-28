import Link from 'next/link'

export default function AdvicesApiLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav> <ul>
        <li><Link href="/">Home</Link></li>
            <li><Link href="/jokes">Jokes</Link></li>
            <li><Link href="/advice">Advice</Link></li>
          </ul>
          </nav>
   
        {children}
      </section>
    )
  }