import { useState, type FormEvent } from 'react'
import { useAuth } from './AuthProvider'

export function LoginPage({ allowSignUp }: { allowSignUp: boolean }) {
  const { signIn, signUp } = useAuth()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBusy(true)
    setError(null)
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email'))
    const password = String(form.get('password'))
    const message =
      mode === 'login'
        ? await signIn(email, password)
        : await signUp(email, password)
    if (message) setError(message)
    else if (mode === 'signup')
      setError(
        'Registrace proběhla. Pokud je vyžadováno potvrzení e-mailu, otevřete doručenou zprávu.',
      )
    setBusy(false)
  }
  return (
    <div className="auth-page">
      <section className="auth-intro">
        <div className="eyebrow">Osobní interaktivní kurz</div>
        <h1>Jistota ve mzdách začíná pevným základem.</h1>
        <p>
          Studujte po malých krocích, procvičujte pracovní situace a sledujte,
          co už skutečně ovládáte.
        </p>
        <div className="auth-features">
          <span>30 modulů v nové osnově</span>
          <span>Okamžitá zpětná vazba</span>
          <span>Synchronizace pokroku</span>
        </div>
      </section>
      <section className="auth-card">
        <div className="brand">
          <span className="brand__mark">M</span>Mzdová akademie
        </div>
        <h2>{mode === 'login' ? 'Vítejte zpět' : 'Vytvořit studijní účet'}</h2>
        <p>
          {mode === 'login'
            ? 'Přihlaste se a pokračujte tam, kde jste skončili.'
            : 'Pokrok se bezpečně uloží do vašeho účtu.'}
        </p>
        <form onSubmit={(event) => void submit(event)}>
          <label>
            E-mail
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Heslo
            <input
              name="password"
              type="password"
              autoComplete={
                mode === 'login' ? 'current-password' : 'new-password'
              }
              minLength={8}
              required
            />
          </label>
          {error && (
            <div className="form-message" role="status">
              {error}
            </div>
          )}
          <button className="button button--primary" disabled={busy}>
            {busy
              ? 'Zpracovávám…'
              : mode === 'login'
                ? 'Přihlásit se'
                : 'Registrovat se'}
          </button>
        </form>
        {allowSignUp && (
          <button
            className="text-button"
            onClick={() => {
              setMode(mode === 'login' ? 'signup' : 'login')
              setError(null)
            }}
          >
            {mode === 'login'
              ? 'Nemáte účet? Zaregistrujte se'
              : 'Už máte účet? Přihlaste se'}
          </button>
        )}
      </section>
    </div>
  )
}
