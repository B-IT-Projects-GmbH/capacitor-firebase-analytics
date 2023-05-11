import { WebPlugin } from '@capacitor/core';
import type { Analytics } from "firebase/analytics";
import { getAnalytics, logEvent, setUserId, setUserProperties } from "firebase/analytics";
import { initializeApp } from 'firebase/app';

import type { FirebaseAnalyticsPlugin, FirebaseConfig } from './definitions';

export class FirebaseAnalyticsWeb
  extends WebPlugin
  implements FirebaseAnalyticsPlugin
{
  private analytics: Analytics | undefined;

  async analyticsInit(options: FirebaseConfig): Promise<void> {
    const app = await initializeApp(options);
    this.analytics = getAnalytics(app);
  }

  async analyticsLogEvent(options: { name: string; params?: { [p: string]: any } }): Promise<any> {
    if (this.analytics) {
      return logEvent(this.analytics, options.name, options.params);
    } else {
      return Promise.reject('Firebase Analytics is not initialized');
    }
  }

  async analyticsSetUserProperties(properties: { [p: string]: any }): Promise<void> {
    if (this.analytics) {
      return setUserProperties(this.analytics, properties);
    } else {
      return Promise.reject('Firebase Analytics is not initialized');
    }
  }

  async analyticsSetUserIdentifier(options: { userId: string }): Promise<void> {
    if (this.analytics) {
      return setUserId(this.analytics, options.userId);
    } else {
      return Promise.reject('Firebase Analytics is not initialized');
    }
  }
}
