import styled from "styled-components";
import { questionProps } from "../../../data/questions";
import { SelectedAnswer } from "../QuizPage";
import QuestionOption from "./QuestionOption";

interface QuestionListProps{
    question: questionProps;
    currentQuestion: number;
    selectedAnswerQuestion: SelectedAnswer; 
    onSelectOption: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const QuestionList = ({question, currentQuestion, selectedAnswerQuestion, onSelectOption}: QuestionListProps) =>{
    return(
        <QuestionListContainer>
            {question.options.map((option: string, index: number)=>(
               <QuestionOption 
                    key={index}
                    questionIndex={currentQuestion}
                    indexItem = {index}
                    option = {option} 
                    isSelectedOption = {selectedAnswerQuestion?.selectedAnswer === option} 
                    onSelectOption = {onSelectOption}
                />
            ))}
        </QuestionListContainer>
    )
}

const QuestionListContainer = styled.div`
    margin: 20px 0;
`;

export default QuestionList;