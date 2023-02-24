import { useForm } from "../hooks/useForm";
export const Formularios = () => {
  const { form, onChange } = useForm({
    email: "test@test.com",
    password: "1234",
  });
  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        placeholder="Email"
        value={form.email}
        onChange={(ev) => onChange(ev.target.value, "email")}
      />
      <input
        type="text"
        placeholder="Password"
        value={form.password}
        onChange={(ev) => onChange(ev.target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
