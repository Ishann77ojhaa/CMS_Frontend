# Paperplane CMS — Frontend

A refreshed, responsive React + Vite frontend for your existing blog CMS API.

## Run locally

1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Start the frontend with `npm run dev`.
4. Ensure your existing backend is running at `http://localhost:3000`.

## Existing API routes used

- `GET /blogs` — list articles
- `GET /blogs/:id` — view one article
- `POST /createblogs` — create an article
- `PATCH /blogs/:id` — update an article
- `DELETE /blogs/:id` — delete an article

The backend URL is currently configured in the page components as `http://localhost:3000`. If your API runs elsewhere, update those URLs.

## UI improvements

- Responsive layout for desktop, tablet, and mobile
- Content dashboard with article counts and search
- Redesigned article cards, detail view, and create/edit forms
- Loading, empty, and API error states
- Delete confirmation and save feedback states
