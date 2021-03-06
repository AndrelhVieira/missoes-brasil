import { Form, Input, Textarea, ButtonStyled } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import { notify } from "react-notify-toast";

const schema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório!"),
  email: yup.string().email().required("Este campo é obrigatório!"),
  message: yup.string().required("Este campo é obrigatório!"),
});

const ContactForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    emailjs.sendForm("", "", "", "").then(
      (result) => {
        notify.show("Mensagem enviada com sucesso!", "success", 2500);
      },
      (error) => {
        notify.show(error, "warning", 2500);
      }
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleData)} id="contactFormId">
        <Input
          name="name"
          placeholder="Nome"
          {...register("name")}
          autoComplete="off"
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Telefone (Ex. 00 9 1234-5678)"
          pattern="\d{2} ?\d ?\d{4}-?\d{4}"
          required
          autoComplete="off"
        />
        <Input
          name="email"
          type="email"
          {...register("email")}
          placeholder="Email"
          autoComplete="off"
          required
        />
        <Input
          name="cep"
          type="text"
          placeholder="CEP (Ex. 12345-678)"
          pattern="\d{5}-?\d{3}"
          autoComplete="off"
          required
        />
        <Textarea
          name="message"
          {...register("message")}
          placeholder="Mensagem"
          autoComplete="off"
          required
          rows="5"
        />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </Form>
    </>
  );
};

export default ContactForm;
