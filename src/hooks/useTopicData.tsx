export interface TopicData {
  title: string;
  specialties: string[];
}

const topics = [
  {
    title: 'EM Board Review',
    specialties: ['Emergency Medicine', 'Podcasts', 'Board Reviews']
  },
  {
    title: 'Peds Board Review',
    specialties: ['Pediatrics', 'Podcasts', 'Board Reviews']
  },
  {
    title: 'EM ERcast',
    specialties: ['Emergency Medicine', 'Podcasts']
  },
  {
    title: 'Peds Qbank',
    specialties: ['Pediatrics', 'Board Reviews']
  },
  {
    title: 'EM Qbank',
    specialties: ['Emergency Medicine', 'Board Reviews']
  },
  {
    title: 'Peds Foundations',
    specialties: ['Pediatrics', 'Bootcamps']
  },
  {
    title: 'EM Board Review Resident Package',
    specialties: ['Emergency Medicine', 'Board Reviews', 'Podcasts']
  },
  {
    title: 'Peds Board Review Resident Package',
    specialties: ['Pediatrics', 'Board Reviews', 'Podcasts']
  },
  {
    title: 'EM LLSA Prep Cardiology CME',
    specialties: ['Emergency Medicine', 'Bootcamps']
  },
  {
    title: 'Adult EM Bootcamp',
    specialties: ['Emergency Medicine', 'Bootcamps']
  },
  {
    title: 'Peds EM Bootcamp',
    specialties: ['Emergency Medicine', 'Pediatrics', 'Bootcamps']
  },
  {
    title: 'Urgent Care Bootcamp',
    specialties: ['Urgent Care', 'Bootcamps']
  },
  {
    title: 'Primary Care RAP',
    specialties: ['Primary Care', 'Podcasts']
  },
  {
    title: 'AAPA Primary Care RAP',
    specialties: ['PA', 'Podcasts']
  },
  {
    title: 'Peds RAP',
    specialties: ['Pediatrics', 'Podcasts']
  },
  {
    title: 'AAPA PANCE/PANRE Review',
    specialties: ['PA', 'Board Reviews', 'Podcasts']
  },
  {
    title: 'Urgent Care RAP',
    specialties: ['Urgent Care', 'Podcasts']
  },
  {
    title: 'AAPA Qbank',
    specialties: ['PA']
  },
  {
    title: 'AAPA General Practice Self-Assessment',
    specialties: ['PA']
  },
  {
    title: 'AAPA EM Self-Assessment',
    specialties: ['Emergency Medicine', 'PA']
  },
  {
    title: 'Essentials of Emergency Medicine',
    specialties: ['Emergency Medicine', 'Bootcamps']
  },
  {
    title: 'Telemedicine: Common Conditions',
    specialties: ['Telemedicine', 'Bootcamps']
  },
  {
    title: 'Urgent Care LLSA',
    specialties: ['Urgent Care']
  }
];

export function useTopicData() {
  return topics;
}
