import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  net,
  redux,
  tailwind,
  nodejs,
  mongodb,
  es,
  git,
  figma,
  docker,
  k8s,
  golang,
  meta,
  starbucks,
  ospri,
  z,
  wipster,
  datacom,
  infosoft,
  xero,
  osprilogo,
  cashrewards,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cube,
  vic,
  aws,
  microsoft,
  zpump,
  xeroapp,
  immigationnz,
  wipsterscreenshot,
  cashrewardsscreenshot,
  ospriscreenshot,
  awslogo,
  azurelogo,
  pylogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "educations",
    title: "Educations",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "CV",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Integration",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "aws",
    icon: awslogo,
  },
  {
    name: "azure",
    icon: azurelogo,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "dot net",
    icon: net,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Elastic Search",
    icon: es,
  },
  {
    name: "Go Lang",
    icon: golang,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: pylogo,
  },
];

const experiences = [
  {
    title: "Dev Lead & Senior Software Engineer",
    company_name: "Ospri",
    website: "https://portal.ospri.co.nz/",
    icon: osprilogo,
    iconBg: "#383E56",
    date: "November 2021 - Present",
    points: [
      "Mentoring, guiding and leading the technical team.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Working on core platform using .NET 7.",
      "Working on front-end application using Angular JS 16.",
      "Being involved in design and architecture of Greenfield applications.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Ospri",
    website: "https://portal.ospri.co.nz/",
    icon: osprilogo,
    iconBg: "#383E56",
    date: "November 2019 - November 2021",
    points: [
      "Designing and implementing microservice products with newAPIs on .NET6 & 7.",
      "Architecting and automating production and non-production environments through Terraform and Helm.",
      "Setting up CI/CD pipeline on Azure Devops.",
      "Design and roll out an Event Driven Microservice Architecture using .Net Postgress, Kubernetes.",
      "Dockerising legacy applications and setting up zero downtime deployment",
      "Design and rebuild new database models using SQL and postgress",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Cashrewards",
    website: "https://www.cashrewards.com.au/",
    icon: cashrewards,
    iconBg: "#FFFFFF",
    date: "September 2022 - Febuary 2023",
    points: [
      "Building microservice-based products with new APIs on .NET 6 & 7.",
      "Design and implement Outboxing pattern.",
      "Designing and implementing a consumer app to sync legacy with new system.",
      "Setting up integration test projects on existing and new services.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Z Energy",
    website: "https://www.z.co.nz/",
    icon: z,
    iconBg: "#FFFFFF  ",
    date: "March 2019 - Nov 2019",
    points: [
      "Implementing a number of new APIs on .NET Core for a greendfield project.",
      "Implementing Mule Soft applications for integration between applications.",
      "Setting up CI/CD pipeline on Azure Devops.",
      " Using Kubernetes for docker management.",
      "Being involved in design and architecture of the project",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Wipster",
    website: "https://www.wipster.io/",
    icon: wipster,
    iconBg: "#FFFFFF",
    date: "December 2018 - March 2019",
    points: [
      "Design and architectural decisions for new implementations and services.",
      "Implementing a new features in legacy and new applications.",
      "Setting up test framework, CI/CD pipelines and test servers.",
      "Upgrading .NET framework to .NET Core 2.1.",
    ],
  },
  {
    title: "Security Architect",
    company_name: "Xero",
    website: "https://www.xero.com/",
    icon: xero,
    iconBg: "#FFFFFF",
    date: "September 2018 - December 2018",
    points: [
      "Reviewing infrastructure architecture plan.",
      "Ejecuted number of penetration testing using Burpsuite.",
      "Writing security report of new and ejisting projects.",
      "Being involved in software security architectural decisions.",
      "Using AWS ARN and IAM policies to specify a resource security management.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Xero",
    website: "https://www.xero.com/",
    icon: xero,
    iconBg: "#FFFFFF",
    date: "September 2016- September 2018",
    points: [
      "Developing and establishing number Web APIs application.",
      "Converting WCF services to REST APIs.",
      "Migrate all our WCF,Web API, MVC Windows Services into AWS.",
      "Setting up CI/CD pipelines.",
      "Developing APIs and Deployment scripts using Python.",
      "Developing lambda function on AWS using Python and Node js.",
      "Managing our own infrastructure and creating development environment.",
      "Creating AWS services using Terraform and CouldFormation.",
      "Upgrading .NET platforms to .NET Core 2.0.",
      "Establishing Event sourcing platform using Event Store to broad cast.",
      "Millions of events out to other teams.",
      "Dockerised .NET Core micro-services apps using Jenkins.",
      "On call duty for production applications.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Datacom",
    website: "https://datacom.com/",
    icon: datacom,
    iconBg: "#002470",
    date: "December 2012 - September 2016",
    points: [
      "• Develop enhancements to online application using MVC framework.",
      "Creating automation test frameworks.",
      "Creating a deployment pipeline for the release process.",
      "Maintained and upgraded front-end frameworks.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Infosoft",
    website: "https://www.infosoft.co.nz/",
    icon: infosoft,
    iconBg: "#FFFFFF",
    date: "December 2011 - December 2012",
    points: [
      "Improving the legacy product using Visual FoxPro, MySQL, SQL and .NET",
      "Bug fixing, Deployment and unit testing on legacy application"
    ],
  },
];

const educations = [
  {
    certificate:
      "Bachelor of Science, Majoring in Computer Science",
    institution: "Victoria University of Wellington",
    year: "2013",
    image: vic,
  },
  {
    certificate:
      "AWS Certified Developer - Associate",
    institution: "Amazon Web Services",
    year: "2018",
    image: aws,
  },
  {
    certificate:"MCPS: Microsoft Certified Professional",
    institution: "Microsoft",
    year: "2015",
    image: microsoft,
  },
];

const projects = [
  {
    name: "MyOspri",
    description:
      "A web-based platform for farmers to manage their farms, animals, and related activities. Features include registration, animal movements, health incidents, and third-party integration. Built using microservices, event-driven .Net, Angular JS, Elastic Search for search, Service Bus for data migration and CRM integration, Signalr for real-time events, and Outbox Pattern for reliable event publishing.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
      {
        name: "elasticssearch",
        color: "orange-text-gradient",
      },
      {
        name: "microservices",
        color: "yellow-text-gradient",
      },
    ],
    image: ospriscreenshot,
    source_code_link: "https://myospri.co.nz/",
  },
  {
    name: "Cashrewards",
    description:
    "Cashrewards is the leading Australian cashback platform where members shop online or in store to receive cashback and discounts on their everyday purchases. I was involved with migrating services from monolithic architecture to microservices and taking advantage of AWS services.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "cosmosdb",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "microservices",
        color: "yellow-text-gradient",
      },
    ],
    image: cashrewardsscreenshot,
    source_code_link: "https://www.cashrewards.com.au/",
  },
  {
    name: "Z Pump",
    description:
      "An integration platform to sync all Z petrol station transactions and send calculated stack or used credits to accounting system. The .Net application with MuleSoft integration with POS (point of sale) system to synce the data.",
    tags: [
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: "MuleSoft",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: zpump,
    source_code_link: "https://www.z.co.nz/products-and-services/rewards-promotions/pumped/",
  },
  {
    name: "Xero",
    description:
      "I was involved in one of the Platform teams at Xero. Our project were range of migrating our services to AWS, writing number new APIs and background services, implementing a number of Lambda functions, dockerising many applications and many more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "eventstore",
        color: "pink-text-gradient",
      },
    ],
    image: xeroapp,
    source_code_link: "https://xero.com/",
  },
  {
    name: "Wipster",
    description:
    "An innovative video collaboration platform featuring a robust .Net backend and an Angular JS frontend. This dynamic solution empowers users to collaboratively edit and create videos, offering a wide array of features for seamless content production.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: wipsterscreenshot,
    source_code_link: "https://www.immigration.govt.nz/about-us/our-online-systems/applying-for-a-visa-online/immigration-online",
  },
  {
    name: "Immigration Online",
    description:
      "Developing a cutting-edge web platform for New Zealand immigration, enabling convenient online visa applications across diverse categories. The platform incorporates advanced image recognition for person identification, passport validation, and seamless integration with existing immigration systems.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: immigationnz,
    source_code_link: "https://www.immigration.govt.nz/about-us/our-online-systems/applying-for-a-visa-online/immigration-online",
  },
];

export { services, technologies, experiences, educations, projects };
