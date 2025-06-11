import { Fellow, ImpactStat, NewsItem, Partner, Program, TeamMember } from '../types';

export const mission = 
  "We improve access to dignified, culturally sensitive and affordable mental health services and literacy in Kenya's low income and marginalized communities.";



export const vision = 
  "A world where every individual, regardless of their background, can access dignified, culturally sensitive, and transformative mental health care and interventions—ensuring communities to heal, thrive, and lead with resilience.";

export const tagline = "Clothing Communities in Care and Healing";

export const history = `
Mental health remains an inaccessible human right for millions across Africa, with 1 in 4 Kenyans experiencing mental health conditions (WHO) yet fewer than 10% receiving support a gap widening for marginalized communities including Nubian, refugee, and indigenous groups. Born from lived experience of witnessing mental health challenges met with stigma and culturally mismatched solutions, Nivishe Foundation emerged to answer our core question: "What would it mean to truly center dignity, culture, and community in mental health?" The name Nivishe ("clothe me" in Kiswahili) embodies our mission to wrap marginalized communities in understanding and healing, restoring what structural inequality stripped away. We create safe spaces and African-designed interventions that value lived experience alongside clinical expertise, training community leaders and reimagining mental health care through local perspectives. Our work continues the urgent commitment to ensure no one remains unseen, unheard, or unsupported in their mental health journey.
`;

export const values = [
  {
    id: '1',
    title: 'Community-Led and Contextualized',
    description: 'We believe those closest to the problem are closest to the solution. Our work is rooted in the wisdom, knowledge, and participation of the communities we serve.'
  },
  {
    id: '2',
    title: 'Feminist and Survivor-Centered',
    description: 'We recognize the structural inequities that impact women, girls, and survivors of violence. Our programming ensures safety, agency, and voice for those most impacted.'
  },
  {
    id: '3',
    title: 'Healing Justice',
    description: 'We adopt a holistic approach to mental health that centers collective care, cultural identity, and systemic change.'
  },
  {
    id: '4',
    title: 'Intersectional and Inclusive',
    description: 'We acknowledge the multiple and overlapping systems of oppression that impact mental well-being and intentionally design programs that reach people across lines of gender, ethnicity, ability, class, and geography.'
  },
  {
    id: '5',
    title: 'Innovation with Impact',
    description: 'We blend traditional knowledge with cutting-edge tools—like art, technology, and data—for meaningful mental health transformation.'
  }
];

export const boardMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Nadia Ahmed',
    role: 'Board Chair',
    image: 'images/nadia.png'
  },
  {
    id: '2',
    name: 'Prof. Joseph Onyango',
    role: 'Vice Chair',
    image: 'images/joseph-Anyango.png'
  },
  {
    id: '3',
    name: 'Mercy Apanja',
    role: 'Board Member',
    image: 'images/mercy.png'
  },
  {
    id: '4',
    name: 'Amina Hersi',
    role: 'Board Member',
    image: 'images/amina-hermsi.png'
  },
  {
    id: '5',
    name: 'Diana Waithanji',
    role: 'Board Member',
    image: 'images/diana.png'
  },
  {
    id: '6',
    name: 'Eunice Kilonzo',
    role: 'Board Member',
    image: 'images/Eunice-Kilonzo.png'
  }
];

export const staffMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Amisa Rashid',
    role: 'Founder and Executive Director',
    image: '/images/Amisa.jpg',
  },
  {
    id: '2',
    name: 'Mariam Yusuf',
    role: 'Operations Director',
    image: '/images/yusuf.jpg'
  },
  {
    id: '3',
    name: 'Nanjala Were',
    role: 'Finance Director',
    image: '/images/nanjala.jpg'
  },
  // {
  //   id: '4',
  //   name: 'Rocette Juma',
  //   role: 'Programs Assistant', 
  //   image: '/images/Nivishe-Staff-Cate.jpeg'
  // },
  {
    id: '5',
    name: 'Miriam Ogwel',
    role: 'Executive Assistant',
    image: '/images/miriam.jpg'
  },
  {
    id: '6',
    name: 'Naomi Ruto',
    role: 'Programs and Impact Lead',
    image: '/images/Naomi.jpeg'
  }
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Mental Health Africa',
    logo: '/images/Partner-1.jpg',
    type: 'strategic'
  },
  {
    id: '2',
    name: 'Kenya Health Foundation',
    logo: '/images/Partner-2.jpg',
    type: 'strategic'
  },
  {
    id: '3',
    name: 'Global Mental Wellness Initiative',
    logo: '/images/giving-women.jpg',
    type: 'strategic'
  },
  {
    id: '5',
    name: 'African Development Trust',
    logo: '/images/Nairobi-City-County.jpg',
    type: 'strategic'
  },
  {
    id: '6',
    name: 'African Development Trust',
    logo: '/images/Voluntas.png',
    type: 'strategic'
  },
  {
    id: '7',
    name: 'African Development Trust',
    logo: '/images/Grand.png',
    type: 'funding'
  },
  {
    id: '8',
    name: 'African Development Trust',
    logo: '/images/help.png',
    type: 'funding'
  },
  {
    id: '9',
    name: 'African Development Trust',
    logo: '/images/creative.png',
    type: 'funding'
  },
  {
    id: '10',
    name: 'African Development Trust',
    logo: '/images/mandela.png',
    type: 'funding'
  },
  {
    id: '11',
    name: 'African Development Trust',
    logo: '/images/ku.png',
    type: 'funding'
  },
  {
    id: '12',
    name: 'African Development Trust',
    logo: '/images/usaid.png',
    type: 'funding'
  },
  {
    id: '13',
    name: 'African Development Trust',
    logo: '/images/dovetail.png',
    type: 'funding'
  },
  {
    id: '14',
    name: 'African Development Trust',
    logo: '/images/women.png',
    type: 'funding'
  }
 
];

