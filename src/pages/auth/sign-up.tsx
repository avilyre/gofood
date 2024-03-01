import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpForm } from "@/pages/auth/auth.schema";

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);

    toast.success("Cadastro finalizado!", {
      description: "Seu estabelecimento foi cadastrado!",
      action: {
        label: "Login",
        onClick: () => navigate("/sign-in"),
      },
    });
  }

  return (
    <Fragment>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="restaurantName"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="managerName"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="phone" {...register("phone")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Finalizar Cadastro
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/sign-in">Fazer Login</Link>
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="underline underline-offset-4">
                Termos
              </a>{" "}
              de serviço e{" "}
              <a href="#" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
