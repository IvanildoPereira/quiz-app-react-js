import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Result from "../Result"

const resetQuiz = jest.fn();

describe("Result Component", () =>{
    it("should render the custom message", () =>{
        const expectedPercentage = "0%"
        const expectedMessage = "You got all the questions wrong. It's a great ideia you study the subject again."

        render(<Result score={0} questionLength={5} tryAgainFunc={resetQuiz}/>)

        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })

    it("should render the custom message number 2", () =>{
        const expectedPercentage = "20%"
        const expectedMessage = "You got 1 of 5. It's a great ideia you study the subject again."

        render(<Result score={1} questionLength={5} tryAgainFunc={resetQuiz}/>)
        
        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })

    it("should render the custom message number 3", () =>{
        const expectedPercentage = "40%"
        const expectedMessage = "You got 2 of 5. It's a great ideia you study the subject again."

        render(<Result score={2} questionLength={5} tryAgainFunc={resetQuiz}/>)
        
        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })

    it("should render the custom message number 4", () =>{
        const expectedPercentage = "60%"
        const expectedMessage = "Good! You got 3 of 5"

        render(<Result score={3} questionLength={5} tryAgainFunc={resetQuiz}/>)
        
        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })

    it("should render the custom message number 5", () =>{
        const expectedPercentage = "80%"
        const expectedMessage = "Well Done! You got 4 of 5"

        render(<Result score={4} questionLength={5} tryAgainFunc={resetQuiz}/>)
        
        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })
    it("should render the custom message number 6", () =>{
        const expectedPercentage = "100%"
        const expectedMessage = "Congratulations! You got all answers right!!"

        render(<Result score={5} questionLength={5} tryAgainFunc={resetQuiz}/>)
        
        expect(screen.getByText(expectedPercentage)).toBeTruthy();
        expect(screen.getByText(expectedMessage)).toBeTruthy();
    })

    it("should call the function to reset the quiz", () =>{
        render(<Result score={5} questionLength={5} tryAgainFunc={resetQuiz}/>)

        userEvent.click(screen.getByText("Try it again"))
        
        expect(resetQuiz).toBeCalled();
    })
})
