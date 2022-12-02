import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom"
import QuizPage from "../QuizPage"

describe("QuizPage", () => {
    it("should render an error message about a quiz that doesn't exist", () =>{
        let badQuizId = "/quiz/1000";
        let expectedMessage = "We couldn't find any Quiz with the id: 1000"
        render(
            <MemoryRouter initialEntries={[badQuizId]}>
                <Routes>
                    <Route path="/quiz/:themeId" element={<QuizPage/>} />
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByText(expectedMessage)).toBeTruthy();
    });

    it("should render an error if the user didn't answer all the questions", () =>{
        let badQuizId = "/quiz/1";
        let expectedMessage = /Questions 1, 2, 3, 4 and 5 must be answerd!/i
        render(
            <MemoryRouter initialEntries={[badQuizId]}>
                <Routes>
                    <Route path="/quiz/:themeId" element={<QuizPage/>} />
                </Routes>
            </MemoryRouter>
        )

        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Save"));
        

        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })
})