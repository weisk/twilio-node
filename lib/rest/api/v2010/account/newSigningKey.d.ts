/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the NewSigningKeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function NewSigningKeyList(version: V2010, accountSid: string): NewSigningKeyListInstance;

interface NewSigningKeyListInstance {
  /**
   * create a NewSigningKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NewSigningKeyListInstanceCreateOptions, callback?: (error: Error | null, item: NewSigningKeyInstance) => any): Promise<NewSigningKeyInstance>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A string to describe the resource
 */
interface NewSigningKeyListInstanceCreateOptions {
  friendlyName?: string;
}

interface NewSigningKeyPayload extends NewSigningKeyResource, Page.TwilioResponsePayload {
}

interface NewSigningKeyResource {
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  secret: string;
  sid: string;
}

interface NewSigningKeySolution {
  accountSid?: string;
}


declare class NewSigningKeyInstance extends SerializableClass {
  /**
   * Initialize the NewSigningKeyContext
   *
   * @property sid - The unique string that identifies the resource
   * @property friendlyName - The string that you assigned to describe the resource
   * @property dateCreated - The RFC 2822 date and time in GMT that the resource was created
   * @property dateUpdated - The RFC 2822 date and time in GMT that the resource was last updated
   * @property secret - The secret your application uses to sign Access Tokens and to authenticate to the REST API.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V2010, payload: NewSigningKeyPayload, accountSid: string);

  dateCreated: Date;
  dateUpdated: Date;
  friendlyName: string;
  secret: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the NewSigningKeyInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}


declare class NewSigningKeyPage extends Page<V2010, NewSigningKeyPayload, NewSigningKeyResource, NewSigningKeyInstance> {
  /**
   * Initialize the NewSigningKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: NewSigningKeySolution);

  /**
   * Build an instance of NewSigningKeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NewSigningKeyPayload): NewSigningKeyInstance;
}

export { NewSigningKeyInstance, NewSigningKeyList, NewSigningKeyListInstance, NewSigningKeyListInstanceCreateOptions, NewSigningKeyPage, NewSigningKeyPayload, NewSigningKeyResource, NewSigningKeySolution }
