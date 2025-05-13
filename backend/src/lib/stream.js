import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
  console.error("Please provide Stream API key and secret");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// create or update user
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]); // create or update user
    return userData;

  } catch(error) {
    console.error("Error in upsert Stream User",error);
  }
}

//todo: do it later
export const generateStreamToken = async (userId) => {

}
