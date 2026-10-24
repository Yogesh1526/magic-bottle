export type ModelId = 'kiosk' | 'shakes' | 'classic';

export interface ModelFact {
  icon: string;
  label: string;
  value: string;
}

export interface FormatModel {
  id: ModelId;
  name: string;
  area: string;
  investment: number;
  investmentLabel: string;
  payback: string;
  term: string;
  summary: string;
  image: string;
  facts: ModelFact[];
  rent: number;
  staff: number;
  ticket: number;
  bills: number;
  tone: 'berry' | 'caramel' | 'cocoa';
}

function modelFacts(area: string, investment: string, payback: string): ModelFact[] {
  return [
    { icon: 'area', label: 'Min. area required', value: area },
    { icon: 'rupee', label: 'Total investment', value: investment },
    { icon: 'tag', label: 'Franchise fee', value: '₹0' },
    { icon: 'percent', label: 'Royalty', value: '0% · free for lifetime' },
    { icon: 'clock', label: 'Average payback', value: payback },
    { icon: 'shop', label: 'Mode of operations', value: 'FOFO' },
    { icon: 'file', label: 'Agreement term', value: '3 yrs' },
  ];
}

export const SHEET = {
  salary: 15000,
  cogs: 0.4,
  other: 0.1,
  days: 30,
};

export const MODELS: FormatModel[] = [
  {
    id: 'kiosk',
    name: 'Kiosk',
    area: '100 sq. ft',
    investment: 900000,
    investmentLabel: '₹9 lakh',
    payback: '12–14 months',
    term: '3 yrs',
    image: 'brand/model-kiosk.png',
    summary: 'The counter format. A queue, a blender line, and a rent a busy lane can carry.',
    facts: modelFacts('100 sq. ft', 'Starts at ₹9 lakh', '12–14 months'),
    rent: 18000,
    staff: 2,
    ticket: 170,
    bills: 45,
    tone: 'berry',
  },
  {
    id: 'shakes',
    name: 'Shakes Café',
    area: '200–300 sq. ft',
    investment: 1200000,
    investmentLabel: '₹12 lakh',
    payback: '14–16 months',
    term: '3 yrs',
    image: 'brand/model-shakes.png',
    summary: 'Glass front, stools, and the format most cities will picture first.',
    facts: modelFacts('200–300 sq. ft', 'Starts at ₹12 lakh', '14–16 months'),
    rent: 32000,
    staff: 3,
    ticket: 200,
    bills: 52,
    tone: 'caramel',
  },
  {
    id: 'classic',
    name: 'Classic Café',
    area: '400–500 sq. ft',
    investment: 1500000,
    investmentLabel: '₹15 lakh',
    payback: '16–18 months',
    term: '3 yrs',
    image: 'brand/model-classic.png',
    summary: 'The full room, with a terrace. Shakes, sundaes, and the American snacks on one floor.',
    facts: modelFacts('400–500 sq. ft', 'Starts at ₹15 lakh', '16–18 months'),
    rent: 48000,
    staff: 4,
    ticket: 230,
    bills: 58,
    tone: 'cocoa',
  },
];

export const SUPPORT = [
  { title: 'Location and set-up', copy: 'Help finding the site and setting the counter before the first service.' },
  { title: 'TMB recipes', copy: 'The company’s own recipes, so the glass tastes the same in every city.' },
  { title: 'Equipment', copy: 'The machines the menu needs, supplied with the model.' },
  { title: 'Training', copy: 'A programme for owners and staff before the shutter stays up.' },
  { title: 'Set of products', copy: 'The opening range, from the same kitchen standard.' },
  { title: 'Marketing and sales', copy: 'Support for launch and for the weeks after the first queue.' },
  { title: 'Kitchen guidelines', copy: 'How to run the outlet and the kitchen so the day stays profitable.' },
  { title: 'Wastage control', copy: 'Guidance on avoiding wastage and pilferage of raw material.' },
];

