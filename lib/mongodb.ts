import mongoose from 'mongoose';

// Define the type for cached connection
interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Type for the global MongoDB connection cache
declare global {
  var mongooseCache: MongooseConnection | undefined;
}

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI as string;



/**
 * Global variable to cache the MongoDB connection
 * This prevents multiple connections during development with hot reloading
 */
let cached: MongooseConnection = global.mongooseCache || { conn: null, promise: null };
global.mongooseCache = cached;

/**
 * Establishes a cached connection to MongoDB using Mongoose
 * @returns Promise<typeof mongoose> A promise that resolves to the Mongoose instance
 */
export async function connectToDatabase(): Promise<typeof mongoose> {

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env'
    );
  }
  // If we have a cached connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection is in progress, return the promise
  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
      dbName: 'afg-crawler-db',
    };

    // Create a new connection promise
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  try {
    // Wait for the connection to establish
    cached.conn = await cached.promise;
  } catch (error) {
    // Clear the promise if connection fails
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

// Export the mongoose instance for use in models
export { mongoose };