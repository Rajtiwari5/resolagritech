/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, AdvantageParam, FormulationComponent, FieldTrialStep, AwardItem } from './types';

export const ABOUT_US_CONTENT = {
  companyName: "Resol Agritech Private Limited",
  headline: "Turning Desert Sands into Fertile, Cultivable Havens",
  pitch: "Using pioneering Desert Soilification Technology, we engineer unique bio-polymeric formulations that bundle loose desert sand into capillary-rich, water-retaining agricultural soils. By addressing critical desertification and moisture-loss challenges, we empower arid-zone farmers, reclaim degraded lands, and catalyze climate-resilient farming.",
  vision: "To establish a global standard in green soil engineering and arid-land restoration, converting harsh desert regions into productive food belts while restoring groundwater balances and soil microenvironments.",
  mission: "To manufacture cost-effective, high-impact soilification agents, provide turnkey agricultural consulting for desert regions, and empower marginal farming communities with science-backed, climate-resilient agritech solutions.",
  metrics: [
    { label: "Water Holding Capacity", value: "75%", description: "Enhances moisture retention inside sand pores" },
    { label: "Abrasion Resistance", value: "31x", description: "Protects sand structures against wind erosion and drifts" },
    { label: "Evaporation Resistance", value: "50%", description: "Halves rapid loss of water to extreme desert sun" },
    { label: "Soil Aggregation", value: "76%", description: "Transforms single-grained sand into structured soil matrices" }
  ]
};

export const REVENUE_AND_MARKET = {
  sources: [
    { source: "Product Sales", share: 75, details: "Sale of our proprietary RESOL concentrate in liquid & powder formulations to farmers and distributors." },
    { source: "Service Contracts", share: 15, details: "Turnkey soilification applications, soil health monitoring, and system optimization on large desert sites." },
    { source: "Training & Consulting", share: 5, details: "Field application certifications and training workflows for cooperative agricultural blocks, CSR and NGOs." },
    { source: "Carbon Credits", share: 5, details: "Generation and sale of validated carbon offsets via carbon sequestration in reclaimed lands." }
  ],
  markets: {
    primary: "Farming Communities / Individual Cultivators seeking high crop yields in moisture-constrained arid sand zones.",
    secondary: "Government Afforestation Projects, Non-Governmental Organizations (NGOs), Corporate CSR Projects on environmental restoration, and Global Climate Finance Funds."
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "diksha-kumari",
    name: "Diksha Kumari",
    role: "Founder",
    degree: "Founder | M.Sc. & Ph.D. Scholar, Department of Microbiology",
    bio: [
      "Diksha Kumari is the Founder and a key driving force behind the development and commercialization of innovative agricultural technologies aimed at sustainable farming and environmental restoration. She holds a Master of Science (M.Sc.) degree and has extensive experience in product development, technology validation, field implementation, and stakeholder engagement.",
      "She plays a pivotal role in the end-to-end development of technologies from laboratory research to field-scale deployment, ensuring that scientific innovations are translated into practical solutions for farmers and industry. Her core responsibilities include product development, procurement and management of raw materials, coordination of field trials, quality assurance, and technology optimization under real-world conditions."
    ],
    avatarSeed: "diksha",
    socials: {
      email: "diksha.kumari@resolagritech.com",
      linkedin: "https://linkedin.com/in/diksha-kumari-resol"
    }
  },
  {
    id: "dr-akhil-agrawal",
    name: "Dr. Akhil Agrawal, Ph.D.",
    role: "Co-Founder",
    degree: "Co-Founder | Environmental Scientist, Entrepreneur, Startup Mentor & Innovation Strategist",
    bio: [
      "Dr. Akhil Agrawal is an accomplished Environmental Scientist, Entrepreneur, Startup Mentor, and Innovation Strategist with extensive experience in translating scientific research into commercially viable technologies for sustainable agriculture, environmental management, and rural development.",
      "As Co-Founder, he provides strategic leadership in technology innovation, business development, stakeholder engagement, and resource mobilization. He has played a central role in the conceptualization, design, and development of innovative technologies, transforming research ideas into scalable products and solutions with societal and environmental impact. His expertise spans environmental biotechnology, sustainable agriculture, climate-resilient technologies, and ecosystem restoration.",
      "Dr. Agrawal actively leads marketing and sales strategies, fostering collaborations with farmers, Farmer Producer Organizations (FPOs), government agencies, industries, and Corporate Social Responsibility (CSR) initiatives. His strong network within the agricultural and environmental sectors has enabled successful technology dissemination and adoption among end-users. With a vision of creating sustainable and impactful solutions, he continues to bridge the gap between research, industry, and society."
    ],
    avatarSeed: "akhil",
    socials: {
      email: "akhil.agrawal@curaj.ac.in",
      linkedin: "https://linkedin.com/in/dr-akhil-agrawal"
    }
  },
  {
    id: "anjana-sanganeria",
    name: "Ms. Anjana Sanganeria",
    role: "Business Development & Marketing Lead",
    degree: "Business Development & Marketing Lead | Master's Degree",
    bio: [
      "Ms. Anjana Sanganeria is a dynamic professional with a Master's degree and expertise in marketing, business development, and startup growth strategies. She plays a key role in driving the commercial expansion and market positioning of innovative agricultural technologies developed by Resol.",
      "As the Business Development and Marketing Lead, she is responsible for identifying new market opportunities, building strategic partnerships, and developing customer engagement initiatives to accelerate the adoption of Resol's products and services. Her work focuses on creating sustainable business models, expanding market reach, and strengthening relationships with farmers, agribusinesses, government agencies, and industry stakeholders."
    ],
    avatarSeed: "anjana",
    socials: {
      email: "anjana.sanganeria@resolagritech.com"
    }
  }
];

