import Link from 'next/link'
import { Navigation } from '../components/Navigation'

export default function JokesApiLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const currentPath: string = '/jokes';
    return (
      <section>
      <Navigation currentPath={currentPath}/>
           {children}
      </section>
    )
  }