export const STEPS = [
  { n: '01', title: 'Enquire', copy: 'A call, a WhatsApp, or the form. Tell us the city and the format you are weighing.' },
  { n: '02', title: 'Numbers', copy: 'Walk the published investment, then the owner’s money sheet with your rent and staff.' },
  { n: '03', title: 'Site', copy: 'A commercial space from 100 sq ft, with power and water. We look at it with you.' },
  { n: '04', title: 'Train', copy: 'Recipes, opening routine, and the first week of service before the shutter stays up.' },
  { n: '05', title: 'Open', copy: 'FOFO: you own it, you run it. Agreement term on each model is 3 yrs.' },
];

export const FAQS = [
  { q: 'Is there a franchise fee?', a: 'The company profile lists the franchise fee as ₹0, included in the total investment, on all three formats.' },
  { q: 'What royalty do I pay?', a: 'The company profile lists royalty as 0%. The published line on the models is 0%, free for lifetime. Confirm it on the signed sheet.' },
  { q: 'How much do I need?', a: 'Published totals start at ₹9 lakh for the kiosk, ₹12 lakh for Shakes Café, and ₹15 lakh for Classic Café.' },
  { q: 'How much space?', a: 'Kiosk from 100 sq ft, Shakes Café 200–300 sq ft, Classic Café 400–500 sq ft, with power and water.' },
  { q: 'Who runs the shop?', a: 'FOFO: franchisee owned, franchisee operated. Plan for 2–3 working staff on the smaller formats.' },
  { q: 'How long is the agreement?', a: 'Each published model shows a 3-year agreement term.' },
  { q: 'What payback is advertised?', a: 'Average payback is published as 12–14 months for the kiosk, 14–16 for Shakes Café, and 16–18 for Classic Café. Those are the brand’s ranges, not a guarantee.' },
  { q: 'Is the royalty really for life?', a: 'The published line is 0% royalty, free for lifetime, on all three models. Confirm it on the signed sheet.' },
  { q: 'Where is the company?', a: 'TMB Venture India LLP, C-202, Green Florencia, Sr. No. 292/1/1, Sus Gaon, Pune 411021. The café began in Pune in 2017. Hemant Devpurkar is Founder and CEO.' },
];

export const PRODUCTS = [
  { name: 'Choco brownie shake', note: 'The glass that starts the queue.', tone: 'cocoa' },
  { name: 'Sundae jars', note: 'Ice cream built to travel across the counter.', tone: 'berry' },
  { name: 'High fries', note: 'The side that keeps the ticket from being only a drink.', tone: 'caramel' },
  { name: 'Tandoori makhani burger', note: 'American format, a flavour the room already knows.', tone: 'leaf' },
];

export const STORIES = [
  {
    format: 'Kiosk · 100 sq. ft',
    quote: 'The counter is short, the recipe is fixed, and the rush is the whole shop.',
    detail: 'Sample layout for a kiosk partner. Swap this for a filmed owner before launch.',
    film: 'Owner film · 45 sec',
  },
  {
    format: 'Shakes Café · 200–300 sq. ft',
    quote: 'Seats change the bill. People stay for a jar and a burger, then send the next table in.',
    detail: 'Sample layout for a café partner. No real owner is named or quoted here.',
    film: 'Owner film · 60 sec',
  },
  {
    format: 'Classic Café · 400–500 sq. ft',
    quote: 'The room has to earn the rent. The menu is built so one brigade can hold a full evening.',
    detail: 'Sample layout for a classic partner. Replace with a consenting owner on camera.',
    film: 'Owner film · 60 sec',
  },
];

export const FILMS = [
  { title: 'Founder', length: '2 min', copy: 'Hemant Devpurkar, Founder and CEO, on why the bottle started in Pune in 2017.' },
  { title: 'Kitchen walkthrough', length: '90 sec', copy: 'The line, the cold hold, the clean-down.' },
  { title: 'Ice cream plant', length: '2 min', copy: 'Where the base is made, in the order a visitor can follow.' },
];

export const BROCHURE_PDF = 'brand/TMB-Franchise-Brochure.pdf';
export const BROCHURE_PAGES = Array.from({ length: 14 }, (_, index) =>
  `brand/brochure-pages/page-${String(index + 1).padStart(2, '0')}.jpg`,
);

