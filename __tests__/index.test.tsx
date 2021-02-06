import { screen, render } from "../test-utils";
import Home from "../pages/index";

describe("Home", () => {
  it("Renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText(/pettr/i)).toBeInTheDocument();
  });
});
