import { WebPlugin } from '@capacitor/core';

import type { TestPlugin } from './definitions';

export class TestWeb extends WebPlugin implements TestPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
