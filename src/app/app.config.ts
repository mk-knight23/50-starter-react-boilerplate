import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { 
  LucideAngularModule, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Zap, 
  ChevronRight, 
  Github,
  Sun,
  Moon,
  Component as ComponentIcon,
  Box,
  Layers,
  ArrowRight
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ 
      Rocket, 
      ShieldCheck, 
      Cpu, 
      Layout, 
      Zap, 
      ChevronRight, 
      Github,
      Sun,
      Moon,
      ComponentIcon,
      Box,
      Layers,
      ArrowRight
    }))
  ]
};
