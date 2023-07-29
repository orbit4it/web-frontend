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
  nis?: string | null;
  role?: string;
  grade?: Grade;
  division?: Division;
  image?: string;
  sosialMedia?: Source[];
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
  schedule?: Schedule[];
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

export interface FinanceRecaptRes {
  data: {
    financeRecapt: FinanceRecapt[];
  } | null;
  errors?: Errors[];
}

export interface FinanceRecapt {
  id: number;
  type: 'Pemasukan' | 'Pengeluaran';
  title: string;
  desc: string | null;
  admin: string;
  count: number;
  createdAt: string;
  level: 'Genting' | 'Penting' | 'Normal' | null;
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
  pemasukan = 'Pemasukan',
  pengeluaran = 'Pengeluaran',
}

export enum TransactionLevel {
  normal = 'Normal',
  penting = 'Penting',
  genting = 'Genting',
}

export interface Errors {
  message: string;
  locations?: any[];
  path?: string[];
}

export interface PendingUser {
  id: number;
  name: string;
  nis?: string | null;
  motivation: string;
  email: string;
  division: {
    id: number;
    name: string;
  };
  grade: {
    id: number;
    name: string;
  };
}

export interface CalonUserProps extends PendingUser {
  terima: false;
  tolak: false;
}

export interface DetailCalonState {
  division: string;
  email: string;
  grade: string;
  name: string;
  nis: string;
  motivasi: string;
}

export interface RefreshTokenRes {
  data?: {
    refreshToken: {
      accessToken?: string;
      error?: string;
    };
  } | null;
  errors?: Errors[];
}

export interface PendingUserRes {
  data?: {
    pendingUsers: PendingUser[];
  } | null;
  errors?: Errors[];
}

export interface UsersRes {
  data?: {
    users: User[];
  } | null;
  errors?: Errors[];
}

export interface Grade {
  grade?: string;
  id?: number;
  name?: string;
  vocational?: string;
}
