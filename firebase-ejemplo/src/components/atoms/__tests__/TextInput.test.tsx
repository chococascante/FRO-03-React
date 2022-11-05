import { render, fireEvent } from "@testing-library/react";
import { TextInput } from "../TextInput";

describe("(Atom) TextInput", () => {
  it.each([undefined, "Hola"])(
    "renders without errors with helperText %s",
    (helperText: string | undefined) => {
      const wrapper = render(
        <TextInput label="" type="text" helperText={helperText} />
      );

      helperText && expect(wrapper.getByText(helperText)).toBeInTheDocument();
    }
  );

  it("deberia cambiar el texto del input", () => {
    const onChange = jest.fn();
    const wrapper = render(
      <TextInput
        label=""
        type="text"
        placeholder="Ingrese su nombre"
        onChange={onChange}
      />
    );
    const input = wrapper.getByPlaceholderText("Ingrese su nombre");
    fireEvent.change(input, { target: { value: "Juan" } });

    expect(wrapper.getByDisplayValue("Juan")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("debería ser igual al snapshot", () => {
    const { container } = render(
      <TextInput label="" type="text" placeholder="Ingrese su nombre" />
    );

    expect(container).toMatchSnapshot();
  });
});
