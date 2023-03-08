import React from "react";
import { render, screen } from "@testing-library/react";

import SpecificationPage from "../SpecificationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders specification page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SpecificationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("specification-datatable")).toBeInTheDocument();
    expect(screen.getByRole("specification-add-button")).toBeInTheDocument();
});
