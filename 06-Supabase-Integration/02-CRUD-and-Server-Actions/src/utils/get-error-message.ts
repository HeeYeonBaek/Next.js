import { isErrorObject } from './is-Error-Object'

export const getErrorMessage = (error: unknown) => {
  return isErrorObject(error) ? error.message : String(error)
}