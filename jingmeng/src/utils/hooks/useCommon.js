import { storageSession, storageLocal } from '../storage'

// session
export function useSessionStorage() {
  return storageSession
}
// localStorage
export function useLocalStorage() {
  return storageLocal
}
