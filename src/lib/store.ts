import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type Language = 'en' | 'fa';
export type Theme = 'light' | 'dark';

export const $language = atom<Language>('en');
export const $theme = persistentAtom<Theme>('portfolio-theme', 'light');

export const translations = {
  en: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    resume: 'Resume (PDF)',
    hero: {
      title: 'Daniel Zahmatkesh',
      subtitle: 'Lead Front-End Developer',
      description: 'Specializing in high-performance React applications, complex state management, and geospatial web platforms.',
      featuredProjects: 'Featured Projects',
      featuredProjectsDesc: 'Open-source engineering tools and interactive WebGIS applications.',
      launchApp: 'Launch App',
      viewRepo: 'View Repository'
    },
    posts: 'Blog Posts',
    all: 'All',
    english: 'English',
    persian: 'فارسی',
    themeLight: 'Light Mode',
    themeDark: 'Dark Mode',
  },
  fa: {
    home: 'خانه',
    about: 'درباره من',
    blog: 'وبلاگ',
    resume: 'رزومه (PDF)',
    hero: {
      title: 'دانیال زحمتکش',
      subtitle: 'توسعه دهنده ارشد فرانت‌اند',
      description: 'متخصص در برنامه‌های با کارایی بالای React، مدیریت وضعیت‌های پیچیده و پلتفرم‌های وب مکانی.',
      featuredProjects: 'پروژه‌های منتخب',
      featuredProjectsDesc: 'ابزارهای مهندسی متن‌باز و برنامه‌های تعاملی WebGIS.',
      launchApp: 'اجرای برنامه',
      viewRepo: 'مشاهده مخزن'
    },
    posts: 'پست‌های وبلاگ',
    all: 'همه',
    english: 'انگلیسی',
    persian: 'فارسی',
    themeLight: 'حالت روشن',
    themeDark: 'حالت تاریک',
  }
};
