// 'use server';
/**
 * @fileOverview Generates a personalized travel itinerary for Myanmar based on user preferences.
 *
 * - generateTravelItinerary - A function that generates a travel itinerary.
 * - GenerateTravelItineraryInput - The input type for the generateTravelItinerary function.
 * - GenerateTravelItineraryOutput - The return type for the generateTravelItinerary function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTravelItineraryInputSchema = z.object({
  interests: z
    .string()
    .describe('The users interests (e.g., culture, nature, adventure).'),
  budget: z.string().describe('The users budget (e.g., low, medium, high).'),
  travelDates: z.string().describe('The users desired travel dates.'),
  region: z
    .string()
    .optional()
    .describe('The region to visit. If empty, pick automatically.'),
  duration: z.string().describe('How many days the trip should be.'),
});

export type GenerateTravelItineraryInput = z.infer<
  typeof GenerateTravelItineraryInputSchema
>;

const GenerateTravelItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated travel itinerary.'),
});

export type GenerateTravelItineraryOutput = z.infer<
  typeof GenerateTravelItineraryOutputSchema
>;

export async function generateTravelItinerary(
  input: GenerateTravelItineraryInput
): Promise<GenerateTravelItineraryOutput> {
  return generateTravelItineraryFlow(input);
}

const generateTravelItineraryPrompt = ai.definePrompt({
  name: 'generateTravelItineraryPrompt',
  input: {schema: GenerateTravelItineraryInputSchema},
  output: {schema: GenerateTravelItineraryOutputSchema},
  prompt: `You are an expert travel agent specializing in creating personalized travel itineraries for Myanmar.

  Based on the user's preferences, generate a detailed travel itinerary including specific places, activities and estimated time for each activity.

  User Preferences:
  - Interests: {{{interests}}}
  - Budget: {{{budget}}}
  - Travel Dates: {{{travelDates}}}
  - Region: {{{region}}}
  - Duration: {{{duration}}}

  Format:
  - Day 1: [Activity 1] - [Estimated Time], [Activity 2] - [Estimated Time]
  - Day 2: ...
  `,
});

const generateTravelItineraryFlow = ai.defineFlow(
  {
    name: 'generateTravelItineraryFlow',
    inputSchema: GenerateTravelItineraryInputSchema,
    outputSchema: GenerateTravelItineraryOutputSchema,
  },
  async input => {
    const {output} = await generateTravelItineraryPrompt(input);
    return output!;
  }
);
