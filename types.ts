export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Signature' | 'Donburi' | 'Sushi' | 'Dessert';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  isError?: boolean;
  sources?: { uri: string; title: string }[];
}

export enum RequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}