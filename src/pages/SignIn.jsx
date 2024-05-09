import SignInContent from "../features/auth/SignInContent";
import AuthHeader from "../ui/AuthHeader";

function SignIn() {
  return (
    <div className="rounded-xl w-5/6 bg-base-200 drop-shadow-xl max-w-[800px] m-auto mt-[150px]">
      <AuthHeader />
      <SignInContent />
    </div>
  );
}

export default SignIn;
