import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    exclude: process.env.VITEST_LABS === '1' ? [] : ['tests/labs/**'],
  },
});
