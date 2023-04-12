import React from "react";
import ExpandableImage from "./ExpandableImage";

const steps = [
  {
    title: "Sanity Setup and Keys",
    imageSrc: "https://i.ibb.co/rQxD7qL/create-Sanity-Project1.png",
    imageAlt: "Node.js logo",
    description:
      "On Sanity.io page, after you have created your account you can find the create project button.",
    image2Src: "https://i.ibb.co/SndNT4j/create-Sanity-Project.png",
    image2Alt: "Node.js logo",
    description2:
      "You can crete the project using the following methods above, we recommend you use the CLI for this.",
  },
];

export const SettingUpTheEnvironment = () => (
  <ul className="space-y-4">
    {steps.map((step, index) => (
      <li key={index} className="flex items-start py-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
          {index + 1}
        </div>
        <div >
          <h3 className="font-bold">{step.title}</h3>
          <div className="flex-col items-center space-x-2 mt-2">
            <ExpandableImage
              width={600}
              height={400}
              src={step.imageSrc}
              alt={step.imageAlt}
            />
            <div>
              <p>{step.description}</p>
            </div>
            <ExpandableImage
              width={600}
              height={400}
              src={step.image2Src}
              alt={step.image2Alt}
            />
            <p>{step.description2}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);