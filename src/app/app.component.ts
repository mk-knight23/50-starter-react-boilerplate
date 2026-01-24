import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Zap, 
  ChevronRight, 
  Github,
  Sun,
  Moon,
  Box,
  Layers,
  ArrowRight,
  LucideAngularModule
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen flex flex-col transition-colors duration-500">
      
      <!-- Premium Navbar -->
      <nav class="h-24 border-b border-slate-200 dark:border-white/5 px-10 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
         <div class="flex items-center space-x-3">
            <div class="bg-prime-primary p-2 rounded-xl">
               <lucide-icon name="rocket" [size]="24" class="text-white"></lucide-icon>
            </div>
            <h1 class="text-xl font-display font-black tracking-tight uppercase dark:text-white">Angular<span class="text-prime-primary">Prime</span></h1>
         </div>

         <div class="hidden lg:flex items-center space-x-12">
            <a href="#" class="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-prime-primary transition-colors">Manifesto</a>
            <a href="#" class="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-prime-primary transition-colors">Architecture</a>
            <a href="#" class="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-prime-primary transition-colors">UI Kit</a>
         </div>

         <div class="flex items-center space-x-6">
            <button (click)="toggleTheme()" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
               <lucide-icon [name]="isDarkMode() ? 'sun' : 'moon'" [size]="20" class="text-slate-400"></lucide-icon>
            </button>
            <a href="https://github.com/mk-knight23/53-React-Starter-Boilerplate" target="_blank" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
               <lucide-icon name="github" [size]="20" class="text-slate-400"></lucide-icon>
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
               <h2 class="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] uppercase dark:text-white">
                  Ship <br />
                  <span class="gradient-heading italic font-light">Resilient</span> <br />
                  Applications.
               </h2>
               <p class="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">A battle-tested Angular 19 boilerplate engineered for high-performance frontend architectures. Modular, type-safe, and production-ready.</p>
               
               <div class="flex flex-wrap gap-4 pt-4">
                  <button class="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-lg flex items-center group">
                     Get Started <lucide-icon name="chevron-right" class="ml-2 group-hover:translate-x-1 transition-transform" [size]="20"></lucide-icon>
                  </button>
                  <button class="px-10 py-4 glass border border-slate-200 dark:border-white/10 rounded-2xl font-black text-lg dark:text-white">Documentation</button>
               </div>
            </div>

            <!-- Feature Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div *ngFor="let feature of features" class="card-prime space-y-6 group">
                  <div class="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-prime-primary transition-colors">
                     <lucide-icon [name]="feature.icon" [size]="24"></lucide-icon>
                  </div>
                  <div class="space-y-2">
                     <h3 class="text-xl font-bold uppercase tracking-tight dark:text-white">{{ feature.title }}</h3>
                     <p class="text-sm text-slate-500 leading-relaxed">{{ feature.desc }}</p>
                  </div>
               </div>
            </div>
         </section>

         <!-- Comparison -->
         <section class="bg-slate-950 py-32">
            <div class="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
               <div class="space-y-8">
                  <h3 class="text-4xl font-display font-black text-white uppercase tracking-tighter italic">From Legacy to <br/> <span class="text-prime-primary not-italic">Limitless.</span></h3>
                  <div class="space-y-6">
                     <div *ngFor="let item of advantages" class="flex items-start space-x-4">
                        <div class="p-2 bg-prime-primary/20 rounded-lg text-prime-primary">
                           <lucide-icon name="zap" [size]="16"></lucide-icon>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed"><span class="text-white font-bold">{{ item.label }}:</span> {{ item.text }}</p>
                     </div>
                  </div>
               </div>
               <div class="relative">
                  <div class="absolute inset-0 bg-prime-primary/20 blur-[120px] rounded-full"></div>
                  <div class="relative glass border-white/10 p-10 rounded-[3rem] space-y-8 backdrop-blur-2xl bg-white/5">
                     <div class="flex items-center space-x-4 pb-8 border-b border-white/5">
                        <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-prime-primary"><lucide-icon name="box" [size]="24"></lucide-icon></div>
                        <div>
                           <h4 class="text-white font-bold">Signals Core</h4>
                           <p class="text-[10px] font-black uppercase text-slate-500 tracking-widest">Fine-grained Reactivity</p>
                        </div>
                     </div>
                     <div class="space-y-4 font-mono text-[10px] text-prime-primary">
                        <p>// Reactive State Management</p>
                        <p>const count = signal(0);</p>
                        <p>const double = computed(() => count() * 2);</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- Footer -->
      <footer class="py-20 px-10 border-t border-slate-200 dark:border-white/5">
         <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div class="space-y-6 max-w-xs">
               <div class="flex items-center space-x-2">
                  <lucide-icon name="rocket" class="text-prime-primary" [size]="20"></lucide-icon>
                  <span class="font-display font-black text-lg tracking-tighter uppercase dark:text-white">AngularPrime</span>
               </div>
               <p class="text-slate-500 text-sm leading-relaxed font-medium italic">Redefining the standard for enterprise-grade Angular development environments.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-16 uppercase tracking-widest text-[10px] font-black">
               <div class="space-y-4">
                  <p class="text-slate-400">Framework</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary">Signals</a>
                     <a href="#" class="hover:text-prime-primary">Router</a>
                     <a href="#" class="hover:text-prime-primary">Forms</a>
                  </div>
               </div>
               <div class="space-y-4">
                  <p class="text-slate-400">Resources</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary">CLI</a>
                     <a href="#" class="hover:text-prime-primary">UI Kit</a>
                     <a href="#" class="hover:text-prime-primary">Guide</a>
                  </div>
               </div>
               <div class="space-y-4">
                  <p class="text-slate-400">Project</p>
                  <div class="flex flex-col gap-3">
                     <a href="#" class="hover:text-prime-primary transition-colors">Github</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">License</a>
                     <a href="#" class="hover:text-prime-primary transition-colors">Author</a>
                  </div>
               </div>
            </div>
         </div>
      </footer>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .gradient-heading { @apply bg-clip-text text-transparent bg-gradient-to-r from-prime-primary to-indigo-400; }
  `]
})
export class App {
  isDarkMode = signal(true);

  features = [
    { title: 'Signals Core', desc: 'Fine-grained reactivity with zero boilerplate. Optimized change detection.', icon: 'cpu' },
    { title: 'Type Safe', desc: 'End-to-end type safety for routes, forms, and services.', icon: 'shield-check' },
    { title: 'Modular', desc: 'Domain-driven feature structure for massive scalability.', icon: 'layers' },
    { title: 'Design Ops', desc: 'Atomic components integrated with design tokens.', icon: 'box' }
  ];

  advantages = [
    { label: 'Bundle', text: '50% reduction in initial payload compared to legacy React builds.' },
    { label: 'Latency', text: 'Real-time state updates using synchronous reactive signals.' },
    { label: 'Standard', text: 'Strict adherence to Angular 19+ best practices and patterns.' }
  ];

  constructor() {
    if (this.isDarkMode()) document.documentElement.classList.add('dark');
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    document.documentElement.classList.toggle('dark');
  }
}
