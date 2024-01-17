import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { RegisterSchema } from "@/schemas";
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import OnlyFansLogo from "@/assets/onlyfans-logo";

export const Registerform = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    setError("");
    setSuccess("");
    startTransition(() => {
      //TODO: add login api call
    });
  };

  return (
    <div className="h-screen">
      <div className="h-full flex">
        <div className="h-full w-1/2 text-white flex items-center justify-center bg-sky-500">
          <div>
            <OnlyFansLogo />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <CardWrapper
            headerLabel="Create your account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/login"
            showSocial
          >
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Jon Doe"
                            type="text"
                          />
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
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="jondoe@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* TODO: add error and success */}
                <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full bg-blue-400 hover:bg-blue-500"
                >
                  Register
                </Button>
              </form>
            </Form>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

// this is a beautiful blue color gradient
//bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800
