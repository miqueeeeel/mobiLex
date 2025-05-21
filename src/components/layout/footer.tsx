
"use client";

import { Scale } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Scale className="h-5 w-5" />
          <span>
            {currentYear !== null ? `© ${currentYear}` : `© `} LexMobilis. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex gap-4">
          {/* Add social links or other footer links here if needed */}
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
