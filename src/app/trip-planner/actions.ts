// @/app/trip-planner/actions.ts
"use server";

import { generateTravelItinerary, type GenerateTravelItineraryInput } from "@/ai/flows/generate-travel-itinerary";
import { z } from "zod";

const TripPlannerSchema = z.object({
  interests: z.string().min(10, "Please describe your interests in more detail (min 10 characters)."),
  budget: z.enum(["Budget-Friendly", "Mid-Range", "Luxury"]),
  travelDates: z.string().min(5, "Please provide your travel dates."),
  region: z.string().optional(),
  duration: z.string().min(3, "Please specify the trip duration (e.g., 7 days)."),
});

export type TripPlannerFormState = {
  message: string | null;
  itinerary: string | null;
  errors?: {
    interests?: string[];
    budget?: string[];
    travelDates?: string[];
    region?: string[];
    duration?: string[];
  };
};

export async function generateItineraryAction(
  prevState: TripPlannerFormState,
  formData: FormData
): Promise<TripPlannerFormState> {
  const validatedFields = TripPlannerSchema.safeParse({
    interests: formData.get("interests"),
    budget: formData.get("budget"),
    travelDates: formData.get("travelDates"),
    region: formData.get("region"),
    duration: formData.get("duration"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      itinerary: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const inputData: GenerateTravelItineraryInput = {
    interests: validatedFields.data.interests,
    budget: validatedFields.data.budget,
    travelDates: validatedFields.data.travelDates,
    region: validatedFields.data.region,
    duration: validatedFields.data.duration,
  };

  try {
    const result = await generateTravelItinerary(inputData);
    if (result.itinerary) {
      return {
        message: "Itinerary generated successfully!",
        itinerary: result.itinerary,
        errors: {},
      };
    } else {
      return {
        message: "Failed to generate itinerary. The AI could not produce a result.",
        itinerary: null,
        errors: {},
      };
    }
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return {
      message: "An unexpected error occurred while generating your itinerary. Please try again later.",
      itinerary: null,
      errors: {},
    };
  }
}
