import SignUpContent from "../features/auth/SignUpContent";
import AuthHeader from "../ui/AuthHeader";

function SignUp() {
  return (
    <div className="rounded-xl w-5/6 bg-base-200 drop-shadow-xl max-w-[800px] m-auto mt-[150px]">
      <AuthHeader />
      <SignUpContent />
    </div>
  );
}

export default SignUp;
