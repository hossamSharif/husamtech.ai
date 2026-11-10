// English copy. All text on the site lives here and in ar.ts (same shape).
// Projects, numbers and contact details are sample content — replace with real ones.
const en = {
  meta: {
    siteName: 'HusamTech',
    description:
      'HusamTech designs and builds SaaS platforms and mobile apps that are fast, reliable and a pleasure to use.',
  },
  contact: { email: 'hello@husamtech.ai' },
  nav: {
    home: 'Home',
    saas: 'SaaS Software',
    mobile: 'Mobile Apps',
    about: 'About Us',
    cta: 'Start a project',
    menu: 'Menu',
    theme: 'Switch between light and dark theme',
    lang: 'العربية',
    langLabel: 'التبديل إلى العربية',
    skip: 'Skip to content',
  },
  hero: {
    badge: 'Software studio · SaaS & mobile',
    titleA: 'We build software that',
    titleAccent: 'moves your business',
    titleB: 'forward.',
    subtitle:
      'From cloud SaaS platforms to mobile apps your customers love — we design, build and launch digital products end to end.',
    primary: 'Start a project',
    secondary: 'See our work',
    stats: [
      { value: '40+', label: 'Products shipped' },
      { value: '8 yrs', label: 'Building software' },
      { value: '99.9%', label: 'Uptime on our platforms' },
    ],
    chipA: 'Deployed',
    chipB: 'New users',
  },
  stack: {
    title: 'Technologies we work with',
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'PostgreSQL', 'AWS', 'Docker', 'Laravel'],
  },
  home: {
    saas: {
      eyebrow: 'SaaS Software',
      title: 'Cloud software built to scale with you',
      desc: 'We turn complex workflows into simple, secure web platforms — multi-tenant, subscription-ready and built for growth.',
      points: [
        'Multi-tenant architecture with roles and permissions',
        'Subscriptions, billing and online payments',
        'Dashboards and reports that update in real time',
        'Secure by design, with automatic backups',
      ],
      cta: 'Explore SaaS services',
    },
    mobile: {
      eyebrow: 'Mobile Apps',
      title: 'Mobile apps people enjoy opening',
      desc: 'Native-quality iOS and Android apps with smooth interactions, offline support and a design that feels right in the hand.',
      points: [
        'iOS and Android from a single codebase or fully native',
        'Push notifications, payments and maps',
        'Works offline and syncs when back online',
        'Published and maintained on the App Store and Google Play',
      ],
      cta: 'Explore mobile services',
    },
    about: {
      eyebrow: 'About Us',
      title: 'A small team that cares about the details',
      desc: 'We are engineers and designers who believe good software is clear, fast and honest. We work as part of your team, from the first sketch to long after launch.',
      cta: 'More about us',
    },
  },
  values: [
    { icon: 'target', title: 'Outcome first', desc: 'We start from the business goal, then choose the technology — never the other way round.' },
    { icon: 'zap', title: 'Fast by default', desc: 'Performance is a feature. Every product we ship is measured and tuned for speed.' },
    { icon: 'shield', title: 'Built to last', desc: 'Clean code, tests and documentation, so your product stays easy to grow.' },
    { icon: 'heart', title: 'Honest partnership', desc: 'Clear timelines, transparent pricing and direct communication with the people building.' },
  ],
  saas: {
    title: 'SaaS Software',
    hero: {
      eyebrow: 'SaaS Software',
      title: 'SaaS platforms, from idea to paying customers',
      desc: 'We design, build and run cloud software: business systems, dashboards and subscription products that your customers can rely on every day.',
    },
    servicesTitle: 'What we build',
    servicesDesc: 'Everything a modern SaaS product needs, delivered by one team.',
    services: [
      { icon: 'cloud', title: 'Custom SaaS platforms', desc: 'Multi-tenant web applications tailored to your business model and your users.' },
      { icon: 'chart', title: 'Dashboards & analytics', desc: 'Real-time reporting that turns your data into decisions.' },
      { icon: 'layers', title: 'APIs & integrations', desc: 'Connect payment gateways, ERPs, messaging and third-party services.' },
      { icon: 'users', title: 'Subscriptions & billing', desc: 'Plans, trials, invoices and online payments, ready from day one.' },
      { icon: 'shield', title: 'Security & compliance', desc: 'Role-based access, audit logs, encryption and regular backups.' },
      { icon: 'refresh', title: 'Support & evolution', desc: 'Monitoring, updates and new features long after launch.' },
    ],
    projectsTitle: 'Selected SaaS projects',
    projectsDesc: 'A few of the platforms we have designed and built.',
    projects: [
      { name: 'Daftar', category: 'Accounting & invoicing', desc: 'Cloud accounting for small businesses with e-invoicing, expenses and tax reports.', tags: ['Next.js', 'PostgreSQL', 'Stripe'] },
      { name: 'Clinica', category: 'Clinic management', desc: 'Appointments, patient records and billing for multi-branch clinics.', tags: ['React', 'Node.js', 'AWS'] },
      { name: 'Mawrid', category: 'Inventory & POS', desc: 'Stock, purchasing and point of sale across warehouses and stores, in real time.', tags: ['Laravel', 'Vue', 'MySQL'] },
      { name: 'TeamFlow', category: 'HR & payroll', desc: 'Attendance, leave, payroll and performance in one employee portal.', tags: ['TypeScript', 'NestJS', 'Docker'] },
    ],
    processTitle: 'How we work',
    process: [
      { title: 'Discover', desc: 'We map your goals, users and workflows, and agree on scope.' },
      { title: 'Design', desc: 'Clickable prototypes so you can see and test the product early.' },
      { title: 'Build', desc: 'Short iterations with a working demo at the end of each one.' },
      { title: 'Launch & grow', desc: 'We deploy, monitor and keep improving with real usage data.' },
    ],
  },
  mobile: {
    title: 'Mobile Apps',
    hero: {
      eyebrow: 'Mobile Apps',
      title: 'Mobile apps for iOS and Android',
      desc: 'From first idea to the app stores: we design and build fast, polished mobile apps that keep users coming back.',
    },
    servicesTitle: 'What we offer',
    servicesDesc: 'The full mobile journey, handled by one team.',
    services: [
      { icon: 'phone', title: 'iOS & Android apps', desc: 'Native Swift and Kotlin when you need the most from the platform.' },
      { icon: 'code', title: 'Cross-platform apps', desc: 'Flutter and React Native: one codebase, two platforms, faster delivery.' },
      { icon: 'pen', title: 'UI/UX design', desc: 'Interfaces that are clear, accessible and designed for both Arabic and English.' },
      { icon: 'bell', title: 'Notifications & engagement', desc: 'Push notifications, in-app messaging and analytics that drive retention.' },
      { icon: 'globe', title: 'Backend & APIs', desc: 'Secure, scalable backends and admin panels that power your app.' },
      { icon: 'sparkles', title: 'Store launch & updates', desc: 'App Store and Google Play publishing, reviews and continuous releases.' },
    ],
    projectsTitle: 'Selected mobile apps',
    projectsDesc: 'Some of the apps we have brought to the stores.',
    projects: [
      { name: 'Souq Go', category: 'E-commerce', desc: 'A shopping app with fast search, saved carts and one-tap checkout.', tags: ['Flutter', 'Firebase'] },
      { name: 'Wasel', category: 'Delivery', desc: 'Live order tracking for customers, with a companion app for drivers.', tags: ['React Native', 'Maps'] },
      { name: 'Nabd', category: 'Health & fitness', desc: 'Workout plans, progress tracking and reminders that build habits.', tags: ['Swift', 'HealthKit'] },
      { name: 'Rafiq', category: 'Booking', desc: 'Book services and appointments in seconds, with reminders and online payment.', tags: ['Kotlin', 'Node.js'] },
    ],
    processTitle: 'From idea to the stores',
    process: [
      { title: 'Plan', desc: 'Define the core features and the user journey.' },
      { title: 'Design', desc: 'Screens and interactions, tested on real devices.' },
      { title: 'Develop', desc: 'Frequent test builds delivered straight to your phone.' },
      { title: 'Publish', desc: 'Store submission, launch and ongoing updates.' },
    ],
  },
  about: {
    title: 'About Us',
    hero: {
      eyebrow: 'About Us',
      title: 'We help companies turn ideas into software',
      desc: 'HusamTech is a software company focused on two things we do well: SaaS platforms and mobile apps.',
    },
    storyTitle: 'Our story',
    story: [
      'HusamTech started with a simple belief: businesses deserve software that is as well made as the products they sell. Too many projects are slow, late or hard to use — we set out to do the opposite.',
      'Today we work with startups and established companies to design, build and operate digital products. We stay small on purpose, so the people you talk to are the people who build your product.',
      'We build for both Arabic and English from day one, and we care about performance, accessibility and the small details that make software feel right.',
    ],
    valuesTitle: 'What we stand for',
    statsTitle: 'In numbers',
    stats: [
      { value: '40+', label: 'Products shipped' },
      { value: '25+', label: 'Happy clients' },
      { value: '8', label: 'Years of experience' },
      { value: '6', label: 'Countries served' },
    ],
  },
  cta: {
    title: 'Have a project in mind?',
    desc: 'Tell us about your idea. We will reply within one business day with next steps.',
    button: 'Get in touch',
  },
  footer: {
    blurb: 'SaaS platforms and mobile apps, designed and built with care.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
};

export default en;
export type Dict = typeof en;
