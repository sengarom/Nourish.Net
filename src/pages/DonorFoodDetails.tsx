import * as React from 'react';
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea"; 
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import { Label } from "@/components/ui/label"; 
import { Card, CardContent } from "@/components/ui/card"; 

const DonorFoodDetails = () => {
  const navigate = useNavigate();
  
  // Form state
  const [foodCategory, setFoodCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("servings");
  const [expiryDate, setExpiryDate] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);

  const handleBack = () => {
    navigate('/donate');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!foodCategory || !foodName || !quantity || !expiryDate) {
      alert("Please fill in all required fields.");
      return;
    }

    // For prototype: just log the data and proceed
    const formData = {
      foodCategory: foodCategory === "other" ? otherCategory : foodCategory,
      foodName,
      description,
      quantity,
      quantityUnit,
      expiryDate,
      photos: photos ? Array.from(photos).map((file: File) => file.name) : [] // Added type for file
    };
    
    console.log("Food details submitted:", formData);
    
    // Navigate to pickup scheduling page
    navigate('/donate/pickup-scheduling');
  };

  const foodCategories = [
    { value: "cooked", label: "Cooked Meals", description: "e.g., Leftover Biryani, Curry & Rice" },
    { value: "raw", label: "Raw Ingredients", description: "e.g., Vegetables, Fruits, Grains, Meat/Poultry" },
    { value: "packaged", label: "Packaged Goods", description: "e.g., Biscuits, Cereal, Canned Food, Instant Noodles" },
    { value: "baked", label: "Baked Goods", description: "e.g., Bread, Pastries, Cakes" },
    { value: "other", label: "Other", description: "Please specify below" }
  ];

  const quantityUnits = [
    { value: "servings", label: "Servings (for X people)" },
    { value: "kg", label: "Kilograms (kg)" },
    { value: "g", label: "Grams (g)" },
    { value: "items", label: "Number of Items" }
  ];

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
            Back to NGO Selection
          </Button>
          
          {/* Progress Indicator */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Step 2 of 3</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What food would you like to donate?
          </h2>
          <p className="text-lg text-gray-600">
            Please provide details to help charities prepare.
          </p>
        </div>

        {/* Form Section */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Food Category */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Food Category *</Label>
                <RadioGroup value={foodCategory} onValueChange={setFoodCategory}>
                  {foodCategories.map((category) => (
                    <div key={category.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <RadioGroupItem value={category.value} id={category.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={category.value} className="font-medium cursor-pointer">
                          {category.label}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                
                {foodCategory === "other" && (
                  <Input
                    placeholder="Please specify the food category"
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>

              {/* Food Item Name */}
              <div className="space-y-2">
                <Label htmlFor="foodName" className="text-base font-semibold">Food Item Name(s) *</Label>
                <Input
                  id="foodName"
                  placeholder="e.g., Chicken Biryani, Mixed Vegetables, Bread Loaves"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  required
                />
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-semibold">Detailed Description</Label>
                <Textarea
                  id="description"
                  placeholder="e.g., Vegetarian; Contains nuts; Prepared fresh today; Unopened packets; 5kg of potatoes"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
                <p className="text-sm text-gray-600">
                  Please mention ingredients, allergens, preparation date, and any special notes.
                </p>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Quantity *</Label>
                <div className="flex gap-3">
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="flex-1"
                    required
                    min="1"
                  />
                  <select
                    value={quantityUnit}
                    onChange={(e) => setQuantityUnit(e.target.value)}
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {quantityUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Expiry Date */}
              <div className="space-y-2">
                <Label htmlFor="expiryDate" className="text-base font-semibold">Use By / Best Before Date *</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-sm text-orange-800 font-medium">
                    ⚠️ Food must be non-expired and safe for consumption.
                  </p>
                </div>
              </div>

              {/* Upload Photos */}
              <div className="space-y-2">
                <Label htmlFor="photos" className="text-base font-semibold">Upload Photos (Optional, but Recommended)</Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setPhotos(e.target.files)}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <p className="text-sm text-gray-600">
                  Photos help charities understand the food condition and quantity.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold"
                >
                  Schedule Pickup
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorFoodDetails;