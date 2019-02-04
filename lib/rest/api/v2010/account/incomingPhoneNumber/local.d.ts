/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type LocalAddressRequirement = 'none'|'any'|'local'|'foreign';

/**
 * @description Initialize the LocalList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function LocalList(version: V2010, accountSid: string): LocalListInstance;

interface LocalListInstance {
  /**
   * create a LocalInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: LocalListInstanceCreateOptions, callback?: (error: Error | null, item: LocalInstance) => any): Promise<LocalInstance>;
  /**
   * Streams LocalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: LocalListInstanceEachOptions, callback?: (item: LocalInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: LocalPage) => any): Promise<LocalPage>;
  /**
   * Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: LocalListInstanceOptions, callback?: (error: Error | null, items: LocalInstance[]) => any): Promise<LocalInstance[]>;
  /**
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: LocalListInstancePageOptions, callback?: (error: Error | null, items: LocalPage) => any): Promise<LocalPage>;
}

/**
 * Options to pass to create
 *
 * @property addressSid - The SID of the Address resource associated with the phone number
 * @property apiVersion - The API version to use for incoming calls made to the new phone number
 * @property friendlyName - A string to describe the new phone number
 * @property identitySid - The SID of the Identity resource to associate with the new phone number
 * @property phoneNumber - The phone number to purchase in E.164 format
 * @property smsApplicationSid - The SID of the application to handle SMS messages
 * @property smsFallbackMethod - The HTTP method we use to call status_callback
 * @property smsFallbackUrl - The URL we call when an error occurs while executing TwiML
 * @property smsMethod - The HTTP method to use with sms url
 * @property smsUrl - The URL we should call when the new phone number receives an incoming SMS message
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackMethod - HTTP method we should use to call status_callback
 * @property voiceApplicationSid - The SID of the application to handle the new phone number
 * @property voiceCallerIdLookup - Whether to lookup the caller's name
 * @property voiceFallbackMethod - The HTTP method used with voice_fallback_url
 * @property voiceFallbackUrl - The URL we will call when an error occurs in TwiML
 * @property voiceMethod - The HTTP method used with the voice_url
 * @property voiceUrl - The URL we should call when the phone number receives a call
 */
interface LocalListInstanceCreateOptions {
  addressSid?: string;
  apiVersion?: string;
  friendlyName?: string;
  identitySid?: string;
  phoneNumber: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property beta - Whether to include new phone numbers
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - A string that identifies the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface LocalListInstanceEachOptions {
  beta?: boolean;
  callback?: (item: LocalInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to list
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface LocalListInstanceOptions {
  beta?: boolean;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to page
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the resources to read
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface LocalListInstancePageOptions {
  beta?: boolean;
  friendlyName?: string;
  origin?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
}

interface LocalPayload extends LocalResource, Page.TwilioResponsePayload {
}

interface LocalResource {
  account_sid: string;
  address_requirements: LocalAddressRequirement;
  address_sid: string;
  api_version: string;
  beta: boolean;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identity_sid: string;
  origin: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface LocalSolution {
  accountSid?: string;
}


declare class LocalInstance extends SerializableClass {
  /**
   * Initialize the LocalContext
   *
   * @property accountSid - The SID of the Account that created the resource
   * @property addressSid - The SID of the Address resource associated with the phone number
   * @property addressRequirements - Whether the phone number requires an Address registered with Twilio.
   * @property apiVersion - The API version used to start a new TwiML session
   * @property beta - Whether the phone number is new to the Twilio platform
   * @property capabilities - Indicate if a phone can receive calls or messages
   * @property dateCreated - The RFC 2822 date and time in GMT that the resource was created
   * @property dateUpdated - The RFC 2822 date and time in GMT that the resource was last updated
   * @property friendlyName - The string that you assigned to describe the resource
   * @property identitySid - The SID of the Identity resource associated with number
   * @property phoneNumber - The phone number in E.164 format
   * @property origin - The phone number's origin. Can be twilio or hosted.
   * @property sid - The unique string that identifies the resource
   * @property smsApplicationSid - The SID of the Application resource to handle SMS messages
   * @property smsFallbackMethod - The HTTP method used with sms_fallback_url
   * @property smsFallbackUrl - The URL that we call when an error occurs while retrieving or executing the TwiML
   * @property smsMethod - The HTTP method to use with sms_url
   * @property smsUrl - The URL we call when the phone number receives an incoming SMS message
   * @property statusCallback - The URL to send status information to your application
   * @property statusCallbackMethod - The HTTP method we use to call status_callback
   * @property trunkSid - The SID of the Trunk that handles calls to the phone number
   * @property uri - The URI of the resource, relative to `https://api.twilio.com`
   * @property voiceApplicationSid - The SID of the application that handles calls to the phone number
   * @property voiceCallerIdLookup - Whether to lookup the caller's name
   * @property voiceFallbackMethod - The HTTP method used with voice_fallback_url
   * @property voiceFallbackUrl - The URL we call when an error occurs in TwiML
   * @property voiceMethod - The HTTP method used with the voice_url
   * @property voiceUrl - The URL we call when this phone number receives a call
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   */
  constructor(version: V2010, payload: LocalPayload, accountSid: string);

  accountSid: string;
  addressRequirements: LocalAddressRequirement;
  addressSid: string;
  apiVersion: string;
  beta: boolean;
  capabilities: string;
  dateCreated: Date;
  dateUpdated: Date;
  friendlyName: string;
  identitySid: string;
  origin: string;
  phoneNumber: string;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Produce a plain JSON object version of the LocalInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  trunkSid: string;
  uri: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class LocalPage extends Page<V2010, LocalPayload, LocalResource, LocalInstance> {
  /**
   * Initialize the LocalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: LocalSolution);

  /**
   * Build an instance of LocalInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: LocalPayload): LocalInstance;
}

export { LocalInstance, LocalList, LocalListInstance, LocalListInstanceCreateOptions, LocalListInstanceEachOptions, LocalListInstanceOptions, LocalListInstancePageOptions, LocalPage, LocalPayload, LocalResource, LocalSolution }
