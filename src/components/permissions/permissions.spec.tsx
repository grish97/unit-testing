import {render, screen} from "@testing-library/react";
import PermissionsComponent from "./permissions.component";
import user from "@testing-library/user-event";


describe.skip("Permissions", () => {
  it("renders correctly", () => {
    render(<PermissionsComponent status="idle" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("called handlers", async () => {
    user.setup();

    const handleUpdateStatus = jest.fn();

    render(<PermissionsComponent status="idle" handleUpdateStatus={handleUpdateStatus} />);

    const pendingStatusButton = screen.getByRole("button", {
      name: "Pending State"
    });

    await user.click(pendingStatusButton);

    expect(handleUpdateStatus).toHaveBeenCalledTimes(1);

  });
});
