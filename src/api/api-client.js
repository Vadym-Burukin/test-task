import config from './config.json';

export const baseUrl = config[process.env.NODE_ENV];
