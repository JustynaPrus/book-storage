This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 

Projekt to aplikacja internetowa sprzedająca ebooki lub inne pliki wysyłane mailowo na adres email kupującego.

## Struktura strony

1. Strona główna - część opisowa i prezentacyjna w stopce posiada formularz do wysyłki newslettera.
2. Blog - wyświetla listę wpisów razem z paginacją.
3. Produkty - wyświetla listę produktów z możliwością filtrowania i paginacji.
4. Podstrona produktu - wyświetla pełny opis produktu i możliwość dodania do koszyka, opinie o produkcie.
5. Nawigacja z ikonką koszyka zakupowego - można podglądać koszyk i przejść do podsumowania
6. Ekran podsumowania i realizacji zamówienia - trzeba podać imię, nazwisko i adres email.
7. Ekran profilu użytkownika - możliwość podglądu zamówień.

## Wymagania funkcjonalne:
- wsparcie dla wielojęzyczności,
- baza danych do przechowywania produktów i kategorii np. supabase, firebase, postgreSql, mongoDb,
- użycie storage na pliki produktów (sugerowane Amazon S3, google cloud storage),
- użycie providera do wysyłki wiadomości e-mail (sugerowane Sendgrid, nodemailer, amazon SES),

- panel administratora z możliwościami:
* dodawanie, usuwanie i edycja produktów, produkt posiada pola: cena, nazwa, opis, kategoria, zdjęcie promocyjne, plik produktu,
* dodawanie, usuwanie i edycja kategorii, kategoria posiada pole nazwy,
* podgląd kontaktów zapisanych do newslettera,
- tworzenie obrazów dockerowych aplikacji,
- automatyzacja budowania obrazów na github action po merge do mastera i wrzucenie obrazu na repo dockerowe z githuba,
- posty na bloga zaczytują się z zewnątrz np. wordpress, strapi, sanity, storyblock,
- koszyk zakupowy z wieloma produktami,
- dodawanie kodów rabatowych w panelu admina i użycie w koszyku,
- obsługa płatności przez provider np. przelewy24, tpay, stripe,
- po dokonanej płatności wysyłka produktu na adres e-mail,
- podgląd zamówień w historii, w profilu,
- SEO dla produktów i wpisów na blogu, razem z opengraph images,
- podpięcie narzędzi do monitorowania aplikacji np. checkly, sentry,
- napisanie prostego testu e2e sprawdzającego ścieżkę zakupu (dodanie produktu do koszyka)
- deploy aplikacji jako nextjs standalone np. na digitalOcean https://nextjs.org/docs/pages/api-reference/next-config-js/output,
- użycie storybooka dla przynajmniej 5 komponentów,
- użycie feature flagi do włączania i wyłączania sprzedaży specjalnego e-booka o nazwie: "Moja historia limited"