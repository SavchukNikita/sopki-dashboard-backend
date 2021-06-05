import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.WAKATIME_API_KEY;
const base64Key = Buffer.from(apiKey).toString('base64');

const config = {
  headers: {
    Authorization: `Basic ${base64Key}`,
  },
};

async function get(url) {
  try {
    return await axios.get(`https://wakatime.com${url}`, config);
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default {
  get,
};
