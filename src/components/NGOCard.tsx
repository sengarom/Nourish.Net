import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NGO {
  id: string;
  name: string;
  distance: string;
  description: string;
}

interface NGOCardProps {
  ngo: NGO;
  onSelect: () => void;
}

const NGOCard = ({ ngo, onSelect }: NGOCardProps) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log(`Selected NGO: ${ngo.id} - ${ngo.name}`);
    onSelect();
    navigate('/donate/food-details');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {ngo.name}
            </h3>
            <p className="text-sm text-green-600 font-medium mb-2">
              {ngo.distance}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {ngo.description}
            </p>
          </div>
          
          <div className="md:ml-6">
            <Button
              onClick={handleSelect}
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-2"
            >
              Select
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NGOCard;
