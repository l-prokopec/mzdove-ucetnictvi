import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthProvider'
import { ScrollToTopButton } from './ScrollToTopButton'

const links = [
  ['/', 'Přehled'],
  ['/course', 'Kurz'],
  ['/review', 'Opakování'],
  ['/checklist', 'Dovednosti'],
  ['/statistics', 'Statistiky'],
  ['/settings', 'Nastavení'],
]

export function Layout() {
  const { user, signOut } = useAuth()
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink to="/" className="brand">
          <span className="brand__mark">M</span>
          <span>
            Mzdová
            <br />
            akademie
          </span>
        </NavLink>
        <nav aria-label="Hlavní navigace">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar__account">
          <small>Přihlášeno</small>
          <span title={user?.email}>{user?.email}</span>
          <button
            className="button button--ghost"
            onClick={() => void signOut()}
          >
            Odhlásit se
          </button>
        </div>
      </aside>
      <div className="main-wrap">
        <header className="mobile-header">
          <NavLink to="/" className="brand">
            <span className="brand__mark">M</span>Mzdová akademie
          </NavLink>
        </header>
        <main id="main">
          <Outlet />
        </main>
        <footer>
          <strong>Studijní obsah: verze 2026.2</strong>
          <span>
            Aplikace je studijní pomůcka. Nenahrazuje aktuální právní, daňové
            ani mzdové poradenství.
          </span>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  )
}
