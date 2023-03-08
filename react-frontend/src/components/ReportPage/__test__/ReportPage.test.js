import React from "react";
import { render, screen } from "@testing-library/react";

import ReportPage from "../ReportPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders report page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ReportPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("report-datatable")).toBeInTheDocument();
    expect(screen.getByRole("report-add-button")).toBeInTheDocument();
});
