
"use client"; // Required for react-hook-form

import Link from 'next/link'; // Added import
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }).max(500, {
    message: "El mensaje no puede exceder los 500 caracteres.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate form submission
    console.log(values);
    // In a real app, you would send this data to your backend here
    // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });

    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });
    form.reset(); // Reset form after successful submission
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
       <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
         Contáctanos
       </h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
           <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-secondary">Formulario de Contacto</CardTitle>
                    <CardDescription>
                    Envíanos tu consulta y te responderemos a la brevedad posible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <Form {...form}>
                       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                         <FormField
                           control={form.control}
                           name="name"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Nombre</FormLabel>
                               <FormControl>
                                 <Input placeholder="Tu nombre completo" {...field} />
                               </FormControl>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                         <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Correo Electrónico</FormLabel>
                               <FormControl>
                                 <Input type="email" placeholder="tu@email.com" {...field} />
                               </FormControl>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                         <FormField
                           control={form.control}
                           name="subject"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Asunto</FormLabel>
                               <FormControl>
                                 <Input placeholder="Asunto de tu consulta" {...field} />
                               </FormControl>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                         <FormField
                           control={form.control}
                           name="message"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Mensaje</FormLabel>
                               <FormControl>
                                 <Textarea
                                   placeholder="Escribe tu mensaje aquí..."
                                   className="resize-none"
                                   rows={5}
                                   {...field}
                                 />
                               </FormControl>
                                <FormDescription>
                                    Máximo 500 caracteres.
                                </FormDescription>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                         <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Mensaje</Button>
                       </form>
                     </Form>
                </CardContent>
           </Card>
        </div>
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-secondary">Información Adicional</h2>
            <p className="text-muted-foreground">
                También puedes contactarnos a través de los siguientes medios o visitar nuestra oficina.
            </p>
            <div className="space-y-4">
                 <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Correo Electrónico</h3>
                        <a href="mailto:info@lexmobilis.es" className="text-muted-foreground hover:text-primary transition-colors">info@lexmobilis.es</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                     <div>
                         <h3 className="font-semibold">Teléfono</h3>
                         <a href="tel:+34912345678" className="text-muted-foreground hover:text-primary transition-colors">+34 912 345 678</a>
                     </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                     <div>
                         <h3 className="font-semibold">Dirección</h3>
                         <p className="text-muted-foreground">Anabel Segura<br/>1128108 Alcobendas, Madrid</p>
                         <Button variant="link" className="p-0 h-auto text-primary" asChild>
                            <Link href="/map">Ver en el mapa</Link>
                         </Button>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
