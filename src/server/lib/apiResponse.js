class APIError extends Error {
  constructor(message = "Internal Server Error", statusCode = 500) {
    super(message);
    this.success = false;
    this.message = message;
    this.statusCode = statusCode;
    // this.name = this.constructor.name;
  }
}

class APIResponse {
  constructor(data, message = "Success", statusCode = 200) {
    this.success = true;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { APIError, APIResponse };
