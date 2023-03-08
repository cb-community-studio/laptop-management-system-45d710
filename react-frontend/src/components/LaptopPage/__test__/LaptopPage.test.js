import React from "react";
import { render, screen } from "@testing-library/react";

import LaptopPage from "../LaptopPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders laptop page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LaptopPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("laptop-datatable")).toBeInTheDocument();
    expect(screen.getByRole("laptop-add-button")).toBeInTheDocument();
});
