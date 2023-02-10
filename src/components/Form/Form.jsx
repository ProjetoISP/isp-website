import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    message: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <label>Mensagem</label>
      <input {...register("message")} />
      <Button type="submit"> Enviar </Button>
      <p>{errors.message?.message}</p>
    </form>
  );
};
