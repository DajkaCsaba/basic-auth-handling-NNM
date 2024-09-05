import Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().optional().default(3333),
  DB_PRISMA_URL: Joi.string().required(),
  DB_PRISMA_URL_NON_POOLING: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_REFRESH_SECRET_KEY: Joi.string().required(),
  HASH_SALT: Joi.string().required(),
  CRYPTO_KEY: Joi.string().required(),
  CRYPTO_IV: Joi.string().required(),
  SMTP_HOST: Joi.string().required(),
  SMTP_PORT: Joi.number().required(),
  SMTP_USER: Joi.string().required(),
  SMTP_PASSWORD: Joi.string().required(),
  PAGE_MAIL: Joi.string().required(),
  FRONTEND_BASE_URL: Joi.string().required(),

  CORS_WHITELIST: Joi.string().required(),
});
