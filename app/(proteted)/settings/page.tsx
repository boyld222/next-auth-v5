import { auth } from "@/auth";
import React from "react";

type Props = {};

const Setting = async (props: Props) => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default Setting;
