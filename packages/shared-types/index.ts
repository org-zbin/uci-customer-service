export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}
