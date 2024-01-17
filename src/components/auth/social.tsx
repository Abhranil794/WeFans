import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

export const Social = () => {
  const onClick = (provider: "google" | "twitter") => {
    alert(provider);
  };

  return (
    <div className="w-full">
      <Button
        className="w-full flex mb-2 text-white hover:text-white hover:bg-blue-500 bg-blue-400 rounded-full"
        size="lg"
        variant="outline"
        onClick={() => onClick("twitter")}
      >
        <FaTwitter className="h-5 w-5" />
        <p className="ml-4">SIGN IN WITH TWITTER</p>
      </Button>
      <Button
        className="w-full flex mb-2 text-white hover:text-white hover:bg-blue-500 bg-blue-400 rounded-full"
        size="lg"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
        <p className="ml-4">SIGN IN WITH GOOGLE</p>
      </Button>
    </div>
  );
};
