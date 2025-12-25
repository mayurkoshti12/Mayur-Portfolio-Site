import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log for now (replace later with EmailJS / API)
      console.log("Contact form submitted:", data);

      return true;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });
}
