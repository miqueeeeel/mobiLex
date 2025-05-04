
"use client"
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMapUrl, type Location } from '@/services/map'; // Adjust path as needed

export default function MapPage() {
  const [mapUrl, setMapUrl] = useState<string>('#'); // Default to '#' or empty string
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const officeLocation: Location = { lat: 40.416775, lng: -3.703790 }; // Coordinates for central Madrid (approx Puerta del Sol)

  useEffect(() => {
    async function fetchMapUrl() {
      setIsLoading(true);
      setError(null);
      try {
        const url = await getMapUrl(officeLocation);
        setMapUrl(url);
      } catch (err) {
        console.error("Failed to fetch map URL:", err);
        setError("No se pudo cargar la URL del mapa.");
        // Keep default URL or set to a fallback
      } finally {
        setIsLoading(false);
      }
    }

    fetchMapUrl();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Nuestra Ubicación en Madrid
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
           <Card className="shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                     <MapPin className="h-5 w-5" /> Mapa Interactivo
                  </CardTitle>
                   <CardDescription>
                     Encuentra nuestra oficina en el corazón de Madrid.
                   </CardDescription>
                </CardHeader>
                <CardContent className="aspect-[16/9] bg-muted flex items-center justify-center relative">
                  {/* Placeholder for the map integration */}
                  {isLoading && <p className="text-muted-foreground">Cargando mapa...</p>}
                  {error && <p className="text-destructive">{error}</p>}
                  {!isLoading && !error && (
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.3886087098!2d-3.819622888067467!3d40.43795430449729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" // Replace with actual embed code or API integration
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de Madrid"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                  )}
                 {/* Note: Replace the iframe src with a dynamic one from a Maps API or keep it static if sufficient */}
                </CardContent>
           </Card>
        </div>
        <div className="md:col-span-1">
          <Card className="shadow-lg h-full">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 text-secondary">
                    <Building className="h-5 w-5" /> Detalles de la Oficina
               </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-muted-foreground">Calle Falsa 123, Planta 4<br/>28001 Madrid, España</p>
                </div>
                 <div>
                     <h3 className="font-semibold">Horario de Atención</h3>
                     <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                     <p className="text-muted-foreground">Sábados y Domingos: Cerrado</p>
                 </div>
                 <div>
                     <h3 className="font-semibold">Cómo Llegar</h3>
                     <p className="text-muted-foreground">
                         Accesible mediante Metro (Líneas 1, 2, 3 - Sol) y múltiples líneas de autobús. Parking público cercano disponible.
                     </p>
                 </div>
                 <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading || !!error}>
                   <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                     Abrir en Google Maps
                   </a>
                 </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
