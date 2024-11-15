"use client";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

interface CreditCardsFormProps {
  open: boolean;
  onOpenChange: () => void;
}

const formSchema = z.object({
  cardHolderName: z
    .string()
    .min(2, { message: "Card holder name should have min 2 characters" })
    .max(20, { message: "Card holder name should have min 20 characters" }),
  cardNumber: z
    .string()
    .min(16, { message: "Card number should have 16 characters" })
    .max(16),
  cardCompany: z
    .string()
    .min(2, { message: "Company name should be at least 2 characters" })
    .max(20, { message: "Too long company name" }),
  expirationDate: z.number(),
});

const CreditCardsForm = ({ open, onOpenChange }: CreditCardsFormProps) => {
  const defaultValues = {
    cardNumber: "",
    companyName: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values:", values);
    onOpenChange();
  };

  useEffect(() => {
    form.reset();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-10">New Card</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="cardHolderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1111111111111111"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cardCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Cal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiration date</FormLabel>
                      <FormControl>
                        <Input placeholder="09/28" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={!form.formState.isValid}>
                  Add
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreditCardsForm;
