import home1 from '../images/home1.webp';
import home2 from '../images/home2.webp';
import home3 from '../images/home3.webp';
import home4 from '../images/home4.webp';

export interface SectionData {
  h1?: string;
  h2: string;
  h3?: string;
  image: string;
  alt: string;
  p1: string;
  p2?: string;
  p3?: string;
  button: boolean;
  first?: boolean;
  second?: boolean;
  fourth?: boolean;
  reverse?: boolean;
}

const sections = [
  {
    h1: 'Learn. Grow. Thrive.',
    h2: 'At Hippo Education, we believe that medical education should upgrade your practice and your life.',
    p1: 'This lifelong learning should be exciting, and something we look forward to. It should connect us to our fellow clinicians and remind us, as a community, why we practice medicine, not just how. We exist not only to change your practice, but to change your mind about what truly great education can achieve.',
    p2: 'If you want to swap CME that merely checks the boxes for a community of like-minded people learning, growing, and doing their best work together—welcome.',
    p3: 'You’ve found what you’re looking for.',
    image: home1,
    alt: '2 men podcasting',
    button: true,
    first: true
  },
  {
    h1: 'Education Designed for People Like You',
    h2: 'Authentic, Engaging, and Human',
    p1: 'We’re obsessed with making education that respects your time,attention span, and humanity. Every piece of education we produce is made with intention for a consistently rewarding learning experience.',
    p2: '',
    p3: '',
    image: home2,
    alt: 'Smiling anchorwoman',
    button: false,
    second: true,
    reverse: true
  },
  {
    h2: 'Unrivaled Educational Excellence',
    p1: 'Our physician-led education is carefully designed and presented by some of the most qualified and passionate faculty in the world. It makes the most of your investment, energy, and intellect and delivers a lasting impact far beyond CME credit.',
    image: home3,
    alt: 'Smiling female nurse',
    button: true
  },
  {
    h2: 'However and Whenever Your Need It',
    p1: 'Get education that seamlessly fits into your busy life with convenient, tech-forward podcasts, video lectures, and articles, all on the go from your phone or tablet.',
    image: home4,
    alt: 'Person reading on cell phone',
    button: false,
    reverse: true,
    fourth: true
  }
];

export function useSectionData() {
  return sections;
}
