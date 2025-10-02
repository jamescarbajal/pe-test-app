import { get, set, update, del, clear, values } from 'idb-keyval';


export async function storeImages(key, data) {
  try {
    await set(key, data);
    // console.log('Array of image blobs and crop data stored successfully:', key, data);
  } catch (error) {
    console.error('Failed to store data:', error);
  }
}

export async function getImages(key) {
  try {
    const value = await get(key);
    if (value !== undefined) {
      // console.log(`Retrieved object for key '${key}':`, value);
      return value;
    } else {
      console.log(`No object found for key '${key}'.`);
      return []; // Or handle as needed
    }
  } catch (err) {
    console.error(`Error retrieving object for key '${key}':`, err);
    throw err; // Re-throw the error for further handling
  }
}