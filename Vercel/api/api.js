import { StreamChat } from "stream-chat";

// Define values.
const api_key = '92cuq2s3bvjm'
const api_secret = '4g56sbhhf74qgebr97nhnsruzhnux28wbeexhknpffuuugt4d5z4pjsrmb9ghu2c'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);