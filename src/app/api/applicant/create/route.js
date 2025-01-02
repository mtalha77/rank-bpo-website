import { APIResponse } from "@/server/lib/apiResponse";
import { requestHandler } from "@/server/middleware/requestHandler";
import Applicant from "@/server/models/applicant.model";

const createApplicant = async (req) => {
  try {
    // Get request body
    const body = await req.json();
    
    const { name, email, phone, city, experience, department, resume } = body;

    // Validate required fields
    if (!name || !email || !phone || !city || !experience || !department || !resume) {
      return new APIResponse(
        null,
        "All fields are required",
        400
      );
    }

    // Create new applicant
    const newApplicant = await Applicant.create({
      name,
      email, 
      phone,
      city,
      experience,
      department,
      resume
    });

    return new APIResponse(
      { newApplicant },
      "Application submitted successfully",
      201
    );

  } catch (error) {
    console.error("Create applicant error:", error);
    return new APIResponse(
      null,
      error.message || "Failed to create application",
      500  
    );
  }
};

export const POST = requestHandler(createApplicant);