export class UnknownPortalException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnknownPortalException'
  }
}
