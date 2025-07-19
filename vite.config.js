import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✨ الحل هنا في تغيير الـ base:
export default defineConfig({
  plugins: [react()],
  base: '/Burger-Restaurant/' // اسم الريبو على GitHub
});
