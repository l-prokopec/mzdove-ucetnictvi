export function ConfigPage({ missing }: { missing: string[] }) {
  return (
    <main className="config-page">
      <div className="config-card">
        <div className="brand">
          <span className="brand__mark">M</span>Mzdová akademie
        </div>
        <h1>Aplikaci je potřeba propojit se Supabase</h1>
        <p>
          Vytvořte soubor <code>.env.local</code> podle{' '}
          <code>.env.example</code> a doplňte veřejné údaje projektu.
        </p>
        <ul>
          {[...new Set(missing)].map((name) => (
            <li key={name}>
              <code>{name}</code>
            </li>
          ))}
        </ul>
        <p className="notice">
          Použijte pouze Project URL a publishable key. Nikdy sem nevkládejte
          service-role key ani databázové heslo.
        </p>
      </div>
    </main>
  )
}