export const TECHNOLOGY_DETAILS = {
  problemDescription: [
    {
      title: "Low Water Holding Capacity",
      text: "Desert sand has minimal capillary surface area, allowing water to immediately drain downward due to gravitational pull or rapidly escape as vapour from the top layers, leaving roots dehydrated."
    },
    {
      title: "Loose, Single-Grained Pores",
      text: "Single large-grained sand particles lack binding organic carbon or clay aggregates, which limits standard soil moisture flow and eliminates the natural capillary networks crucial for nutrient retention."
    },
    {
      title: "High Evaporation & Thermal Stress",
      text: "Exceedingly high day temperatures and direct sun radiation accelerate moisture transit, and create severe salt accretion issues, rendering standard seeds unviable."
    },
    {
      title: "Wind Erosion & Sand Drift",
      text: "Unbounded fine particles are highly susceptible to wind shear, resulting in violent shifts in soil lines, burying emerging crops, and accelerating local desert expansion."
    }
  ],
  solutionExplainer: "Our Desert Soilification Technology overcomes these physical hurdles by preparing an organic polymer-crosslinker network. When sprayed or mixed into desert sand (even at tiny concentrations), it forms robust hydrogen and ionic bonds with the silicon-hydroxyl groups in the sand (Si-OH). This reaction glues individual sand particles together, leaving perfect capillary spaces that hold water like a sponge and prevent high-velocity wind drifts.",
  chemicalReaction: {
    title: "The Chemical Cross-linking Mechanism",
    equation1: "Polymer-OH + B(OH)₄⁻ + HO-Polymer === Polymer-O-B(OH)₂-O-Polymer + 2H₂O",
    equation2: "Si-OH + B(OH)₄⁻ → Si-O-B(OH)₃ + OH⁻ (Sand-Binding Linkage)",
    text: "At the 1X formulation baseline, we pair 1000 ppm Biopolymer (VAG) with 1.5 ppm of a safe, mineral Borate crosslinker. This initiates a network containing dual-action zones: polymer chains absorb water up to hundreds of times their dry volume, while borate molecules tie them down to the silica surfaces (Si-O-B bonds) to establish lasting aggregate integrity."
  },
  components: [
    { name: "Component A: Biopolymer Mainframe", role: "Water Retainer", description: "Long-chain organic bio-polymeric segments (VAG) that present highly hydrophilic hydroxyl (-OH) groups targeting instant water capture and hydration swelling." },
    { name: "Component B: Borate Crosslinker", role: "Structural Bridge", description: "Introduced as a trace chemical buffer (Borate ions) that pulls active hydroxyl groups into covalent networks, stabilizing the polymer against biodegredation." },
    { name: "Component C: Aggregate Facilitator", role: "Silica Anchoring Agent", description: "Secondary polymer chain elements that ensure high physical adhesion to sand grains, transforming single loose crystals into stable crumbs." }
  ]
};

