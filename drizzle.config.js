/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:3iFxsI8fApzS@ep-shy-wave-a53suqz6.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };