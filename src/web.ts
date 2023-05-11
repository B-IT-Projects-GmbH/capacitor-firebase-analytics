import { WebPlugin } from '@capacitor/core';

import type { FirebaseAnalyticsPlugin } from './definitions';

export class FirebaseAnalyticsWeb
  extends WebPlugin
  implements FirebaseAnalyticsPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
