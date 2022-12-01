import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { subjects } from "../../../../data/questions";
import Quiz from "../Quiz"

const onSave = jest.fn();

const questions = subjects[0].themes[0].questions;

describe("Quiz", () =>{
    it("should render all the option", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)
        const questionOptions = screen.getAllByTestId("question-option");
        expect(questionOptions.length).toBe(5);
    });

    it("shouldn't render the previous button in the first question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)

        expect(screen.queryByText("Previous")).toBeFalsy();
    });

    it("should go to the next question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)
        userEvent.click(screen.getByText("Next"));

        expect(screen.getByText(/2\)/i)).toBeTruthy();
    });

    it("should go back to previous question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)
        userEvent.click(screen.getByText("Next"));

        userEvent.click(screen.getByText("Previous"));

        expect(screen.getByText(/1\)/i)).toBeTruthy();
    });

    it("shouldn't render the save button if it isn't in the last question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)
        userEvent.click(screen.getByText("Next"));
        expect(screen.queryByText("Save")).toBeFalsy();
    });

    it("should render the save when it is in the last question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)

        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));

        expect(screen.getByText("Save")).toBeTruthy();
    });

    it("shouldn't render the next button if it is in the last question", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)

        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));

        expect(screen.queryByText("Next")).toBeFalsy();
    });

    it("should call the saveFunc in the last question when save button is pressed", () =>{
        render(<Quiz questions={questions} onSave={onSave}/>)

        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Next"));
        userEvent.click(screen.getByText("Save"));

        expect(onSave).toBeCalled();
    });
})