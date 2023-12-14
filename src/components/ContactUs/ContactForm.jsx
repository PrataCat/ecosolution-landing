import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LightBtn } from "../Buttons/Buttons";
import {
  ErrorMessage,
  Form,
  Input,
  Label,
  Textarea,
} from "./ContactForm.styled";

const schema = z.object({
  fullname: z.string().min(3),
  phone: z.string().min(12),
  email: z.string().email(),
  message: z.string().optional(),
});

const messages = {
  fullname: "Wrong Fullname",
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
        <Label htmlFor="fullname">
          * Full name:
          <Input
            type="text"
            id="fullname"
            placeholder="John Rosie"
            required={errors.fullname}
            {...register("fullname")}
          ></Input>
          <ErrorMessage>
            {errors.fullname ? messages.fullname : " "}
          </ErrorMessage>
        </Label>

        <Label htmlFor="email">
          * E-mail:
          <Input
            type="email"
            id="email"
            placeholder="johnrosie@gmail.com"
            required={errors.email}
            {...register("email")}
          ></Input>
          <ErrorMessage>{errors.email ? messages.email : " "}</ErrorMessage>
        </Label>

        <Label htmlFor="phone">
          * Phone:
          <Input
            type="number"
            id="phone"
            placeholder="380961234567"
            required={errors.phone}
            {...register("phone")}
          ></Input>
          <ErrorMessage>{errors.phone ? messages.phone : " "}</ErrorMessage>
        </Label>

        <Label htmlFor="message">
          Message:
          <Textarea
            type="text"
            id="message"
            {...register("message")}
          ></Textarea>
        </Label>
        <LightBtn prop={"submit"}>Send</LightBtn>
      </Form>
    </>
  );
};

export default ContactForm;