export const impactStats: ImpactStat[] = [
  {
    id: '1',
    figure: '40,000+',
    description: 'community members engaged through mental health education, outreach, and healing spaces.'
  },
  {
    id: '2',
    figure: '300+',
    description: 'youth mental health fellows trained across 10 African countries through the Nivishe Mental Health Fellowship.'
  },
  {
    id: '3',
    figure: '1,200+',
    description: 'teen and young mothers supported through Her Healing Journey and the Maternal Mental Health Initiative.'
  },
  {
    id: '4',
    figure: '700+',
    description: 'adolescent girls empowered through Binti Wellness Circles.'
  },
  {
    id: '5',
    figure: '800+',
    description: 'caregivers, teachers, and frontline responders trained in culturally sensitive, trauma-informed mental health care.'
  },
  {
    id: '6',
    figure: '150+',
    description: 'incarcerated youth and adults received psychosocial support through our Criminal and Health Justice Nexus Program.'
  }
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Maternal, Child, and Adolescent Mental Health Care',
    description: 'We provide early, maternal mental healthcare and trauma-informed interventions for mothers, children, and adolescents — planting the seeds of resilience at the community level.',
    icon: 'heart'
  },
  {
    id: '2',
    title: 'Nivishe Institute for Mental Health Learning and Research',
    description: 'We nurture those seeds through education, fellowships, and research that centers African voices and realities.',
    icon: 'graduation-cap'
  },
  {
    id: '3',
    title: 'Systems Change: Health, Justice Reform, and Policy Advocacy',
    description: 'We change the soil by advocating for better systems, laws, and structures that ensure mental health equity for all.',
    icon: 'scale'
  },
  {
    id: '4',
    title: 'Community-Centered Healing and Innovation',
    description: 'We water the roots by developing culturally resonant healing tools — from VR mental health therapies to community art spaces — that make healing relatable, creative, and lasting.',
    icon: 'users'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Nivishe Foundation Launches Cohort 6 of Mental Health Fellowship',
    excerpt: 'Applications are now open for the 2025 Nivishe Mental Health Fellowship, a transformative program for young leaders across Africa.',
    date: 'April 15, 2025',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Fellowships'
  },
  {
    id: '2',
    title: 'New Partnership Brings Mental Health Support to Kakuma Refugee Camp',
    excerpt: 'Nivishe Foundation partners with UNHCR to expand mental health services for displaced youth in Kakuma Refugee Camp.',
    date: 'March 22, 2025',
    image: 'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Partnerships'
  },
  {
    id: '3',
    title: 'Maternal Mental Health Initiative Shows Promising Results',
    excerpt: 'New research shows significant improvement in maternal wellbeing through community-based support groups.',
    date: 'February 10, 2025',
    image: 'https://images.pexels.com/photos/7282803/pexels-photo-7282803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Research'
  },
  {
    id: '4',
    title: 'Nivishe Comics: Using Art to Address Mental Health Stigma',
    excerpt: 'Our new comic series "Healing Journeys" is helping young people talk about mental health in accessible ways.',
    date: 'January 5, 2025',
    image: 'https://images.pexels.com/photos/6954109/pexels-photo-6954109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Publications'
  }
];

export const fellows: Fellow[] = [
  {
    // id: '1',
    name: 'Abdallah Omar',
    cohort: 1,
    
    testimonial: 'The Fellowship didn\'t just train me; it made me believe I could be part of the solution.'
  },
  {
    // id: '2',
    name: 'Faith Wanjiku',
    cohort: 2,
    testimonial: 'Nivishe gave me hope when I thought my life was over. Now I am helping others find their hope too.'
  },
  {
    // id: '3',
    name: 'Esther Mugambi',
    cohort: 3,
   
  },
  {
    id: '4',
    name: 'David Kinyua',
    cohort: 'Cohort 2',
    country: 'Kenya',
    
  }
];