import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./CardWrapper";
type Props = {};

const ErrorCard = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <FaExclamationTriangle className="text-center text-destructive w-full" />
    </CardWrapper>
  );
};

export default ErrorCard;
