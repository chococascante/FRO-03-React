import { render } from "@testing-library/react";
import { HeaderApp } from "../HeaderApp";

const firebaseMock = jest.mock("firebase", () => ({
  initializeApp: jest.fn(),
}));

describe("(Molecule) HeaderApp", () => {
  it("renders without errors", () => {
    render(<HeaderApp />);
  });
});
