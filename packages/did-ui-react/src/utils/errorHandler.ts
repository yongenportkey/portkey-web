import { handleContractError } from '@portkey/contracts';
import { ErrorInfo, OnErrorFunc } from '../types';
import { message } from 'antd';

export const verifyErrorHandler = (error: any) => {
  // let _error = isVerifyApiError(error);
  let _error: string;
  if (error?.type) {
    _error = error.type;
  } else if (typeof error === 'string') {
    _error = error;
  } else {
    _error = error?.message || error?.error?.message || 'Verify error';
  }
  return _error;
};

export const handleError = (error: any) => {
  return error?.error || error;
};

export const handleErrorMessage = (error: any, errorText?: string) => {
  error = handleError(error);
  error = handleContractError(error);
  if (!error) return errorText;
  if (typeof error === 'string') return error;
  if (typeof error.message === 'string') return error.message;
  return errorText;
};

export const handleErrorCode = (error: any) => {
  return handleError(error)?.code;
};

export const contractErrorHandler = (error: any) => {
  if (typeof error === 'string') return error;
  return error?.Error?.Message || error?.message?.Message || error?.message || error?.Error;
};

export const errorTip = (errorInfo: ErrorInfo, isShowTip?: boolean, onError?: OnErrorFunc) => {
  const msgError = errorInfo?.error?.error?.message || errorInfo?.error?.message || errorInfo?.error;
  if (isShowTip) msgError && message.error(msgError);
  onError?.(errorInfo);
};

export const getMissParams = (obj: object): string | undefined => {
  let _key;
  Object.entries(obj)
    .reverse()
    .map(([key, value]) => {
      if (!value) _key = key;
    });
  return _key;
};
