export interface UserProfile {
  uid: string;
  shortId: string; // New short numeric ID for easy searching
  phone: string;
  password?: string;
  displayName: string;
  role: 'user' | 'admin';
  trialStartDate: string;
  isActiveUntil?: string;
  createdAt: string;
}

export interface ActivationKey {
  key: string;
  isUsed: boolean;
  usedBy?: string;
  createdAt: string;
  durationMonths: number;
}

export interface GlobalStats {
  aiRequestsCount: number;
  lastResetDate: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string;
    email?: string | null;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    tenantId?: string | null;
  }
}
