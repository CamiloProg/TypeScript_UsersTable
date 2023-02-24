import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...form,
      [campo]: value,
    });
  };
  return { onChange, form: state };
};
