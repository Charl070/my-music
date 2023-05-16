// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const auth_end_point = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const client_id = "ea738e4b6a6441979857dcedf4babd0b";
const redirect_uri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item: string) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};


export const signin_url = `${auth_end_point}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;