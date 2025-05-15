//
export enum MessageType {
  RequestInfo = 'RequestInfo',
  Info = 'Info',
  Start = 'Start',
  Chunk = 'Chunk',
  Pause = 'Pause',
  Done = 'Done',
  Error = 'Error',
  PasswordRequired = 'PasswordRequired',
  UsePassword = 'UsePassword',
  Report = 'Report',
}

export interface RequestInfoMessage {
  type: MessageType.RequestInfo;
  browserName: string;
  browserVersion: string;
  osName: string;
  osVersion: string;
  mobileVendor: string;
  mobileModel: string;
}

export interface InfoMessage {
  type: MessageType.Info;
  files: Array<{
    name: string;
    size: number;
    type: string;
  }>;
}

export interface StartMessage {
  type: MessageType.Start;
  fileName: string;
  offset: number;
}

export interface ChunkMessage {
  type: MessageType.Chunk;
  fileName: string;
  offset: number;
  bytes: unknown;
  final: boolean;
}

export interface DoneMessage {
  type: MessageType.Done;
}

export interface ErrorMessage {
  type: MessageType.Error;
  error: string;
}

export interface PasswordRequiredMessage {
  type: MessageType.PasswordRequired;
  errorMessage?: string;
}

export interface UsePasswordMessage {
  type: MessageType.UsePassword;
  password: string;
}

export interface PauseMessage {
  type: MessageType.Pause;
}

export interface ReportMessage {
  type: MessageType.Report;
}

export type Message =
    | RequestInfoMessage
    | InfoMessage
    | StartMessage
    | ChunkMessage
    | DoneMessage
    | ErrorMessage
    | PasswordRequiredMessage
    | UsePasswordMessage
    | PauseMessage
    | ReportMessage;

// 将消息编码为字符串
export function decodeMessage(data: unknown): Message {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid message: not an object');
  }

  const message = data as any;

  if (!message.type || !Object.values(MessageType).includes(message.type)) {
    throw new Error(`Invalid message type: ${message.type}`);
  }

  switch (message.type) {
    case MessageType.RequestInfo:
      validateRequestInfo(message);
      return message as RequestInfoMessage;

    case MessageType.Info:
      validateInfo(message);
      return message as InfoMessage;

    case MessageType.Start:
      validateStart(message);
      return message as StartMessage;

    case MessageType.Chunk:
      validateChunk(message);
      return message as ChunkMessage;

    case MessageType.Done:
      // No additional fields to validate
      return message as DoneMessage;

    case MessageType.Error:
      validateError(message);
      return message as ErrorMessage;

    case MessageType.PasswordRequired:
      validatePasswordRequired(message);
      return message as PasswordRequiredMessage;

    case MessageType.UsePassword:
      validateUsePassword(message);
      return message as UsePasswordMessage;

    case MessageType.Pause:
      // No additional fields to validate
      return message as PauseMessage;

    case MessageType.Report:
      // No additional fields to validate
      return message as ReportMessage;

    default:
      throw new Error(`Unhandled message type: ${message.type}`);
  }
}

function validateRequestInfo(message: any): void {
  // validateString(message, 'browserName');
  // validateString(message, 'browserVersion');
  // validateString(message, 'osName');
  // validateString(message, 'osVersion');
  // validateString(message, 'mobileVendor');
  // validateString(message, 'mobileModel');
}

function validateInfo(message: any): void {
  if (!Array.isArray(message.files)) {
    throw new Error('Invalid Info message: files must be an array');
  }

  message.files.forEach((file: any, index: number) => {
    if (typeof file !== 'object') {
      throw new Error(`Invalid file at index ${index}: not an object`);
    }
    validateString(file, 'name');
    validateNumber(file, 'size');
    validateString(file, 'type');
  });
}

function validateStart(message: any): void {
  console.log(message)
  validateString(message, 'fileName');
  validateNumber(message, 'offset');
}

function validateChunk(message: any): void {
  validateString(message, 'fileName');
  validateNumber(message, 'offset');
  if (!('bytes' in message)) {
    throw new Error('Invalid Chunk message: missing bytes field');
  }
  validateBoolean(message, 'final');
}

function validateError(message: any): void {
  validateString(message, 'error');
}

function validatePasswordRequired(message: any): void {
  if ('errorMessage' in message && typeof message.errorMessage !== 'string') {
    throw new Error('Invalid PasswordRequired message: errorMessage must be a string');
  }
}

function validateUsePassword(message: any): void {
  validateString(message, 'password');
}

// 基本类型验证辅助函数
function validateString(obj: any, field: string): void {
  if (typeof obj[field] !== 'string') {
    throw new Error(`Invalid message: ${field} must be a string`);
  }
}

function validateNumber(obj: any, field: string): void {
  if (typeof obj[field] !== 'number') {
    throw new Error(`Invalid message: ${field} must be a number`);
  }
}

function validateBoolean(obj: any, field: string): void {
  if (typeof obj[field] !== 'boolean') {
    throw new Error(`Invalid message: ${field} must be a boolean`);
  }
}