"use client";
import { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { AlertCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import useConfettiAnimation from "@/hooks/useConfettiAnimation";
import dynamic from "next/dynamic";
// Dynamically import ReactConfetti to ensure it only runs on the client
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

const VALID_FILE_TYPES = {
  "application/pdf": true,
  "application/msword": true,
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": true,
};

const technicalTeamDepartments = [
  { value: "custom development", label: "Custom Development (Web, App, etc)" },
  { value: "game development", label: "Game Development" },
  { value: "wordpress development", label: "WordPress" },
  { value: "graphic designer", label: "Graphic Designer" },
  { value: "content writer", label: "Content Writer" },
  { value: "paid marketing", label: "Paid Advertizement" },
  { value: "social media", label: "Social Media" },
  { value: "seo", label: "SEO" },
  { value: "others", label: "Others" },
];

const FormInput = ({
  id,
  label,
  register,
  errors,
  validation,
  type = "text",
}) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      {...register(id, validation)}
      className="bg-gray-700 text-white"
    />
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1">
        <AlertCircle className="inline mr-1 mt-[-3px]" size={16} />
        {errors[id].message}
      </p>
    )}
  </div>
);

const FormSelect = ({ name, control, errors, label, options, onChange }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Controller
      name={name}
      control={control}
      rules={{ required: `${label} is required` }}
      render={({ field }) => (
        <Select
          onValueChange={(value) => {
            field.onChange(value);
            onChange?.(value);
          }}
          value={field.value}
        >
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">
        <AlertCircle className="inline mr-1 mt-[-3px]" size={16} />
        {errors[name].message}
      </p>
    )}
  </div>
);

function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const confetti = useConfettiAnimation();

  const teamValue = watch("team");

  useEffect(() => {
    if (teamValue === "sales") {
      setValue("department", "sales");
      setSelectedDepartment("sales");
    } else if (teamValue === "technical") {
      setValue("department", "");
      setSelectedDepartment("");
    }
  }, [teamValue, setValue]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
      toast({
        type: "error",
        message: "Failed to upload resume. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        experience: data.experience,
        department: data.department || selectedDepartment,
      };

      if (data.resume) {
        const resumeURL = await uploadToCloudinary(data.resume);
        if (!resumeURL) return;
        formData.resume = resumeURL;
      }

      const response = await axios.post("/api/applicant/create", formData);

      if (!response?.data?.success) {
        throw new Error("Failed to submit application");
      }

      reset();
      toast({ type: "success", message: "Application submitted successfully" });
      confetti.startAnimation();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        type: "error",
        message: "Failed to submit application, try again",
        variant: "destructive",
      });
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      if (!VALID_FILE_TYPES[file.type]) {
        setFileError("Only PDF, DOC, and DOCX files are allowed.");
        setFileName("");
        setValue("resume", null);
        return;
      }

      setFileError("");
      setFileName(file.name);
      setValue("resume", file, { shouldValidate: true });
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
  });

  return (
    <div className="min-h-screen w-[60vw] m-auto rounded-md shadow-xl bg-base-200 dark text-gray-100 py-12 px-4 sm:px-6 lg:px-8 ring-2 ring-[#005bea]">
      {confetti.isAnimating && (
        <ReactConfetti
          width={confetti.width}
          height={confetti.height}
          numberOfPieces={200}
          recycle={false}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
        />
      )}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#005bea]">
          Apply For Job
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            id="fullName"
            label="Full Name"
            register={register}
            errors={errors}
            validation={{ required: "Full name is required" }}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />
          <FormInput
            id="phone"
            label="Phone"
            register={register}
            errors={errors}
            validation={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number, should be 10 digits",
              },
            }}
          />
          <FormInput
            id="city"
            label="City"
            register={register}
            errors={errors}
            validation={{ required: "City is required" }}
          />
          <div>
            <Label htmlFor="experience">Experience</Label>
            <Textarea
              id="experience"
              {...register("experience", {
                required: "Experience details are required",
              })}
              className="bg-gray-700 text-white"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">
                <AlertCircle className="inline mr-1" size={16} />
                {errors.experience.message}
              </p>
            )}
          </div>
          <FormSelect
            name="team"
            control={control}
            errors={errors}
            label="Team"
            options={[
              { value: "sales", label: "Sales Team" },
              { value: "technical", label: "Technical Team" },
            ]}
            onChange={setSelectedTeam}
          />
          {selectedTeam === "technical" && (
            <>
              <FormSelect
                name="department"
                control={control}
                errors={errors}
                label="Department"
                options={technicalTeamDepartments}
                onChange={setSelectedDepartment}
              />
              {selectedDepartment === "others" && (
                <FormInput
                  id="otherDepartment"
                  label="Specify Other Department"
                  register={register}
                  errors={errors}
                  validation={{ required: "Please specify the department" }}
                />
              )}
            </>
          )}
          <div>
            <Label htmlFor="resume">Upload Resume</Label>
            <div
              {...getRootProps()}
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 rounded-md cursor-pointer ${
                isDragActive
                  ? "border-blue-500 border-dashed"
                  : "border-gray-300 border-dashed"
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="text-gray-400">
                  {fileName ||
                    "Drag and drop a file here, or click to select a file"}
                </p>
                <p className="text-xs text-gray-400">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
            {fileError && (
              <p className="text-red-500 text-sm mt-1">
                <AlertCircle className="inline mr-1" size={16} />
                {fileError}
              </p>
            )}
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">
                <AlertCircle className="inline mr-1" size={16} />
                {errors.resume.message}
              </p>
            )}
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-[#005bea] hover:bg-[#0046b5] text-white"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplicationForm;
