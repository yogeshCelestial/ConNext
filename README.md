# ConNext - Full Stack Blog App

ConNext is a powerful full-stack blog application built with the latest technologies, including Next.js 14, REST API, React, Material UI, TypeScript, Prisma ORM, and a PostgreSQL database hosted on Neon. The authentication is seamlessly handled by NextAuth v5 with the Google provider. The application is designed to provide a feature-rich blogging experience and is deployed on Vercel for easy and scalable hosting.

## Open Deployed Application
### [https://connext-ts.vercel.app/](https://connext-ts.vercel.app/)


## Clone the repository
```bash
git clone git@github.com:yogeshCelestial/connext.git
```

## Install dependencies
```bash
npm install
```

## Add environment variables
Make sure to add  a `.env` file in the root of your project with environment variables

### Google Provider Credentials
`GOOGLE_CLIENT_ID`
`GOOGLE_CLIENT_SECRET`

### Databse Server Variables
`DATABASE_URL`
`DIRECT_URL`


### EdgeStore server credentials

`EDGE_STORE_ACCESS_KEY`
`EDGE_STORE_SECRET_KEY`
### Secret Key for Next Auth - Required for production only
`NEXTAUTH_SECRET`

## Start the developement Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Build for production
```bash
prisma generate && npm run build
```

## Notes
Ensure your PostgreSQL database is properly set up and accessible.
Customize the .env file with your actual credentials.
Feel free to explore and modify the ConNext app to suit your blogging needs.
Happy blogging with ConNext!

