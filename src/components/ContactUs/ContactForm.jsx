import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LightBtn } from "../Buttons/Buttons";
import { Form, Input, Label } from "./ContactForm.styled";

const schema = z.object({
  fullname: z.string().min(3),
  phone: z.number(),
  email: z.string().email(),
  message: z.string().optional(),
});

const messages = {
  fullName: "Wrong Fullname",
  email: "Wrong Email",
  phone: "Wrong Phone",
};

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label htmlFor="fullname">* Full name:</Label>
        <Input
          type="text"
          id="fullname"
          placeholder="John Rosie"
          {...register("fullname")}
        ></Input>
        <p>{errors.fullname ? messages.fullName : " "}</p>
        <Label htmlFor="email">* E-mail:</Label>
        <Input
          type="email"
          id="email"
          placeholder="johnrosie@gmail.com"
          {...register("email")}
        ></Input>
        {errors.email && <p>{messages.email}</p>}
        <Label htmlFor="phone">* Phone:</Label>
        <Input
          type="number"
          id="phone"
          placeholder="380961234567"
          {...register("phone", {
            valueAsNumber: true,
          })}
        ></Input>
        {errors.phone && <p>{messages.phone}</p>}
        <Label htmlFor="message">Message:</Label>
        <Input type="text" id="message" {...register("message")}></Input>
        <LightBtn type="submit">Send</LightBtn>
      </Form>
    </>
  );
};

export default ContactForm;
