import { Link } from "react-router-dom";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    // <Button variant="link" className="font-normal text-blue-500 w-full" asChild>
    //   <Link to={href}>{label}</Link>
    // </Button>
    <div className="text-blue-400 flex justify-between">
      <div>
        {href === "/auth/register" && (
          <Link className="hover:text-blue-500 mr-28" to={"/reset-password"}>
            Forgot password?
          </Link>
        )}
      </div>
      <div>
        <Link className="hover:text-blue-500" to={href}>
          {label}
        </Link>
      </div>
    </div>
  );
};
