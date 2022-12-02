import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { subjects } from "../../../../data/questions";
import QuestionList from "../QuestionList";

const question = subjects[0].themes[0].questions[0];
const selectedAnswerQuestion = {
    questionId: 1,
    selectedAnswer: null
}

const onSelect = jest.fn();

describe("QuizList", () =>{
    it("should render all the option", () =>{
        render(<QuestionList question={question} currentQuestion={0} selectedAnswerQuestion = {selectedAnswerQuestion} onSelectOption={onSelect}/>)
        const questionOptions = screen.getAllByTestId("question-option");
        expect(questionOptions.length).toBe(5);
    });

    it("should call onSelect when clicked in the function", () =>{
        const expectedOption = question.options[0];
        render(<QuestionList question={question} currentQuestion={0} selectedAnswerQuestion = {selectedAnswerQuestion} onSelectOption={onSelect}/>);
        userEvent.click(screen.getByText(expectedOption))
        expect(onSelect).toBeCalled();
    })
})