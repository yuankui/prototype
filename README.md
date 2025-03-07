# Next.js + Prisma + Tailwind CSS + TypeScript + ESLint + Prettier

## Getting Started

Here are the complete steps from git clone to starting the project:

### Clone the Repository

git clone <repository-url>
cd prototype

### Install Dependencies

npm install

### Set Up PostgreSQL Database (Using Docker)

### Start the PostgreSQL container

docker-compose up -d postgres

This will start a PostgreSQL container using the docker-compose.yml configuration in the project, with the following
settings:
• Username: postgres
• Password: postgres
• Database Name: prototype
• Port: 5432

### Configure Environment Variables

Create a .env file and set the database connection string

```bash
echo "DATABASE_URL=\"postgresql://postgres:postgres@localhost:5432/prototype\"" > .env
```

### Initialize the Database

#### Generate the Prisma client

```
npm run prisma:generate
```

#### Run database migrations

```
npm run prisma:migrate
```

### Start the Development Server

```bash
npm run dev
```

### Access the Application

Open your browser and go to http://localhost:3000 to view the application.

## Database and Migrations

This project uses Prisma ORM to manage database operations and migrations.

### Generating a New SQL Migration

To generate a new SQL migration after making changes to the Prisma schema:

1. Make your changes to the schema in `prisma/schema.prisma`
2. Run the following command to generate a new migration:

```bash
npm run prisma:migrate -- dev --name your_migration_name
```

Replace `your_migration_name` with a descriptive name for your migration (use snake_case).

3. The migration will be created in the `prisma/migrations` directory with a timestamp prefix
4. Apply the migration to your development database automatically

### Deploying Migrations to Production

For production environments, use the deployment command which applies migrations without generating development
artifacts:

```bash
npm run prisma:deploy
```

### Other Database Commands

```bash
# Generate Prisma client after schema changes
npm run prisma:generate

# Open Prisma Studio for database visualization
npm run prisma:studio
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.
