import ExpandableImage from "components/Setup/ExpandableImage";
import SetupOptionsClear from "components/Setup/Options/Clear";
import { SettingUpTheEnvironment } from "components/Setup/SettingTheEvironment";
import SetupOptions from "components/Setup/SetupOptions";

export const items = [
  {
    id: 1,
    step: 'Step 1 - SadAlien Clear Start',
    title: 'Download or Clone the repository',
    description:
      `To download or clone the "Sad Alien" project from GitHub, first navigate to the repository page on the GitHub website. On the page, click the green "Code" button and select "Download ZIP" if you want to download a copy of the project to your local machine, or select "Open with GitHub Desktop" if you want to clone the project. If you choose to clone the project, you'll need to have the GitHub Desktop application installed on your computer. Once the project is open in the GitHub Desktop application, choose where you want to save it on your local machine and clone the repository. Remember to regularly fetch and pull changes from the main branch to keep your local copy up-to-date with the original repository. By following these steps, you should be able to easily download or clone the "Sad Alien" project from GitHub and start working on it on your local machine.`,
    icon: 'https://i.ibb.co/bv4v7pC/rocket-icon.png',
    additionalDetails: <SetupOptionsClear />
  },
  {
    id: 2,
    step: 'Step 2 - SanityIo, Vercel and .env files',
    title: 'Setting up the environment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.',
    icon: 'https://i.ibb.co/KhQNPqc/gear-icon.png',
    additionalDetails: <SettingUpTheEnvironment />

  },
  {
    id: 3,
    step: 'Step 3 - Vercel Deployment',
    title: 'Deploying the project',
    description:
      `Deploying a project can be a complex process, but with the right tools and platform, it can be streamlined and made much simpler. One popular option for deploying web applications is Vercel, a cloud platform that offers a range of features to make deployment and management easier.Vercel offers a number of deployment options, including automatic deployments based on changes to your Git repository, manual deployments triggered by your team, and preview deployments for testing and review. You can also set up custom domains and SSL certificates to ensure that your application is accessible to users securely.`,
    icon: 'https://i.ibb.co/kXV2sp1/flags-icon.png',
    additionalDetails: <ExpandableImage src="https://via.placeholder.com/400x300"
      alt="Example image"
      width={400}
      height={300} />,
  },
  {
    id: 4,
    step: 'Step 4 - Ready to develop',
    title: 'Ready to go',
    description:
      `The Sad Alien template for Next.js and Sanity.io is designed to simplify web application development for users. With its pre-configured features, ease of use, and integrations with popular tools and services, Sad Alien allows developers to focus on creating high-quality web applications without worrying about the underlying infrastructure. The template also emphasizes building strong relationships with the local community, maintaining an open mind and sense of purpose, and staying motivated to create positive change in the world of technology.`,
    icon: 'https://i.ibb.co/fCTBSX9/code-icon.png',
    additionalDetails: <SetupOptions />,
  },
];