export const FOUNDER = {
  name: 'Hemant Devpurkar',
  role: 'Founder, CEO',
  company: 'The Magic Bottle India',
};

export const LEGAL_NAME = 'TMB Venture India LLP';

export const VISION =
  'A community of foodies who care about a tasty experience, and a place people name when they want something delicious and high quality.';

export const MISSION =
  'A premier dining destination on a national scale, known for diverse, appealing food, and for setting a new standard of flavour and inventiveness.';

export const EXPANSION =
  'The café plans to grant 100 franchises across India in the coming 3 years.';

export const REACH = [
  { figure: '4+', label: 'States' },
  { figure: '15+', label: 'Cities' },
  { figure: '25+', label: 'Upcoming stores' },
  { figure: '100+', label: 'Target stores' },
];

export const LETTER = [
  'Thank you for your interest in The Magic Bottle. The franchise model is built as a blend of support, innovation, and a track record the company is willing to stand behind.',
  'The goal is self-employment and entrepreneurial work: help people start a business with an investment that is within their means, and help others get into business for themselves.',
  'A franchisee gets a team for marketing, operations, HR, and logistics, plus training aimed at sales, guest counts, and cash flow.',
  'The company looks for people who care about high-quality food and will run their own shop. The programme is how the brand reaches the next neighbourhood.',
];

export const STORY = [
  'Founded in 2017 in Pune, the café built its name on milkshakes and American snacks, each item written so it can be repeated.',
  'The specialty is the milkshake range, set beside snacks that keep a table sitting. The published promise is pocket-friendly food with the same hygiene and taste standard.',
];

export const FEATURES = [
  { title: 'Best-investment model', copy: 'Three rooms, one recipe, with the fee published at ₹0.' },
  { title: 'Chef-less models', copy: 'Built so the counter does not depend on skilled labour.' },
  { title: 'High and quick returns', copy: 'Published average payback runs from 12–14 months on the kiosk to 16–18 on Classic. An illustration, not a guarantee.' },
  { title: 'Menu for all seasons', copy: 'Shakes, ice cream, coffee, and hot snacks on one card.' },
  { title: 'Marketing team', copy: 'The profile calls it a best-in-class marketing team beside the opening.' },
  { title: 'ISO and FSSAI', copy: 'The company profile states the company is ISO and FSSAI certified.' },
  { title: 'Pre and post opening', copy: 'Support before the keys, and after the first service.' },
  { title: 'Consistent supply', copy: 'Premium products, supplied to the same standard.' },
];

export interface MenuGroup {
  title: string;
  note?: string;
  items: { name: string; price: string }[];
}

