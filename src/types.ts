export interface BusinessProfile {
  name: string;
  category: string;
  phone: string;
  address: string;
  hours: string;
  description: string;
  isSynced: boolean;
  isVerified: boolean;
  status: 'PENDING' | 'VERIFIED' | 'UPDATED' | 'NOT_CREATED';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  reply?: string;
  replyDraft?: string;
}

export interface BusinessPost {
  id: string;
  title: string;
  content: string;
  date: string;
  views: number;
  clicks: number;
}

export interface VerificationDocument {
  id: string;
  name: string;
  type: 'RCCM' | 'NINEA' | 'ID';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  fileName: string;
  uploadedAt: string;
}

export interface ConsoleRequest {
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH';
  payload: string;
  loading: boolean;
  response: string;
  status: number | null;
}
