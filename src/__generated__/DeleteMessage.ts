/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMessage
// ====================================================

export interface DeleteMessage {
  deleteMessage: string;
}

export interface DeleteMessageVariables {
  id: string;
  channel: string;
  thread?: string | null;
}
