import type { IAppConfiguration } from './interfaces';

export const loadAppConfiguration = (): IAppConfiguration => ({
  // Db
  port: parseInt(process.env['PORT']!),
  dbUrl: process.env['DB_PRISMA_URL']!,
  dbNonPoolingUrl: process.env['DB_PRISMA_URL_NON_POOLING']!,

  // Common
  jwtSecretKey: process.env['JWT_SECRET_KEY']!,
  jwtRefreshSecretKey: process.env['JWT_REFRESH_SECRET_KEY']!,
  hashSalt: process.env['HASH_SALT']!,
  cryptoKey: process.env['CRYPTO_KEY']!,
  cryptoIV: process.env['CRYPTO_IV']!,
  frontendBaseUrl: process.env['FRONTEND_BASE_URL']!,
  corsWhitelist: process.env['CORS_WHITELIST']!,

  // Mail
  smtpHost: process.env['SMTP_HOST']!,
  smtpPort: parseInt(process.env['CRYPTO_PORT']!),
  smtpUser: process.env['SMTP_USER']!,
  smtpPassword: process.env['SMTP_PASSWORD']!,
  pageMail: process.env['PAGE_MAIL']!,
});
