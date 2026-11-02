export type FocusArea = { id: string; title: string; summary: string; image: string };

export const focusAreas: FocusArea[] = [
  {
    image: "/images/stock/focus-sustainment.jpg",
    id: "sustainment",
    title: "Sustainment of Critical Production Solutions",
    summary: "Improve material availability, reliability, maintainability, mobility, commonality, or affordability.",
  },
  {
    image: "/images/stock/focus-commercialization.jpg",
    id: "commercialization",
    title: "Commercialization of Research and Development Investment Solutions",
    summary: "Advance component or system development and demonstration to establish commercial viability or scale up.",
  },
  {
    image: "/images/stock/focus-emerging-technology.jpg",
    id: "emerging-technology",
    title: "Scaling Emerging Technology Solutions",
    summary: "Enable the rapid, affordable introduction of emerging capabilities into the organic or commercial marketplace.",
  },
  {
    image: "/images/stock/focus-workforce.jpg",
    id: "workforce",
    title: "Domestic Workforce Solutions",
    summary:
      "Expand training, recruitment, and outreach to address shortages of skilled industrial workers, including those supporting ship and submarine production and sustainment.",
  },
  {
    image: "/images/stock/focus-microelectronics.jpg",
    id: "microelectronics",
    title: "Microelectronics, Energy Storage, and Battery Solutions",
    summary:
      "Reduce reliance on foreign sources through domestic sourcing, design, manufacturing, and delivery, including radio frequency microelectronics.",
  },
  {
    image: "/images/stock/focus-kinetic-weapons.jpg",
    id: "kinetic-weapons",
    title: "Kinetic Weapon Solutions",
    summary:
      "Improve supply chain resilience for kinetic and hypersonic weapon systems, subsystems, components, materials, and enabling technologies.",
  },
  {
    image: "/images/stock/focus-critical-chemicals.jpg",
    id: "critical-chemicals",
    title: "Critical Chemical Solutions",
    summary:
      "Reduce foreign dependencies by establishing domestic light and heavy rare earth element separation, metallization, and processing capabilities for Department of War use.",
  },
  {
    image: "/images/stock/focus-casting-forging.jpg",
    id: "casting-forging",
    title: "Casting and Forging Solutions",
    summary:
      "Strengthen domestic capacity and capabilities for cast and forged parts, including alternative methods for specialty metal alloys.",
  },
  {
    image: "/images/stock/focus-space-systems.jpg",
    id: "space-systems",
    title: "Space System Solutions",
    summary:
      "Expand space industrial base capabilities for space awareness, operations, satellites, mission automation, and next-generation architectures.",
  },
  {
    image: "/images/stock/focus-industrial-base-readiness.jpg",
    id: "industrial-base-readiness",
    title: "Industrial Base Readiness Solutions",
    summary:
      "Increase Department of War capability, capacity, and readiness through solutions from new entrants, small businesses, and nontraditional defense contractors.",
  },
];

export type Step = { title: string; body: string };

export const homeSteps: Step[] = [
  { title: "Submit", body: "Review the solicitation and submit a five-minute video pitch and completed submission form." },
  {
    title: "Get Assessed",
    body: "Your submission undergoes a compliance review and expert assessment. Receive assessment results and feedback.",
  },
  {
    title: "Be Discovered",
    body: "Awardable solutions become available to authorized government users for potential acquisition.",
  },
];

export const industrySteps: Step[] = [
  { title: "Submit", body: "Review the solicitation, prepare your five-minute video pitch, and complete the submission form." },
  { title: "Get Assessed", body: "Complete a compliance review and expert assessment. Receive your results and feedback." },
  {
    title: "Be Discovered",
    body: "If determined to be awardable, your solution becomes available to authorized government users for potential acquisition.",
  },
];

export const pitchElements: Step[] = [
  {
    title: "Defining the Problem",
    body: "Explain the problem, who it affects, and its scale and broader relevance.",
  },
  {
    title: "Accelerating the Mission",
    body: "Describe your solution, its technical basis, alignment with the Strategic Focus Areas, and dependencies or risks. Explain your maturation plan for lower-readiness solutions, or include a product demonstration or service case study for higher-readiness solutions, as required by the solicitation.",
  },
  {
    title: "Advancing the State of the Art",
    body: "Explain the improvement over existing approaches, customer impact, and evidence supporting your claims.",
  },
  {
    title: "Business Model",
    body: "Describe how your offering is sold, how pricing is estimated, and its fit for government and commercial customers. Do not include proprietary pricing or non-public rates.",
  },
];

