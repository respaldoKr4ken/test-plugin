export interface TestPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
