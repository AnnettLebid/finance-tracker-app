import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@//components/ui/button";
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

const LoginForm = () => {
  return (
    <form>
      {/* <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
      </FormField>
      <FormField>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </FormField> */}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
