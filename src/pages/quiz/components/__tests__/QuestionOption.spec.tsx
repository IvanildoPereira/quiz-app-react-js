import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuestionOption from "../QuestionOption"

const onSelect = jest.fn();

describe("QuestionOption", () =>{
    it("should render the option", () =>{
        const expectedOption = "Guerra de Trincheiras";
        render(<QuestionOption questionIndex={1} indexItem={1} option={expectedOption} isSelectedOption={false} onSelectOption={onSelect}/>);

        expect(screen.getByText(expectedOption)).toBeTruthy();
    })

    it("should render the letter option as B", () =>{
        const expectedOption = "Guerra de Trincheiras";
        render(<QuestionOption questionIndex={1} indexItem={1} option={expectedOption} isSelectedOption={false} onSelectOption={onSelect}/>);
        expect(screen.getByTestId("letter-option")).toHaveTextContent("B");
    })

    it("should call onSelect when clicked in the function", () =>{
        const expectedOption = "Guerra de Trincheiras";
        render(<QuestionOption questionIndex={1} indexItem={1} option={expectedOption} isSelectedOption={false} onSelectOption={onSelect}/>);
        userEvent.click(screen.getByText(expectedOption))
        expect(onSelect).toBeCalled();
    })

    it("should return false if option is not selected", () =>{
        const expectedOption = "Guerra de Trincheiras";
        render(<QuestionOption questionIndex={1} indexItem={1} option={expectedOption} isSelectedOption={false} onSelectOption={onSelect}/>);
        const option = screen.getByTestId("question-option")
        expect(option.getAttribute("data-selected")).toBe("false");
    })

    it("should return true if option is selected", () =>{
        const expectedOption = "Guerra de Trincheiras";
        render(<QuestionOption questionIndex={1} indexItem={1} option={expectedOption} isSelectedOption={true} onSelectOption={onSelect}/>);
        const option = screen.getByTestId("question-option")
        expect(option.getAttribute("data-selected")).toBe("true");
    })
})