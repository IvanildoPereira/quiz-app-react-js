import styled from "styled-components";
import Typography from "../../../components/Typography";
import { questionProps } from "../../../data/questions";

interface QuestionMenuProps{
    questions: questionProps[];
    currentQuestion: number;
    onSelectMenu: (index: number) => void; 
}

const QuestionMenu = ({questions, currentQuestion, onSelectMenu}: QuestionMenuProps) =>{
    return(
        <QuestionMenuContainer>
            {questions.map((question, index) =>(
                <QuestionItem key = {question.questionId} isSelected={currentQuestion === index} onClick = {() => onSelectMenu(index)}>
                    <Typography 
                        color={currentQuestion === index ? "onPrimaryColor" : "primaryColor"}
                        fontWeight="bold"
                        >
                        Question {index+1}
                    </Typography>
                </QuestionItem>
            ))}
        </QuestionMenuContainer>
    )
}

const QuestionMenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`;

const QuestionItem = styled.button<{
    isSelected: boolean;
}>`
    background-color: ${({ theme, isSelected } ) => isSelected ? theme.primaryColor : theme.surfaceColor};
    border: 1px solid ${({ theme } ) => theme.primaryColor};
    cursor: pointer;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`

export default QuestionMenu;