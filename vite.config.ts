// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/korit_3_frontend_deployment/',
  //base는 리포지토리명과 동일하게 가져갑니다.
  plugins: [react()],
});

