// @/app/trip-planner/TripPlannerForm.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateItineraryAction, type TripPlannerFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles, Info, CheckCircle2 } from "lucide-react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: TripPlannerFormState = {
  message: null,
  itinerary: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <LoadingSpinner size={20} className="mr-2" /> Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" /> Generate Itinerary
        </>
      )}
    </Button>
  );
}

export default function TripPlannerForm() {
  const [state, formAction] = useFormState(generateItineraryAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.itinerary) { // Success
        toast({
          title: "Itinerary Generated!",
          description: state.message,
          variant: "default",
        });
      } else if (state.errors && Object.keys(state.errors).length > 0) { // Validation error
         toast({
          title: "Input Error",
          description: state.message,
          variant: "destructive",
        });
      } else { // General error
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center">
          <Sparkles className="mr-2 h-6 w-6" /> Create Your Custom Itinerary
        </CardTitle>
        <CardDescription>
          Fill in your preferences, and our AI will craft a personalized travel plan for your Myanmar adventure.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="interests" className="font-semibold">Your Interests</Label>
            <Textarea
              id="interests"
              name="interests"
              placeholder="e.g., Ancient temples, cultural experiences, nature hikes, local markets, relaxing beaches..."
              rows={4}
              className="mt-1"
              aria-describedby="interests-error"
            />
            {state.errors?.interests && (
              <p id="interests-error" className="text-sm text-destructive mt-1">{state.errors.interests.join(", ")}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="budget" className="font-semibold">Budget</Label>
              <Select name="budget" defaultValue="Mid-Range">
                <SelectTrigger id="budget" className="mt-1" aria-describedby="budget-error">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Budget-Friendly">Budget-Friendly</SelectItem>
                  <SelectItem value="Mid-Range">Mid-Range</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
              {state.errors?.budget && (
                <p id="budget-error" className="text-sm text-destructive mt-1">{state.errors.budget.join(", ")}</p>
              )}
            </div>
            <div>
              <Label htmlFor="duration" className="font-semibold">Trip Duration</Label>
              <Input
                id="duration"
                name="duration"
                placeholder="e.g., 7 days, 2 weeks"
                className="mt-1"
                aria-describedby="duration-error"
              />
              {state.errors?.duration && (
                <p id="duration-error" className="text-sm text-destructive mt-1">{state.errors.duration.join(", ")}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="travelDates" className="font-semibold">Travel Dates</Label>
            <Input
              id="travelDates"
              name="travelDates"
              placeholder="e.g., December 10-20, 2024 or Mid-November"
              className="mt-1"
              aria-describedby="travelDates-error"
            />
            {state.errors?.travelDates && (
              <p id="travelDates-error" className="text-sm text-destructive mt-1">{state.errors.travelDates.join(", ")}</p>
            )}
          </div>

          <div>
            <Label htmlFor="region" className="font-semibold">Preferred Region (Optional)</Label>
            <Input
              id="region"
              name="region"
              placeholder="e.g., Bagan, Inle Lake, Mandalay"
              className="mt-1"
              aria-describedby="region-error"
            />
            {state.errors?.region && (
               <p id="region-error" className="text-sm text-destructive mt-1">{state.errors.region.join(", ")}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch">
          <SubmitButton />
        </CardFooter>
      </form>

      {state.itinerary && (
        <div className="p-6 border-t">
          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle className="font-semibold text-green-700">Your Personalized Itinerary</AlertTitle>
            <AlertDescription className="mt-2 text-sm text-foreground whitespace-pre-wrap prose">
              {state.itinerary}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}
