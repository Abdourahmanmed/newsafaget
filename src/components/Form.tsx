import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

// Schéma de validation avec Zod
const formSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide."),
  name: z.string().min(2, "Veuillez entrer un nom valide."),
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Veuillez entrer un numéro de téléphone valide."),
  message: z
    .string()
    .min(10, "Le message doit comporter au moins 10 caractères."),
});

const ReusableForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // État pour gérer le statut d'envoi et les messages de retour
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Votre message a été envoyé avec succès !");
      } else {
        setErrorMessage("Une erreur est survenue lors de l'envoi de l'email.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-4 rounded-lg shadow-xl border"
      >
        <h1 className="text-3xl text-orange-700 font-semibold py-4">Envoyer un message</h1>

        {/* Formulaire des champs */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Entrez votre nom" type="text" />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Entrez votre email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Entrez votre numéro de téléphone" type="text" />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Entrez votre message" className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Affichage d'un spinner et désactivation du bouton lors de l'envoi */}
        <Button type="submit" className="w-full bg-orange-700" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
              Envoi en cours...
            </div>
          ) : (
            "Envoyer"
          )}
        </Button>

        {/* Message de confirmation ou d'erreur */}
        {message && <p className="text-green-600 mt-2">{message}</p>}
        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      </form>
    </Form>
  );
};

export default ReusableForm;
