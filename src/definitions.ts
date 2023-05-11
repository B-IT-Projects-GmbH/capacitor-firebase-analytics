export interface FirebaseAnalyticsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
