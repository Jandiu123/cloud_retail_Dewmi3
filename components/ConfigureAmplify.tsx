"use client";

import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_eXo7A7WH4", // e.g., us-east-1_AbCdEfG
      userPoolClientId: "3n087nua8ton00kkb3vrqvf5u1", // e.g., 234567890abcdef
    },
  },
});

export default function ConfigureAmplifyClientSide() {
  return null;
}