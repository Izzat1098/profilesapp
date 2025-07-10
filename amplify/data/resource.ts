import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

/**
 * Defines the data schema for the application using the Amplify schema builder.
 *
 * - `UserProfile` model:
 *   - `email`: The email address of the user.
 *   - `profileOwner`: The identifier for the owner of the profile.
 *   - Authorization: Access is allowed for the owner defined in the `profileOwner` field.
 *
 * - Root-level authorization: Applies a resource-level authorization using the `postConfirmation` resource.
 */
const schema = a
  .schema({
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"),
      ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});