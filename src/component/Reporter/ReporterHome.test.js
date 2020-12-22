import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReporterHome from  " ./ReporterHome";

it("ReporterNews",()=>{

        render(
            <BrowserRouter>
            <ReporterHome></ReporterHome>
            </BrowserRouter>
        )
expect(screen.queryByText("Reporter'sNews")).toBeInTheDocument();
});