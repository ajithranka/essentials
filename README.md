# Essentials

## Setup

Use the node version specified in the `.nvmrc` file. If you have Node Version Manager installed, detect and use the correct node version by running,

```sh
nvm use
```

Install dependencies

```sh
npm install
```

Copy the `.env.example` file to `.env` and edit environment variables.

```sh
cp .env.example .env
```

Set up the database

```sh
npx prisma db seed
```

If you are using VS Code, recommended extensions and settings are listed in the [`.vscode`](.vscode) folder.

## Development

| Command          | Action                         |
| :--------------- | :----------------------------- |
| `npm run dev`    | Starts local dev server        |
| `npm run lint`   | Lint and fix files with ESLint |
| `npm run format` | Format files with Prettier     |

## Production

| Command         | Action                      |
| :-------------- | :-------------------------- |
| `npm run build` | Build your production site  |
| `npm run start` | Start the production server |
