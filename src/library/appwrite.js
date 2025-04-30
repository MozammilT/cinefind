import { Client, Databases, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const metaData = () => {
  console.table({
    "project ID": PROJECT_ID,
    "database ID": DATABASE_ID,
    "colelction ID": COLLECTION_ID,
  });
};

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const db = new Databases(client);

export const searchCount = async (searchTerm, movie) => {
  try {
    //1. Use Appwrite SDK to chekc if the searchTerm exists in the database
    const result = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);
    console.log(`list documents for ${movie.title} - `, result);

    //2. If exists then increase the count by 1
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await db.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    }

    //3. IF not then create a new document with the searchTerm and set the count as 1
    else {
      await db.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        movie_id: movie.id,
      });
    }
  } catch (err) { 
    console.log(err);
  }
};

export const getTrendingMovies = async () => {
  const result = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(10),
    Query.orderDesc("count"),
  ]);
  return result.documents;
};
