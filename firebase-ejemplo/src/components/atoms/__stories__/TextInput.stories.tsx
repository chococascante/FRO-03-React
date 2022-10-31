import { TextInput, TextInputProps } from "../TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
};

// Story Name
export const Default = (args: TextInputProps) => <TextInput {...args} />;

Default.args = {
  label: "Email",
  type: "email",
  name: "email",
  placeholder: "",
  value: "",
};
