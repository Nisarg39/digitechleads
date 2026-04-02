export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  subServices: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-seo",
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher, win more qualified organic traffic, and build long-term lead generation through on-page SEO, technical SEO and content strategy.",
    subServices: [
      "Keyword Research",
      "On-Page SEO (content optimization, meta tags, headers)",
      "Technical SEO (site speed, mobile-friendliness, crawlability)",
      "Off-Page SEO (link building)",
      "SEO Audits",
      "Content Strategy for SEO",
    ],
  },
  {
    id: "service-ppc",
    icon: "📢",
    title: "Search Engine Marketing (SEM) / Pay-Per-Click (PPC)",
    description: "Targeted Google Ads and paid search campaigns that put your brand in front of high-intent buyers.",
    subServices: [
      "Google Ads Campaign Setup",
      "Ad Copy & Creative Development",
      "Landing Page Optimization",
      "Bid Management & Budget Control",
      "Conversion Tracking",
      "A/B Testing",
    ],
  },
  {
    id: "service-smm",
    icon: "📱",
    title: "Social Media Marketing",
    description: "Build brand presence and engage your audience across social platforms with strategic content and campaigns.",
    subServices: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships",
      "Social Analytics",
    ],
  },
  {
    id: "service-content",
    icon: "✍️",
    title: "Content Marketing",
    description: "Create compelling content that attracts, engages, and converts your target audience.",
    subServices: [
      "Content Strategy & Planning",
      "Blog Writing & Articles",
      "Video Content Production",
      "Infographics & Visual Content",
      "Email Marketing Content",
      "Content Distribution",
    ],
  },
  {
    id: "service-email",
    icon: "📧",
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns and automation.",
    subServices: [
      "Email Campaign Strategy",
      "List Building & Segmentation",
      "Email Template Design",
      "Automation Workflows",
      "A/B Testing",
      "Performance Analytics",
    ],
  },
  {
    id: "service-web",
    icon: "💻",
    title: "Web Design & Development",
    description: "Build high-converting websites and web experiences that drive business results.",
    subServices: [
      "Responsive Web Design",
      "E-commerce Development",
      "Landing Page Design",
      "Website Optimization",
      "CMS Integration",
      "Website Maintenance",
    ],
  },
  {
    id: "service-analytics",
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Track performance, gain insights, and make data-driven decisions with comprehensive analytics.",
    subServices: [
      "Google Analytics Setup",
      "Custom Dashboard Creation",
      "Conversion Tracking",
      "Performance Reporting",
      "Data Analysis & Insights",
      "ROI Measurement",
    ],
  },
  {
    id: "service-cro",
    icon: "🎯",
    title: "Conversion Rate Optimization (CRO)",
    description: "Improve website performance and increase conversion rates through systematic testing and optimization.",
    subServices: [
      "Conversion Audit",
      "A/B Testing",
      "User Experience Analysis",
      "Heatmap & Session Recording",
      "Landing Page Optimization",
      "Funnel Analysis",
    ],
  },
  {
    id: "service-orm",
    icon: "🛡️",
    title: "Reputation Management",
    description: "Protect and enhance your brand reputation across online platforms and search results.",
    subServices: [
      "Online Reputation Audit",
      "Review Management",
      "Brand Monitoring",
      "Crisis Management",
      "Content Suppression Strategy",
      "Positive Content Promotion",
    ],
  },
  {
    id: "service-video",
    icon: "🎬",
    title: "Video Marketing",
    description: "Create engaging video content that tells your story and drives engagement.",
    subServices: [
      "Video Strategy & Planning",
      "Video Production",
      "Video Editing & Post-Production",
      "Video SEO & Distribution",
      "Animated Explainer Videos",
      "Video Ad Campaigns",
    ],
  },
  {
    id: "service-affiliate",
    icon: "🤝",
    title: "Affiliate Marketing",
    description: "Build partnerships and expand your reach through strategic affiliate programs.",
    subServices: [
      "Affiliate Program Setup",
      "Partner Recruitment",
      "Commission Structure Design",
      "Affiliate Management",
      "Performance Tracking",
      "Compliance & Legal Support",
    ],
  },
  {
    id: "service-automation",
    icon: "⚙️",
    title: "Marketing Automation",
    description: "Streamline marketing processes and improve efficiency with automated workflows.",
    subServices: [
      "Marketing Automation Strategy",
      "Lead Nurturing Campaigns",
      "CRM Integration",
      "Workflow Automation",
      "Lead Scoring",
      "Behavioral Triggers",
    ],
  },
];

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  icon: string;
}

export const blogData: BlogPost[] = [
  {
    id: "blog-1",
    tag: "SEO",
    title: "10 SEO Strategies That Will Dominate Google in 2025",
    excerpt: "Discover the most powerful tactics top brands use to rank higher and convert more visitors.",
    date: "Mar 20, 2025",
    readTime: "6 min",
    gradient: "linear-gradient(135deg,#0d1b3e,#1a3a6e)",
    icon: "📈",
  },
  {
    id: "blog-2",
    tag: "Social Media",
    title: "Build a Winning Instagram Strategy in 2025",
    excerpt: "Grow your audience with these proven Instagram marketing tactics.",
    date: "Mar 14, 2025",
    readTime: "4 min",
    gradient: "linear-gradient(135deg,#2d1500,#5a3000)",
    icon: "📱",
  },
  {
    id: "blog-3",
    tag: "Paid Ads",
    title: "Google Ads vs Meta Ads: Which Is Right for You?",
    excerpt: "A complete comparison to help you choose the best platform for maximum ROI.",
    date: "Mar 8, 2025",
    readTime: "5 min",
    gradient: "linear-gradient(135deg,#0a2810,#1a4a20)",
    icon: "💰",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. Typically, you'll start seeing initial improvements in 3-6 months, with significant results appearing after 6-12 months of consistent effort.",
  },
  {
    id: "faq-2",
    question: "What's your pricing structure?",
    answer: "We offer customized packages based on your specific needs and goals. Pricing depends on scope, services required, and campaign complexity. Contact us for a personalized quote.",
  },
  {
    id: "faq-3",
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with businesses of all sizes - from startups to established enterprises. We tailor our strategies to match your budget and growth goals.",
  },
  {
    id: "faq-4",
    question: "Can you help with website redesign?",
    answer: "Absolutely! We offer comprehensive web design and development services, focusing on conversion-optimized designs that align with your brand and business objectives.",
  },
  {
    id: "faq-5",
    question: "How do you measure campaign success?",
    answer: "We track key performance indicators (KPIs) relevant to your goals - traffic, leads, conversions, ROI, and more. You'll receive regular reports with actionable insights.",
  },
  {
    id: "faq-6",
    question: "What industries do you specialize in?",
    answer: "We have experience across various industries including technology, e-commerce, professional services, healthcare, and more. Our strategies are adaptable to any B2B or B2C business.",
  },
];

export interface Metric {
  number: string;
  label: string;
}

export const heroMetrics: Metric[] = [
  { number: "500+", label: "Clients Served" },
  { number: "2M+", label: "Leads Generated" },
  { number: "95%", label: "Client Satisfaction" },
];

export const aboutMetrics: Metric[] = [
  { number: "8+", label: "Years Experience" },
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Countries Served" },
  { number: "98%", label: "Campaign Success Rate" },
];
