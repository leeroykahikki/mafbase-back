class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }

  static badRequest(message: string): ApiError {
    return new ApiError(404, message);
  }

  static internal(message: string): ApiError {
    return new ApiError(500, message);
  }

  static forbidden(message: string): ApiError {
    return new ApiError(403, message);
  }
}

export default ApiError;
