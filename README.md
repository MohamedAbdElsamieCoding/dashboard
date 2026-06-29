# Dashboard

A modern React + TypeScript admin dashboard built with Vite and React Router.

## Features

- Authentication flow with protected routes
- Product, orders, analytics, settings, and dashboard views
- Responsive UI with reusable components
- Production-ready build setup for Vercel deployment

## Scripts

- `npm install` — install dependencies
- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Demo login

Use the following credentials to try the app:

```json
{
  "username": "emilys",
  "password": "emilyspass"
}
```

## Vercel deployment

This project includes a Vercel configuration file so client-side routes such as `/products`, `/orders`, and `/analytics` work correctly after deployment.

### Deployment steps

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

### Notes

- The app uses React Router, so the included [vercel.json](vercel.json) rewrite rule ensures deep links resolve to `index.html`.
- The project is configured to build successfully with TypeScript and Vite.
