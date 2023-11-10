import { render, screen } from "@testing-library/react";
import { GreatComponent } from "./great.component.tsx";

describe("Great", () => {
  const skills = ["js", "ts", "html", "css"];

  test("render correctly", () => {
    render(<GreatComponent />);
    const listElements = screen.getByRole("list");
    expect(listElements).toBeInTheDocument();
  });

  test("render all list items", () => {
    render(<GreatComponent />);
    const allListItems = screen.getAllByRole("listitem");
    expect(allListItems).toHaveLength(skills.length);
  });

  test("render paragraph", () => {
    render(<GreatComponent />);
    const paragraphElement = screen.getByText((content) => {
      return content.includes("course");
    });
    expect(paragraphElement).toBeInTheDocument();
  });
});