export const submissionChecklist: string[] = [
  "One solution video, no longer than 5:00 minutes, in HD 1920 × 1080 resolution, as an MP4 file under 1.0 GB, using Rec709 or sRGB color space.",
  "Clear audio and legible graphics, with all four required content elements addressed.",
  "Unclassified, non-proprietary materials containing no export-controlled information or controlled unclassified information. No restrictive markings other than a valid copyright or trademark notice.",
  "A completed form with organizational and contact information, solution title, abstract, keywords, current Technology Readiness Level, predominant focus area, and other required fields. Provide status and designation information as applicable; consult the solicitation for every field requirement.",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is the APEX Arsenal Marketplace?",
    a: "The Marketplace connects solution providers with government organizations seeking capabilities to sustain, modernize, and grow the American defense industrial base. Providers submit video pitches for assessment; awardable solutions become available for authorized government discovery and potential acquisition.",
  },
  {
    q: "Who can submit a solution?",
    a: "U.S.-based businesses of all sizes, universities, nonprofits, and individuals may participate, including traditional and nontraditional defense contractors and new entrants. Foreign universities, research institutions, and entities may submit subject to applicable international and export laws. Review the solicitation for complete eligibility requirements.",
  },
  {
    q: "Which approved focus area best fits my solution?",
    a: "Compare the problem your solution addresses and its intended impact with the ten Strategic Focus Areas. Choose the predominant area based on the full definitions in the solicitation. If you need guidance, contact the Help Desk or schedule office hours.",
  },
  {
    q: "Can my solution relate to more than one focus area?",
    a: "Yes. A solution may relate to multiple focus areas. Select the predominant focus area in the submission form and explain relevant alignment in your video.",
  },
  {
    q: "What information and materials are required for a five-minute pitch?",
    a: "Submit one video of no more than five minutes and a fully completed submission form. Your video must address Defining the Problem, Accelerating the Mission, Advancing the State of the Art, and Business Model. The form collects organization and contact details, solution title, abstract, keywords, current Technology Readiness Level, predominant focus area, and other required information. Review the Industry page checklist and the solicitation for technical specifications and all field requirements.",
  },
  {
    q: "Can an organization submit more than one solution?",
    a: "Yes. You may submit multiple videos while the announcement remains open. Each video must present a single solution and have its own completed submission form.",
  },
  {
    q: "What happens after submission?",
    a: "Your submission undergoes a compliance review before expert assessment. A peer panel of government, industry, and academic subject matter experts assesses compliant solutions, and the Government Selecting Official makes the final awardable or non-awardable determination. You receive ratings and assessor comments at the end of the assessment round.",
  },
  {
    q: "What does awardable mean, and what does it not mean?",
    a: "Awardable means the solution has completed the Marketplace's competitive assessment process and received an awardable determination from the Government Selecting Official. It becomes available to authorized government users for potential acquisition through applicable pathways. Awardable does not mean a contract has been awarded, funding has been committed, or a government purchase is guaranteed.",
  },
  {
    q: "What happens if my solution is not assessed as awardable?",
    a: "You receive ratings and assessor comments. You can request a one-on-one feedback session with the Marketplace Manager, ARI, to review weaknesses and prepare revisions. A non-awardable determination does not prevent you from revising and resubmitting while the announcement remains active.",
  },
  {
    q: "What options are available after an unsuccessful submission?",
    a: "For a solution assessed as non-awardable, revise your materials using the feedback and submit in a subsequent collection period using \"AASM Resubmission.\" If your submission was returned as non-compliant before peer assessment, correct the deficiencies and submit using \"New AASM Submission.\" See the solicitation for complete instructions.",
  },
  {
    q: "What information may be visible in the Marketplace or publicly identified?",
    a: "Videos in the Marketplace are viewable by federal government accounts and the submitting entity or individual. The solicitation also grants licenses covering government and covered government support contractor use of videos and submission data. APEX Arsenal may publicly identify your company or individual name, solution name, and associated focus area. If you do not wish to be publicly identified in that way, submit written notice to success@APEXarsenal.us. Review the solicitation's full data handling and licensing terms before participating.",
  },
  {
    q: "What information should I leave out of my submission?",
    a: "Videos and form information must be unclassified and non-proprietary, with no export-controlled information or controlled unclassified information. Do not include proprietary pricing or non-public rates. Restrictive markings are not permitted other than a valid copyright or trademark notice.",
  },
  {
    q: "How can government users participate?",
    a: "Federal government users can register or sign in through Government Access to explore awardable solutions, review capabilities, and connect with providers. Contact the Help Desk for registration or access assistance.",
  },
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/industry", label: "For Industry" },
  { href: "/government", label: "For Government" },
  { href: "/resources", label: "Resources" },
];
