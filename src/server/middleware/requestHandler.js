import { NextResponse } from "next/server";
import { APIError } from "../lib/apiResponse";
import connectToDatabase from "../lib/connectDB";

export const requestHandler = (handler) => {
  return async (req, res, next) => {
    try {
      // Connect to the database
      await connectToDatabase();

      // Execute the request
      const result = await handler(req, res, next);

      return NextResponse.json(result, { status: result?.statusCode });
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error:", error);

      // Centralized error handling using APIError
      const apiError = new APIError("Internal Server Error", 500);
      return NextResponse.json(apiError, { status: 500 });
    }
  };
};
