export enum Positions {
  topleft = 'top-left',
  topright = 'top-right',
  bottomleft = 'bottom-left',
  bottomright = 'bottom-right',
  centertop = 'center-top',
  centerbottom = 'center-bottom',
}

export interface User {
  id: number;
  name: string;
  grade: string;
  division: string;
  image: string;
}

export interface UserDetail extends User {
  motivation: string;
  attdScore: number;
  socialMedia?: Source[];
  waNumber?: string;
  bio?: string;
  address?: string;
  title?: string;
}

export interface Schedule {
  id: number;
  type: string;
  title: string;
  start: string;
  end: string;
  location: string;
  subject?: string;
}

export interface Division {
  id: number;
  name: string;
  waGroupLink?: string;
  logo?: string;
}

export interface RecentSubject {
  id: number;
  title: string;
  speaker: string;
  createdAt: string;
  description: string;
  author: string;
}

export interface TopSubject extends RecentSubject {
  rate: number;
  preview: string;
}

export interface SubjectDetail extends RecentSubject {
  file?: Source;
  quiz?: Quiz;
  comments?: Comment[];
}

export interface Quiz {
  id: number;
  title: string;
  count: number;
  createdAt: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  img?: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  answer: string;
}

export interface Comment {
  id: number;
  userName: string;
  userImage: string;
  comment?: string;
  createdAt: string;
  rate: number;
}

export interface Competition {
  id: number;
  title: string;
  poster: string;
}

export interface CompetitionDetail extends Competition {
  author: string;
  startTime: string;
  paid: boolean;
  price?: number;
  description: string;
  req?: string;
  contactAdmin: string;
  source: CompetitionSource;
}

export interface CompetitionSource {
  id: number;
  name: string;
  source: Source[];
}

export interface Finance {
  totalIncome: number;
  totalOutcome: number;
  totalBalance: number;
}

export interface FinanceRes {
  data: {
    finance: Finance;
  } | null;
  errors?: Errors[];
}

export interface FinanceGraphRes {
  data: {
    graph: FinanceGraph;
  } | null;
  errors?: Errors[];
}

export interface FinanceGraph {
  income: GraphDataSet[];
  outcome: GraphDataSet[];
}

export interface GraphDataSet {
  time: string;
  count: number;
}

export interface FinanceRecapt {
  id: number;
  type: TransactionType;
  title: string;
  desc: string;
  transactioner: string[];
  count: number;
  createdAt: string;
  level?: TransactionLevel;
}

export interface Leaderboard {
  id: number;
  type: DivisionType;
  list: LeaderboardList[];
}

export interface LeaderboardList {
  rank: number;
  name: string;
  score: number;
  image: string;
  division?: string;
}

export enum DivisionType {
  webDev = 'Web Development',
  gameDev = 'Game Development',
  cinematography = 'Cinematography',
  designGraphic = 'Design Graphic',
  itSupport = 'IT Support',
  globals = 'Globals',
}

export interface Source {
  name: string;
  link: string;
  type: SourceType | SocialMediaType;
}

export enum SocialMediaType {
  facebook = 'facebook',
  instagram = 'instagram',
  github = 'github',
  email = 'email',
  linkedin = 'linkedin',
  twitter = 'twitter',
}

export enum SourceType {
  website = 'website',
  docs = 'docs',
  ppt = 'ppt',
  pdf = 'pdf',
  other = 'other',
}

export enum TransactionType {
  income = 'income',
  outcome = 'outcome',
}

export enum TransactionLevel {
  normal = 'normal',
  important = 'important',
  precarious = 'precarious',
}

export interface Errors {
  message: string;
  locations?: any[];
  path?: string[];
}