export const COMPARATIVE_ADVANTAGES: AdvantageParam[] = [
  {
    parameter: "Advantageous Properties",
    resol: "Integrated Water Retention, Desert Soilification, and crumb-structured soil texture",
    pusa: "Basic Water Retention",
    sujlam: "Basic Water Retention",
    resolValue: 95,
    pusaValue: 40,
    sujlamValue: 40,
    description: "Resol actively changes the physical structure of sand to represent genuine fertile clay loam, unlike standard hydrogels that only swell locally."
  },
  {
    parameter: "Water Holding Capacity",
    resol: "75% (maintains perfect balanced root oxygenation)",
    pusa: "75% (locally high swelling)",
    sujlam: "74% (locally high swelling)",
    resolValue: 75,
    pusaValue: 75,
    sujlamValue: 74,
    description: "All agents absorb moisture, but Resol distributes it evenly within soil pore spaces, establishing capillary flows instead of single water blobs."
  },
  {
    parameter: "Abrasion Resistance (Wind protect)",
    resol: "31 times enhancement",
    pusa: "15 times enhancement",
    sujlam: "13 times enhancement",
    resolValue: 93,
    pusaValue: 45,
    sujlamValue: 39,
    description: "Determined via custom wind-tunnel testing. Resol blocks sand drift and erosion over 200% better than ordinary hydrogels."
  },
  {
    parameter: "Evaporation Resistance",
    resol: "50% reduction in water loss",
    pusa: "40% reduction in water loss",
    sujlam: "41% reduction in water loss",
    resolValue: 50,
    pusaValue: 40,
    sujlamValue: 41,
    description: "Reduces solar water drawing by physically capping trans-layer evaporation pathways."
  },
  {
    parameter: "Soil Particle Aggregation",
    resol: "76% aggregation rate (turns sand to aggregates)",
    pusa: "30% aggregation rate",
    sujlam: "35% aggregation rate",
    resolValue: 76,
    pusaValue: 30,
    sujlamValue: 35,
    description: "The percentage of sand particles converted into optimal agronomic soil crumbs (capillary aggregates)."
  },
  {
    parameter: "Wheat Crop Yield",
    resol: "1,120 kg per acre",
    pusa: "180 kg per acre",
    sujlam: "120 kg per acre",
    resolValue: 95,
    pusaValue: 16,
    sujlamValue: 11,
    description: "Observed under rigorous field tests in desert soil. Resol drives massive biomass due to stable nutrient-retaining complexes."
  },
  {
    parameter: "Unit Market Price",
    resol: "INR 840 per kg",
    pusa: "INR 1,250 per kg",
    sujlam: "INR 650 per kg",
    resolValue: 35, // Lower is better index
    pusaValue: 15,
    sujlamValue: 45,
    description: "Highly cost-effective. Resol is significantly cheaper to produce than standard polymer hydrogels like Pusa, while delivering vastly superior results."
  }
];

