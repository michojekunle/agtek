import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Omega from "../app/[locale]/dashboard/page";
import client from "next-auth/react";
import "@testing-library/jest-dom";
jest.mock("next-auth/react");

describe("Omega", () => {
  it("Works", async () => {
    const mockSession = {
      expires: "1",
      user: { email: "a", name: "Delta", image: "c" },
    };

    (client.useSession).mockReturnValueOnce([mockSession, false]);

    render(<Omega />);

    expect(screen.getByText("Hello, Delta")).toBeInTheDocument();
  });
});