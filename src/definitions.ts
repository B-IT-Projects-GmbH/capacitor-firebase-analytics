export interface FirebaseAnalyticsPlugin {
  analyticsInit(options: FirebaseConfig): Promise<void>;
  analyticsLogEvent(options: { name: string, params?: { [key: string]: any } }): Promise<void>;
  analyticsSetUserProperties(options: { properties: { [key: string]: any } }): Promise<void>;
  analyticsSetUserIdentifier(options: { userId: string }): Promise<void>;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
