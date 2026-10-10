import { OAuth2Client } from "google-auth-library";
import { AppError } from "../error/error.js";

export async function verifyGoogleToken(idToken) {
  try {
    const client = new OAuth2Client({ client_id: '1070893270162-h1dhas4dradct43uojnq3spquai4afsu.apps.googleusercontent.com' })
    const ticket = await client.verifyIdToken({ idToken: idToken });
    return ticket.getPayload();
  } catch (err) {
    throw new AppError('invalid google token', 403);
  }
}