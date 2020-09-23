// https://developer.spotify.com/documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';
const clientId = '8b11a84dca0c48f6bb7f57404c6ede56';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]