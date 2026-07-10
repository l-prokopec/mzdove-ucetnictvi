# Nastavení Supabase

1. Vytvořte projekt na Supabase Free.
2. V SQL Editoru spusťte celý soubor `supabase/migrations/202607100001_initial_progress.sql`.
3. V Authentication > Providers povolte Email. Podle potřeby zapněte potvrzení e-mailu.
4. V Authentication > URL Configuration nastavte Site URL na produkční GitHub Pages URL a Redirect URLs na lokální i produkční URL (např. `http://localhost:5173/**` a `https://UZIVATEL.github.io/mzdove-ucetnictvi/**`).
5. Z Project Settings zkopírujte pouze Project URL a publishable key do `.env.local`.
6. Registraci lze v UI skrýt pomocí `VITE_ALLOW_SIGN_UP=false`; pro úplné uzavření ji zakažte také v Supabase Auth.

## Ruční ověření RLS

Vytvořte dva testovací účty A a B. Jako A vložte řádek s vlastním `user_id`; SELECT ho musí vrátit. Pokus A vložit nebo změnit řádek s `user_id` účtu B musí skončit porušením RLS. Jako B nesmí SELECT vrátit data A. Stejný test proveďte pro všechny čtyři tabulky. Nakonec ověřte, že nepřihlášený klient nemůže tabulky číst ani zapisovat.

Nikdy nepoužívejte service-role key v prohlížeči ani GitHub repository variables.
