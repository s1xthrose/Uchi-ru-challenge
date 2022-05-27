const CATS_API_BASEURL = "https://api.thecatapi.com/v1/images/search";

const SECRET_API_KEY='fe7a77c9-2ba0-4e7e-9fc8-f59582c8a99a';

const CATS_API_LIMIT = 15;

const CATS_API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'x-api-key': SECRET_API_KEY
};

export { 
  CATS_API_BASEURL,
  CATS_API_HEADERS,
  CATS_API_LIMIT
};