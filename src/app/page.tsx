
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]"> {/* Adjust based on header height */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                  Bienvenido a LexMobilis
                </h1>
                <p className="max-w-[600px] text-secondary-foreground/90 md:text-xl">
                  Su socio de confianza para asesoría legal experta en Madrid. Ofrecemos soluciones personalizadas para sus necesidades legales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Contactar Ahora</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-secondary-foreground border-secondary-foreground hover:bg-background hover:text-foreground">
                   <Link href="/map">Nuestra Ubicación</Link>
                </Button>
              </div>
            </div>
             <Image
               src="https://picsum.photos/600/400"
               width={600}
               height={400}
               alt="Legal Advisory"
               data-ai-hint="legal scales courthouse"
               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
             />
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios legales para particulares y empresas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary"><CheckCircle className="text-accent" /> Derecho Mercantil</CardTitle>
                  <CardDescription>Asesoramiento en contratos, sociedades, y disputas comerciales.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Ayudamos a su empresa a navegar el complejo panorama legal.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-secondary"><CheckCircle className="text-accent" /> Derecho Civil</CardTitle>
                   <CardDescription>Resolución de conflictos, reclamaciones, herencias y propiedades.</CardDescription>
                </CardHeader>
                 <CardContent>
                   <p className="text-sm text-muted-foreground">Protegemos sus derechos e intereses personales.</p>
                 </CardContent>
              </Card>
               <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-secondary"><CheckCircle className="text-accent" /> Derecho Laboral</CardTitle>
                   <CardDescription>Asistencia en contratos laborales, despidos y negociaciones.</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-muted-foreground">Defendemos sus derechos como trabajador o empleador.</p>
                 </CardContent>
               </Card>
            </div>
          </div>
        </section>

         {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted border-t border-b">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-secondary">
                    ¿Listo para obtener asesoría legal experta?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    No espere más. Póngase en contacto con nosotros hoy mismo para una consulta inicial.
                </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                 <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                   <Link href="/contact">Solicitar Consulta</Link>
                 </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
