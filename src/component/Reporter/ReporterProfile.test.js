import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReporterProfile from  " ./ReporterProfile";

it("User Id",()=>{

        render(
            <BrowserRouter>
            <ReporterProfile></ReporterProfile>
            </BrowserRouter>
        )
expect(screen.queryByText("User Id")).toBeInTheDocument();
});