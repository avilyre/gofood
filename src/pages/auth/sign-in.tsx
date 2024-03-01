import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInForm } from "@/pages/auth/auth.schema";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);

    toast.success("E-mail enviado", {
      description: "Enviamos um link de autenticação para o seu e-mail.",
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    });
  }

  return (
    <Fragment>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-4">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Acessar painel
            </Button>

            <Button asChild variant="secondary" className="w-full">
              <Link to="/sign-up">Novo Estabelecimento</Link>
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
