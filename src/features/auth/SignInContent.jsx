import { useForm } from "react-hook-form";
import InputError from "../../ui/InputError";

function SignInContent() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <form className="flex space-y-4 lg:px-32 sm:px-16 px-8 py-16 flex-col">
      <input
        type="text"
        id="email"
        placeholder="Email"
        className="input input-bordered input-secondary w-full bg-base-200"
        {...register("email", {
          required: "This field is required",
        })}
      />
      {errors?.email?.message && <InputError message={errors.email.message} />}
      <input
        type="text"
        id="password"
        placeholder="Password"
        className="input input-bordered input-secondary w-full bg-base-200"
        {...register("password", {
          required: "This field is required",
        })}
      />
      {errors?.password?.message && (
        <InputError message={errors.password.message} />
      )}
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={handleSubmit(onSubmit, onError)}
      >
        Sign in
      </button>
      <div className="divider divider-secondary">OR</div>
      <button className="btn btn-secondary" onClick={(e) => e.preventDefault()}>
        Sign in using google
      </button>
    </form>
  );
}

export default SignInContent;
