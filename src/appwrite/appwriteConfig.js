import { Client, Account, ID , Databases} from 'appwrite';

const client = new Client();
console.log(process.env.APPWRITE_ENDPOINT)


client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_API) // Your project ID
;
export const databases = new Databases(client,process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_API);
export const account = new Account(client);

