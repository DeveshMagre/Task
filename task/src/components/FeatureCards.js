import { Receipt } from 'lucide-react';
import Group from '../Images/Group.png';

function FeatureCards() {
  const features = [
    {
      title: "People Host Meals",
      description:
        "Sint incididunt laboris consectetur eu mollit excepteur esse adipisicing eiusmod voluptate voluptate. Elit dolore duis elit magna magna tempor",
    },
    {
      title: "People Host Meals",
      description:
        "Sint incididunt laboris consectetur eu mollit excepteur esse adipisicing eiusmod voluptate voluptate. Elit dolore duis elit magna magna tempor",
    },
    {
      title: "People Host Meals",
      description:
        "Sint incididunt laboris consectetur eu mollit excepteur esse adipisicing eiusmod voluptate voluptate. Elit dolore duis elit magna magna tempor",
    },
  ];

  return (
    <div className="container py-8 mt-16 px-6 md:px-52">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden bg-white shadow-lg rounded-lg h-52 w-full">
            <div className="p-6">
              <div className="flex flex-col gap-2">
                <div className=" bg-blue-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <img className="h-6 w-6" src={Group} alt="Group" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
