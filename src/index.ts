import { registerPlugin } from '@capacitor/core';

import type { TestPlugin } from './definitions';

const Test = registerPlugin<TestPlugin>('Test', {
  web: () => import('./web').then((m) => new m.TestWeb()),
});

export * from './definitions';
export { Test };
