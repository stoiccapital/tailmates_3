# Vet Companion PWA

A modern Progressive Web App for veterinarians and pet owners, built with Next.js 14, Tailwind CSS, and Supabase.

## Features
- Next.js 14 App Router (TypeScript)
- Tailwind CSS for styling
- Supabase for authentication, database, and storage
- PWA-ready (coming soon)

## Getting Started

1. **Clone the repo**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Supabase project URL and anon key.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Folder Structure
- `/app` — App Router pages (auth, patients, appointments)
- `/components` — Reusable UI components
- `/lib` — Supabase client and helpers

## TODO
- Integrate Supabase Auth UI
- Fetch and display data from Supabase
- Add PWA manifest and service worker
- Improve accessibility and mobile UX

---

MIT License 