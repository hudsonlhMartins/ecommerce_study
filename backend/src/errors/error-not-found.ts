export class ErrorNotFound extends Error {
  constructor(message: string) {
    super(`Error not found: ${message}`)
    this.name = 'ErrorNotFound'
  }
}
