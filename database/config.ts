const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mortgage-app';

export const dbConfig = {
  uri: mongoUri,
  options: {
    retryWrites: true,
    w: 'majority'
  }
};
