import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Omega from "../app/[locale]/dashboard/page";
import client from "next-auth/react";
import "@testing-library/jest-dom";


jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "admin" }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

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