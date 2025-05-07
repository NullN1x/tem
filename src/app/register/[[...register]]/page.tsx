import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="align-center mx-auto flex max-w-7xl justify-center px-4 py-8 sm:py-12 lg:py-16">
      <SignUp forceRedirectUrl="/subscribe" />{" "}
    </div>
  );
}
