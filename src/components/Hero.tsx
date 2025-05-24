import { ActionCard } from "./ActionCard";
import { ChefHat, Building } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Nourish.net
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connecting surplus food with those who need it most
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <ActionCard
            title="I Want to Donate"
            subtitle="Share your surplus food"
            icon={<ChefHat className="w-12 h-12" />}
            color="green"
            href="/donate"
            description="Restaurants, stores, and individuals can easily donate excess food"
          />
          
          <ActionCard
            title="I Represent a Charity"
            subtitle="Find food for your organization"
            icon={<Building className="w-12 h-12" />}
            color="blue"
            href="/charity"
            description="NGOs and charities can access available food donations"
          />
        </div>

        {/* Learn More Link */}
        <div className="animate-fade-in">
          <a 
            href="/about" 
            className="inline-block text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm underline decoration-dotted underline-offset-4"
          >
            Learn more about how it works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;