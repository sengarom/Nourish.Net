import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const DonorPickupScheduling = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form state for scheduling
  const [pickupDate, setPickupDate] = useState("");
  const [timeWindow, setTimeWindow] = useState("");

  // Mock data - in a real app, this would come from state management or URL params
  const donationSummary = {
    ngoName: "Helping Hands Foundation",
    foodName: "Chicken Biryani",
    foodCategory: "Cooked Meals",
    quantity: "20",
    quantityUnit: "servings",
    description: "Vegetarian biryani prepared fresh today. Contains nuts.",
    expiryDate: "2025-05-26"
  };

  const timeSlots = [
    { value: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (1:00 PM - 4:00 PM)" },
    { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" }
  ];

  const handleBack = () => {
    navigate('/donate/food-details');
  };

  const handleConfirmDonation = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!pickupDate || !timeWindow) {
      toast({
        title: "Missing Information",
        description: "Please select both a pickup date and time window.",
        variant: "destructive"
      });
      return;
    }

    // For prototype: simulate donation confirmation
    const donationConfirmation = {
      ...donationSummary,
      pickupDate,
      timeWindow,
      confirmationId: `DN${Date.now()}`
    };
    
    console.log("Donation confirmed:", donationConfirmation);
    
    // Show success message
    toast({
      title: "Donation Confirmed! 🎉",
      description: "Thank you for your generosity! The charity will contact you soon to coordinate pickup.",
    });

    // Navigate to homepage after a brief delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Get today's date for min date constraint
  const today = new Date().toISOString().split('T')[0];
  
  // Get max date (7 days from today)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Food Details
          </Button>
          
          {/* Progress Indicator */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Step 3 of 3</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Schedule Your Food Pickup
          </h2>
          <p className="text-lg text-gray-600">
            Please select a convenient time for the charity to collect your donation.
          </p>
        </div>

        {/* Donation Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Donation Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700">Selected Charity</Label>
                <p className="text-gray-900">{donationSummary.ngoName}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700">Food Item</Label>
                <p className="text-gray-900">{donationSummary.foodName}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700">Category</Label>
                <p className="text-gray-900">{donationSummary.foodCategory}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700">Quantity</Label>
                <p className="text-gray-900">{donationSummary.quantity} {donationSummary.quantityUnit}</p>
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-700">Description</Label>
              <p className="text-gray-900">{donationSummary.description}</p>
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-700">Use By Date</Label>
              <p className="text-gray-900">{new Date(donationSummary.expiryDate).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>

        {/* Scheduling Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleConfirmDonation} className="space-y-6">
              {/* Pickup Date */}
              <div className="space-y-2">
                <Label htmlFor="pickupDate" className="text-base font-semibold">Preferred Pickup Date *</Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  min={today}
                  max={maxDateStr}
                  required
                  className="w-full"
                />
                <p className="text-sm text-gray-600">
                  Select a date within the next 7 days.
                </p>
              </div>

              {/* Time Window */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Preferred Pickup Time Window *</Label>
                <RadioGroup value={timeWindow} onValueChange={setTimeWindow}>
                  {timeSlots.map((slot) => (
                    <div key={slot.value} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <RadioGroupItem value={slot.value} id={slot.value} />
                      <Label htmlFor={slot.value} className="font-medium cursor-pointer flex-1">
                        {slot.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Important Note */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>📞 Next Steps:</strong> The charity will contact you within 24 hours to confirm the pickup details and coordinate with you.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold"
                >
                  Confirm Donation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorPickupScheduling;