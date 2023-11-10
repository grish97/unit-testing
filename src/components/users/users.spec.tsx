import {render, screen} from "@testing-library/react";
import {Users} from "./users.component.tsx";

describe("Users", () => {
  it("render correctly", () => {
    render(<Users />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });

  it("renders users list", async () => {
    render(<Users />);

    const usersListElements = await screen.findAllByRole("listitem");

    expect(usersListElements).toHaveLength(5);
  });

  it('should render error message', async () => {
    render(<Users />);

    const errorElement = await screen.findByText(/error/i);
    expect(errorElement).toBeInTheDocument();
  });
});
