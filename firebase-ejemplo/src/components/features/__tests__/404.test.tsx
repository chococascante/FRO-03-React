import { render } from "@testing-library/react";

import { NotFound } from "../404";

describe("(Feature) NotFound", () => {
  it("renders without errors", () => {
    render(<NotFound />);
  });
});
