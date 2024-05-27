import { auth } from "@/auth";
import { ButtonSignOut } from "./button";

type Props = {};

const Setting = async (props: Props) => {
  const session = await auth();

  return (
    <div className="flex flex-col">
      <div>{JSON.stringify(session)}</div>
      <ButtonSignOut />
    </div>
  );
};

export default Setting;
