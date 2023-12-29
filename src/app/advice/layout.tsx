import Link from 'next/link'
import { Navigation } from '../components/Navigation'

export default function AdvicesApiLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const currentPath: string = '/advice';
    return (
      <section>
      <Navigation currentPath={currentPath}/>
      {children}
      </section>
    )
  }