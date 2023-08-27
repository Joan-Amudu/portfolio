'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavBar() {
    const path = usePathname(); // hook to check current path
        return (
            <nav className="NavBar">
                <ul className="menu">                
                    <li><Link href="/">Home</Link></li>     
                    <li><Link href="/projects" className={path.startsWith('/projects') ?
                    'active' : null}>Projects</Link></li>
                    <li><Link href="/contact" className={path.startsWith('/contact') ?
                    'active' : null}>Contact</Link></li>
                </ul>                         
            </nav>
        )
}
export default NavBar