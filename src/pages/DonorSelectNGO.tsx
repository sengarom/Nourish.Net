import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NGOCard from "@/components/NGOCard";

const DonorSelectNGO = () => {
  const navigate = useNavigate();

  const ngos = [
    {
      id: 'ngo1',
      name: 'Helping Hands Foundation',
      distance: '2.5 km away',
      description: 'Serves daily meals to the homeless and provides shelter services.'
    },
    {
      id: 'ngo2',
      name: 'Community Kitchen Collective',
      distance: '5 km away',
      description: 'Provides food for underprivileged children and families in need.'
    },
    {
      id: 'ngo3',
      name: 'Hope Center',
      distance: '3.8 km away',
      description: 'Supports local orphanages and elderly care facilities with regular meals.'
    },
    {
      id: 'ngo4',
      name: 'Nourish Together',
      distance: '7.2 km away',
      description: 'Distributes surplus food to various community centers and schools.'
    },
    {
      id: 'ngo5',
      name: 'Safe Haven Food Bank',
      distance: '4.1 km away',
      description: 'Emergency food assistance for families facing food insecurity.'
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleSelectNGO = (ngoId: string) => {
    console.log(`Selected NGO: ${ngoId}`);
    // For prototype: just log the selection
    // In a real app, this would store the selection and navigate to food details
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Button>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Where would you like to donate?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Here are some nearby charities and social centers.
          </p>
          <p className="text-sm text-gray-500">
            Showing organizations near Delhi, India
          </p>
        </div>

        {/* NGO List Section */}
        <div className="space-y-4">
          {ngos.map((ngo) => (
            <NGOCard
              key={ngo.id}
              ngo={ngo}
              onSelect={() => handleSelectNGO(ngo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorSelectNGO;
