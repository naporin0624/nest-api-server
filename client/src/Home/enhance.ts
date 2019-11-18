import * as React from "react";

export default () => {
  const [msg, setMsg] = React.useState("Welcome");
  return { msg, setMsg };
};
