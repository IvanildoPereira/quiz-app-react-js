import styled from "styled-components";
import Typography from "../../../components/Typography";

interface QuestionOptionType{
    indexItem: number;
    option: string;
    isSelectedOption: boolean;
    onSelectOption: (selectedOption: string) => void;
}

let letterOption = ["A", "B", "C", "D", "E"]

const QuestionOption = ({indexItem, option, isSelectedOption, onSelectOption} : QuestionOptionType) =>{
    return(
        <QuestionOptionOptionContainer 
            data-testid = "question-option" 
            data-selected = {isSelectedOption} 
            onClick={() => onSelectOption(option)} 
            isSelectedOption = {isSelectedOption}
            >
            <OptionLetterRounded data-testid="letter-option">
                <Typography tag="span" variant="body3" color={"onPrimaryColor"} fontWeight="bold">
                    {letterOption[indexItem]}
                </Typography>
            </OptionLetterRounded>
            <Typography className="text_question" variant="body3" color={isSelectedOption ? "onPrimaryColor" : "onSurfaceColor"} fontWeight="bold">{option}</Typography>
        </QuestionOptionOptionContainer>
    )
}

const QuestionOptionOptionContainer = styled.button<{
    isSelectedOption: boolean;
}>` 
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${({ theme, isSelectedOption }) => isSelectedOption ? theme.primaryColor : theme.surfaceColor};
    padding: 20px;
    margin: 15px 0;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 10px;

    &:hover{
        background-color: ${({ theme }) => theme.primaryColor} 
    }

    &:hover p{
        color: ${({ theme }) => theme.onPrimaryColor}
    }
`;

const OptionLetterRounded = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 2px 2px 10px -4px rgba(0,0,0,0.75)
`

export default QuestionOption;