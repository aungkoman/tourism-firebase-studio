import TripPlannerForm from "./TripPlannerForm";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

export default function TripPlannerPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="AI Powered Trip Planner"
        subtitle="Craft your perfect Myanmar adventure with our intelligent itinerary generator. Just share your travel style, and let us do the planning!"
      />
      <TripPlannerForm />
    </div>
  );
}
