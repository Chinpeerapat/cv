import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Peerapat Chiaprasert",
  initials: "PC",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok,+Thailand",
  about:
    "Proven leader with 8+ years of experience in tech, e-commerce, and F&B, driving strategic planning, project management, and operations.",
  summary:
    "As a Country General Manager and Head of Business, I have a track record of successfully launching and scaling businesses like GrabFood, GrabKitchen, and TiffinLabs in Thailand. I specialize in go-to-market strategy, building high-performing teams, forging strategic partnerships, and driving growth and profitability through data-driven decisions.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "peerapat.chiaprasert@gmail.com",
    tel: "+66866246630",
    social: [
      {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/chpeerapat",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Thammasat University",
      degree: "Bachelor's in Accounting (International Program)",
      start: "2011",
      end: "2014",
    },
  ],
  work: [
    {
      company: "TiffinLabs",
      link: "",
      badges: ["Bangkok, Thailand"],
      title: "Country General Manager",
      logo: "",
      start: "2022",
      end: "2023",
      description: [
        "Expanded TiffinLabs' 100 storefronts of delivery-centric brand in Thailand. Built and directed entire business team, namely, marketing, business development, and operations, to ensure alignment with company's vision.",
        "Crafted product value proposition to launch 7 delivery-focused food brands, defining brand roadmap to ensure product-market fit while setting up process to capture changing trends.",
        "Improved GMV by 20% on monthly basis, streamlining the company's marketing plans with the delivery platform to maximize NPD sales, and scheduling regular product enhancements.",
        "Reduced COGS by 15% from lower purchase price and logistic costs, initiating fulfillment partnership with distributor, crafting and negotiating terms, achieving target price, quality and faster sourcing process",
      ],
    },
    {
      company: "Grab",
      link: "",
      badges: ["Bangkok, Thailand"],
      title: "Head, GrabKitchen",
      logo: "",
      start: "2019",
      end: "2022",
      description: [
        "Established GrabKitchen as the largest cloud kitchen network in Thailand, developing an asset-lite model and securing a deal with a top F&B company (CRG), resulting in a scalable and profitable business model.",
        "Achieved 20% GMV uplift and 4x ROI from initiating and managing marketing campaigns, including thematic campaigns, strategic partnerships, and JBPs.",
        "Developed feasibility model to ensure profitability of individual kitchens and calculate payback period, constructing the model using past performance and location-specific demand trends data",
        "Maintained high retention rate at all kitchen locations with 90% occupancy and <10% churn rate by using effective selection and leading data-driven sales pitches from analysis of geo-specific data points",
        "Developed and maintained a portfolio valued at more than 400 mn THB in annual GMV, which included over 120 food and beverage accounts, including street vendors, local chains, QSRs, and strategic partners.",
      ],
    },
    {
      company: "Grab",
      link: "",
      badges: ["Bangkok, Thailand"],
      title: "Operations Manager, GrabFood | Special Project Lead, GrabBike & GrabExpress",
      logo: "",
      start: "2017",
      end: "2019",
      description: [
        "Propelled GrabFood to be market leader with 10k+ completed daily orders within 8 months and established key functions including fleet management, business development, revenue collection, and customer services",
        "Developed and executed a highly impactful go-to-market e-commerce strategy for prominent national brands such as MK, Starbucks, After You, Tim Hortons, CRG, MINOR, and other top F&B players.",
        "Formed and fostered high-performing teams across different functions and locations, overseeing more than 100 staff members, including 7 direct reports.",
        "Contributed 10% GMV increment from launching 3PL services, Collaborating with B2B sales team to assess market opportunities, creating commercial terms, leading sales pitch and securing BigC and Villa Market",
      ],
    },
    {
      company: "Ipsos Business Consulting",
      link: "",
      badges: ["Bangkok, Thailand"],
      title: "Associate Consultant",
      logo: "",
      start: "2016",
      end: "2017", 
      description: [
        "Formulated e-payment business model and selected strategic partners to ensure a successful launch.",
        "Crafted a go-to-market strategy for a Thai financial institution, facilitating the launch of e-commerce business.",
      ],
    },
    {
      company: "EY (Ernst & Young)",
      link: "",
      badges: ["Bangkok, Thailand"], 
      title: "Consultant",
      logo: "",
      start: "2015",
      end: "2016",
      description: [
        "Developed costing model to identify service costs, addressing profitability issues for Ministry of Public Health.",
        "Improved efficiency for listed manufacturing company using business process improvement framework.",  
      ],
    },
  ],
  skills: [
    "Strategic Planning & Execution",
    "Project Management", 
    "Team Leadership",
    "P&L Management",
    "Go-to-Market Strategy",
    "e-Commerce Strategy",
  ],
  projects: [
    {
      title: "GrabFood Thailand Launch",
      techStack: [
        "Go-to-Market Strategy",
        "Team Building",
        "Strategic Partnerships",  
      ],
      description:
        "Spearheaded the successful launch of GrabFood in Thailand, rapidly growing to market leadership with 10,000+ daily orders in 8 months.",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "GrabKitchen Thailand",
      techStack: [
        "Market Research", 
        "Business Model Development",
        "Strategic Partnerships",
      ],
      description: 
        "Pioneered GrabKitchen in Thailand, expanding to become the largest cloud kitchen network with 120+ F&B accounts and 400M+ THB annual GMV.",
      logo: "",
      link: {
        label: "",
        href: "",  
      },
    },
    {
      title: "TiffinLabs Thailand Launch",
      techStack: [
        "Cross-Functional Leadership",
        "Data-Driven Optimization", 
        "Strategic Negotiations",
      ],  
      description:
        "Orchestrated the seamless launch of TiffinLabs' delivery-centric brands in Thailand, swiftly scaling to 100 storefronts with 20% monthly GMV growth.",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;