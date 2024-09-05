export interface IAppConfiguration {
  port: number;
  dbUrl: string;
  dbNonPoolingUrl: string;
  jwtSecretKey: string;
  jwtRefreshSecretKey: string;
  hashSalt: string;
  cryptoKey: string;
  cryptoIV: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  pageMail: string;
  frontendBaseUrl: string;

  corsWhitelist: string;
}
