import { LabeledTextInput } from "@/components/inputs/text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-800/30 px-20 py-12 rounded-xl flex flex-col gap-4 min-w-[480px]">
      <LabeledTextInput name="email" label="Email" type="text" placeholder="enter your email" />
      <LabeledTextInput name="paswword" label="Password" type="password" placeholder="enter your password" />
      <LabeledTextInput readOnly name="paswword" value="Test 1234" label="Password" placeholder="enter your password" />
      <LabeledTextInput error="Email Invalide" name="paswword" label="Password" placeholder="enter your password" />
      <Button className="mt-8">Log In</Button>
    </div>
  );
}
