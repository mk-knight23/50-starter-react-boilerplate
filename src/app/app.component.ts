import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex flex-col transition-colors duration-500">

      <!-- Premium Navbar -->
      <nav
        class="h-24 border-b px-10 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md transition-colors duration-300"
        [class.border-slate-200]="!isDarkMode()"
        [class.border-white/5]="isDarkMode()"
        [class.bg-white/80]="!isDarkMode()"
        [class.bg-slate-950/80]="isDarkMode()"
        role="navigation"
        aria-label="Main navigation"
      >
         <div class="flex items-center space-x-3">
            <div class="bg-prime-primary p-2 rounded-xl flex items-center justify-center">
               <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h1 class="text-xl font-display font-black tracking-tight uppercase" [class.text-white]="isDarkMode()">
              Angular<span class="text-prime-primary">Prime</span>
            </h1>
         </div>

         <div class="hidden lg:flex items-center space-x-12" role="menubar">
            <a href="#" role="menuitem" class="nav-link">Manifesto</a>
            <a href="#" role="menuitem" class="nav-link">Architecture</a>
            <a href="#" role="menuitem" class="nav-link">UI Kit</a>
         </div>

         <div class="flex items-center space-x-6">
            <button
              (click)="toggleTheme()"
              class="p-2.5 rounded-xl transition-colors"
              [class.hover:bg-slate-100]="!isDarkMode()"
              [class.hover:bg-white/5]="isDarkMode()"
              [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <svg *ngIf="isDarkMode()" class="text-amber-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
              <svg *ngIf="!isDarkMode()" class="text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <a
              href="https://github.com/mk-knight23/53-React-Starter-Boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2.5 rounded-xl transition-colors"
              [class.hover:bg-slate-100]="!isDarkMode()"
              [class.hover:bg-white/5]="isDarkMode()"
              aria-label="View source on GitHub"
            >
               <svg class="text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0-.94-2 0 0.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <button class="btn btn-primary">Download v2.0</button>
         </div>
      </nav>

      <main class="flex-1">

         <!-- Hero Section -->
         <section class="max-w-7xl mx-auto px-10 py-32 space-y-16">
            <div class="max-w-3xl space-y-8">
               <div class="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-prime-primary/10 text-prime-primary border border-prime-primary/20">
                  <span class="w-2 h-2 bg-prime-primary rounded-full animate-ping"></span>
                  <span class="text-[10px] font-black uppercase tracking-[0.2em]">Engineering Reference Platform</span>
               </div>
               <h2 class="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] uppercase" [class.text-white]="isDarkMode()">
                  Ship <br />
                  <span class="gradient-heading italic font-light">Resilient</span> <br />
                  Applications.
               </h2>
               <p class="text-xl leading-relaxed max-w-xl transition-colors duration-300" [class.text-slate-500]="!isDarkMode()" [class.text-slate-400]="isDarkMode()">
                 A battle-tested Angular 21 boilerplate engineered for high-performance frontend architectures. Modular, type-safe, and production-ready.
               </p>

               <div class="flex flex-wrap gap-4 pt-4">
                  <button class="px-10 py-4 transition-colors rounded-2xl font-black text-lg flex items-center group"
                    [class.bg-slate-900]="!isDarkMode()"
                    [class.text-white]="!isDarkMode()"
                    [class.bg-white]="isDarkMode()"
                    [class.text-slate-950]="isDarkMode()"
                  >
                     Get Started
                     <svg class="ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                  <button class="px-10 py-4 glass border rounded-2xl font-black text-lg transition-colors"
                    [class.border-slate-200]="!isDarkMode()"
                    [class.border-white/10]="isDarkMode()"
                    [class.text-white]="isDarkMode()"
                  >Documentation</button>
               </div>
            </div>

            <!-- Feature Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Features">
               <div *ngFor="let feature of features" class="card-prime space-y-6 group" role="listitem">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                    [class.bg-slate-50]="!isDarkMode()"
                    [class.bg-white/5]="isDarkMode()"
                    [class.text-slate-400]="!isDarkMode()"
                    [class.group-hover:text-prime-primary]="true"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="24" [attr.height]="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [attr.d]="feature.iconPath"></svg>
                  </div>
                  <div class="space-y-2">
                     <h3 class="text-xl font-bold uppercase tracking-tight" [class.text-white]="isDarkMode()">{{ feature.title }}</h3>
                     <p class="text-sm leading-relaxed transition-colors duration-300" [class.text-slate-500]="!isDarkMode()" [class.text-slate-400]="isDarkMode()">{{ feature.desc }}</p>
                  </div>
               </div>
            </div>
         </section>

         <!-- Comparison -->
         <section class="py-32 transition-colors duration-300" [class.bg-slate-950]="isDarkMode()" [class.bg-slate-50]="!isDarkMode()">
            <div class="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
               <div class="space-y-8">
                  <h3 class="text-4xl font-display font-black uppercase tracking-tighter italic" [class.text-white]="isDarkMode()">
                    From Legacy to <br/> <span class="text-prime-primary not-italic">Limitless.</span>
                  </h3>
                  <div class="space-y-6">
                     <div *ngFor="let item of advantages" class="flex items-start space-x-4">
                        <div class="p-2 bg-prime-primary/20 rounded-lg text-prime-primary">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </div>
                        <p class="text-sm leading-relaxed" [class.text-slate-400]="isDarkMode()" [class.text-slate-500]="!isDarkMode()">
                          <span [class.text-white]="isDarkMode()" class="font-bold">{{ item.label }}:</span> {{ item.text }}
                        </p>
                     </div>
                  </div>
               </div>
               <div class="relative">
                  <div class="absolute inset-0 bg-prime-primary/20 blur-[120px] rounded-full"></div>
                  <div class="relative glass border p-10 rounded-[3rem] space-y-8 backdrop-blur-2xl transition-colors duration-300"
                    [class.border-white/10]="isDarkMode()"
                    [class.border-slate-200]="!isDarkMode()"
                    [class.bg-white/5]="isDarkMode()"
                    [class.bg-white]="!isDarkMode()"
                  >
                     <div class="flex items-center space-x-4 pb-8 border-b transition-colors duration-300"
                        [class.border-white/5]="isDarkMode()"
                        [class.border-slate-200]="!isDarkMode()"
                     >
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                          [class.bg-white/5]="isDarkMode()"
                          [class.bg-slate-100]="!isDarkMode()"
                        >
                          <svg class="text-prime-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                        </div>
                        <div>
                           <h4 class="font-bold" [class.text-white]="isDarkMode()">Signals Core</h4>
                           <p class="text-[10px] font-black uppercase tracking-widest" [class.text-slate-500]="isDarkMode()" [class.text-slate-400]="!isDarkMode()">Fine-grained Reactivity</p>
                        </div>
                     </div>
                     <div class="space-y-4 font-mono text-[10px] text-prime-primary">
                        <p class="opacity-60">// Reactive State Management</p>
                        <p>const count = signal(0);</p>
                        <p>const double = computed(() => count() * 2);</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- Footer -->
      <footer class="py-20 px-10 border-t transition-colors duration-300"
        [class.border-slate-200]="!isDarkMode()"
        [class.border-white/5]="isDarkMode()"
      >
         <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div class="space-y-6 max-w-xs">
               <div class="flex items-center space-x-2">
                  <svg class="text-prime-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                  <span class="font-display font-black text-lg tracking-tighter uppercase" [class.text-white]="isDarkMode()">AngularPrime</span>
               </div>
               <p class="text-sm leading-relaxed font-medium italic transition-colors duration-300" [class.text-slate-500]="!isDarkMode()" [class.text-slate-400]="isDarkMode()">
                 Redefining the standard for enterprise-grade Angular development environments.
               </p>
            </div>

            <nav class="grid grid-cols-2 md:grid-cols-3 gap-16 uppercase tracking-widest text-[10px] font-black" aria-label="Footer navigation">
               <div class="space-y-4">
                  <p class="transition-colors duration-300" [class.text-slate-400]="!isDarkMode()" [class.text-slate-500]="isDarkMode()">Framework</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary transition-colors">Signals</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">Router</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">Forms</a>
                  </div>
               </div>
               <div class="space-y-4">
                  <p class="transition-colors duration-300" [class.text-slate-400]="!isDarkMode()" [class.text-slate-500]="isDarkMode()">Resources</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary transition-colors">CLI</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">UI Kit</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">Guide</a>
                  </div>
               </div>
               <div class="space-y-4">
                  <p class="transition-colors duration-300" [class.text-slate-400]="!isDarkMode()" [class.text-slate-500]="isDarkMode()">Project</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary transition-colors">Github</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">License</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">Author</a>
                  </div>
               </div>
            </nav>
         </div>
      </footer>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .gradient-heading {
      background: linear-gradient(to right, #6366f1, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .nav-link {
      @apply text-xs font-black uppercase tracking-widest transition-colors;
      color: #94a3b8;
    }
    .nav-link:hover {
      color: #6366f1;
    }
  `]
})
export class App {
  private platformId = inject(PLATFORM_ID);

  isDarkMode = signal(true);

  features = [
    { title: 'Signals Core', desc: 'Fine-grained reactivity with zero boilerplate. Optimized change detection.', iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { title: 'Type Safe', desc: 'End-to-end type safety for routes, forms, and services.', iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { title: 'Modular', desc: 'Domain-driven feature structure for massive scalability.', iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { title: 'Design Ops', desc: 'Atomic components integrated with design tokens.', iconPath: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }
  ];

  advantages = [
    { label: 'Bundle', text: '50% reduction in initial payload compared to legacy React builds.' },
    { label: 'Latency', text: 'Real-time state updates using synchronous reactive signals.' },
    { label: 'Standard', text: 'Strict adherence to Angular 21+ best practices and patterns.' }
  ];

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        this.isDarkMode.set(!window.matchMedia('(prefers-color-scheme: light)').matches);
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    this.applyTheme();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