export const FIELD_TRIALS: FieldTrialStep[] = [
  {
    phase: "TRL-5",
    title: "Pilot Scale Field Testing",
    location: "Environmental Biotech Lab & Agricultural Grid, Rajasthan",
    crops: "Guar, Bajra, and Mung Bean crop lines",
    description: "Comprehensive controlled trials dedicated to establishing dilution thresholds, testing root phytotoxicity, and measuring erosion barriers under artificial wind-and-drainage conditions.",
    detailedSteps: [
      { label: "Step 1: Bioformulation Preparation", detail: "Washing and formulating components. Blending Biopolymer VAG with Borate crosslinker in large industrial tub. Activating the hydrophilic chain configuration." },
      { label: "Step 2: Sand Grid Layout Setup", detail: "Isolating test grids under heavy arid sandy environments. Dividing sections to contrast Treated vs Control sands." },
      { label: "Step 3: Uniform Mixing Technique", detail: "Applying liquid bio-formulation evenly into sand columns at a depth of 15-20cm, allowing binding networks to cure." },
      { label: "Step 4: Seed Bed Planting", detail: "Sowing Guar, Bajra, and Mung seeds evenly. Resolving localized hydration during planting." },
      { label: "Step 5: High Biomass Sprouting", detail: "Observing healthy, lush vertical shoot growth and stable capillary formation without sand crusts. Excellent root-matrix attachment." }
    ]
  },
  {
    phase: "TRL-6",
    title: "Real Field-Scale Trial",
    location: "Banseli Village, near Pushkar Desert Region, Rajasthan, India",
    crops: "Wheat (Indigenous variety indigenous to Rajasthan)",
    date: "November 2024 - April 2025",
    description: "Large-scale field validation conducted in extreme open desert sand dunes. Wheat crops were grown for the very first time in fine, high-wind arid sands.",
    detailedSteps: [
      { label: "Phase 1: Scale-up Soil Preparation", detail: "Formulating tonnes of Resol powder product on-site. Breaking down physical sand dunes and leveling fields with rakes." },
      { label: "Phase 2: Hydration Trenching", detail: "Digging and applying the Resol Formulation at root depth alongside initial irrigation, building a water-retaining clay-like layer in the sands." },
      { label: "Phase 3: Sowing Wheat-4079", detail: "Planting native Wheat-4079 seeds inside 1,000 sq. meters of experimental sand. Using 15 kg of native seeds." },
      { label: "Phase 4: Minimizing Water Cycle", detail: "Achieved full cultivation cycles using ONLY 3 irrigation rounds compared to 6 rounds required in normal soils, showing extreme water-saving efficiency." },
      { label: "Phase 5: Harvest and Bountiful Yield", detail: "Harvested in April 2025, producing 1,120 kg per acre of premium wheat grain—over 500% yield improvement over dry hydrogel baselines." }
    ]
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "bayer-fellowship",
    title: "Bayer Medha Fellowship Award",
    recipient: "Ms. Diksha Kumari",
    authority: "BAYER Group, India & Co-Sponsor Central University of Rajasthan",
    description: "Awarded to Ph.D. Scholar Ms. Diksha Kumari and her scientific guide Dr. Akhil Agrawal to complete breakthrough doctoral research on polymer interfaces in desert land restoration. Highly prestigious corporate-academic fellowship."
  },
  {
    id: "innovation-challenge",
    title: "1st Prize: National Innovation Challenge",
    recipient: "Resol Agritech Team",
    authority: "National Innovation & Start-up Council",
    description: "Recognized as the most promising agro-ecological startup invention, selected for its extraordinary potential to change degraded desert habitats into sustainable food reserves."
  },
  {
    id: "iisf-startup-award",
    title: "IISF Mission Startup Laurel",
    recipient: "Resol Agritech Pvt. Ltd.",
    authority: "India International Science Festival (IISF)",
    description: "Awarded at the Technical Panel session under the Ministry of Science and Technology, Govt of India, celebrating scientific ideas that successfully transition from university laboratories into registered commercial entities."
  }
];

export const MEDIA_COVERAGE = {
  headline: "New farming technology holds potential to stop desertification",
  author: "Mohammed Iqbal",
  date: "27 Sep 2025",
  publication: "The Hindu",
  extract: "An intensive experiment to grow wheat for the first time in the arid land, using desert 'soilification' technology powered by an indigenous bio-formulation, holds the potential to stop the expansion of western Rajasthan's Thar desert toward the National Capital Region. The solution converted sand into structured soil-like structures, and the groundbreaking wheat harvest yielded over 1,120 kg per acre using only three irrigations..."
};
