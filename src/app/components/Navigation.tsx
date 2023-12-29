import Link from "next/link";

interface NavigationProps {
    currentPath?: string;
  }

export const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  
    return (
<nav className="bg-blue-500 p-4">
<ul className="flex justify-center gap-4">
      <li><Link className={currentPath === '/' ? 'text-orange-500 font-bold' : 'text-white font-bold'} href="/">Home</Link></li>
      <li><Link className={currentPath === '/jokes' ? 'text-orange-500 font-bold' : 'text-white font-bold'} href="/jokes">Jokes</Link></li>
      <li><Link className={currentPath === '/advice' ? 'text-orange-500 font-bold' : 'text-white font-bold'} href="/advice">Advice</Link></li>
    </ul>
</nav>
    )
} 
