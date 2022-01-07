import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import App from "./App";
// import Preview from "./components/Preview";

describe("All components render to DOM", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach((done) => {
    done();
  });

  // test("App component renders to DOM", () => {
  //   const linkElement = screen.getByText("hey");
  //   expect(linkElement).toBeInTheDocument();
  // });

  test("Header component renders to DOM", () => {
    const linkElement = screen.getByText("CV Generator");
    expect(linkElement).toBeInTheDocument();
  });

  test("General component renders to DOM", () => {
    const linkElement = screen.getByText("General Information");
    expect(linkElement).toBeInTheDocument();
  });

  // test("Education component renders to DOM", () => {
  //   const linkElement = screen.getByText("Education");
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test("Experience component renders to DOM", () => {
  //   const linkElement = screen.getByText("Experience");
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test("More component component renders to DOM", () => {
  //   const linkElement = screen.getByText("Skills");
  //   expect(linkElement).toBeInTheDocument();
  // });
});

test("Preview button works", () => {
  const { container } = render(<App />);
  const button = getByTestId(container, "preview");
  fireEvent.click(button);
});

// test("Inputs displays in Preview", () => {
//   const testObject = { name: { firstName: "Works" } };
//   render(<Preview name={testObject} />);
//   expect(screen.getByText("Works")).toBeInTheDocument();
// });