export const MENU: MenuGroup[] = [
  {
    title: 'Premium shakes',
    note: 'All-time favourite · from ₹149',
    items: [
      { name: 'Berry Bubblegum', price: '₹149' },
      { name: 'Kit Kat Chocolate', price: '₹149' },
      { name: 'Belgian Chocolate', price: '₹149' },
      { name: 'Rosy Rose', price: '₹149' },
    ],
  },
  {
    title: 'Shakes and frappes',
    note: 'Creamy indulgence',
    items: [
      { name: 'Café Frappe', price: '₹89' },
      { name: 'Berry Strawberry', price: '₹99' },
      { name: 'Choco Brownie Shake', price: '₹99' },
      { name: 'Choco Frappe', price: '₹109' },
    ],
  },
  {
    title: 'Iced teas',
    items: [
      { name: 'Lemon', price: '₹99' },
      { name: 'Peach', price: '₹99' },
      { name: 'Strawberry', price: '₹99' },
    ],
  },
  {
    title: 'Smoothies',
    items: [
      { name: 'Mango Smoothie', price: '₹99' },
      { name: 'Dryfruits Smoothie', price: '₹109' },
    ],
  },
  {
    title: 'Melting pots',
    note: 'Ice-cream sundae',
    items: [
      { name: 'Fruit Medley', price: '₹139' },
      { name: 'Nutty Dark Temptation', price: '₹139' },
      { name: 'Oreo Cookie Crumble', price: '₹149' },
      { name: 'Freaky Nutella-Hazelnut', price: '₹149' },
    ],
  },
  {
    title: 'Chillers and coolers',
    items: [
      { name: 'Green Apple Chiller', price: '₹99' },
      { name: 'Magical Blue Chiller', price: '₹99' },
      { name: 'Redmelon Chiller', price: '₹99' },
      { name: 'Chilli Guava Cooler', price: '₹89' },
      { name: 'Spicy Mango Cooler', price: '₹89' },
    ],
  },
  {
    title: 'Hot coffees',
    items: [
      { name: 'Cappuccino', price: '₹69' },
      { name: 'Hot Chocolate', price: '₹79' },
      { name: 'Café Moka', price: '₹79' },
      { name: 'Café Latte', price: '₹79' },
    ],
  },
  {
    title: 'Ice cream scoops',
    items: [
      { name: 'Milky Vanilla', price: '₹49' },
      { name: 'Strawberry', price: '₹49' },
      { name: 'Butterscotch', price: '₹59' },
      { name: 'Mango', price: '₹59' },
      { name: 'Chikoo', price: '₹59' },
      { name: 'Belgian Chocolate', price: '₹59' },
      { name: 'Royal Treat', price: '₹59' },
      { name: 'Brownie Chocolate', price: '₹59' },
      { name: 'Sitaphal', price: '₹59' },
    ],
  },
  {
    title: 'Sandwiches',
    items: [
      { name: 'Smoky BBQ', price: '₹89' },
      { name: 'Tandoori Mayo', price: '₹99' },
      { name: 'Chipotle Style', price: '₹99' },
      { name: 'Makhani', price: '₹99' },
      { name: 'Peri Peri Paneer', price: '₹109' },
    ],
  },
  {
    title: 'Momos · 6 pcs',
    note: 'Starts at ₹119',
    items: [
      { name: 'Tandoori Momos', price: '₹119' },
      { name: 'Makhani Momos', price: '₹129' },
      { name: 'Peri Peri Paneer Momos', price: '₹139' },
      { name: 'Chipotle Style Momos', price: '₹139' },
      { name: 'Schezwan Paneer Momos', price: '₹139' },
      { name: 'Corn and Cheese Momos', price: '₹149' },
    ],
  },
  {
    title: 'Burgers',
    items: [
      { name: 'M Aloo Tikki', price: '₹39' },
      { name: 'Smoky BBQ', price: '₹89' },
      { name: 'Tandoori Mayo', price: '₹99' },
      { name: 'Tandoori Makhani', price: '₹109' },
      { name: 'Peri Peri Paneer', price: '₹119' },
    ],
  },
  {
    title: 'Pasta',
    note: 'Starts at ₹99',
    items: [
      { name: 'Creamy Pasta, white sauce', price: '₹99' },
      { name: 'Tangy Red Pasta', price: '₹99' },
      { name: 'Cheesy Pasta', price: '₹109' },
    ],
  },
  {
    title: 'Fries and bites',
    items: [
      { name: 'Salted Plain', price: '₹89' },
      { name: 'Aloo Tikki, 4 pcs', price: '₹89' },
      { name: 'Peri Peri Fries', price: '₹99' },
      { name: 'Onion Rings, 6 pcs', price: '₹99' },
      { name: 'Potato Cheese Shots, 6 pcs', price: '₹99' },
    ],
  },
];

export const PHONE_PRIMARY = '+917774814531';
export const PHONE_SECONDARY = '+919552275167';
export const PHONE_PRIMARY_LABEL = '+91 77748 14531';
export const PHONE_SECONDARY_LABEL = '+91 95522 75167';
export const EMAIL = 'info@themagicbottle.co.in';
export const WHATSAPP = 'https://wa.me/917774814531?text=Hi%20The%20Magic%20Bottle%2C%20I%20want%20the%20franchise%20details.';
export const ADDRESS = ['TMB Venture India LLP', 'C-202, Green Florencia', 'Sr. No. 292/1/1, Sus Gaon', 'Pune 411021'];
