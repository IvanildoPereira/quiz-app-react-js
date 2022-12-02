import styled from "styled-components";
import Typography from "../../../components/Typography";

interface QuestionOptionType{
    questionIndex: number;
    indexItem: number;
    option: string;
    isSelectedOption: boolean;
    onSelectOption: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

let letterOption = ["A", "B", "C", "D", "E"]

const QuestionOption = ({questionIndex, indexItem, option, isSelectedOption, onSelectOption} : QuestionOptionType) =>{
    return(
        <QuestionOptionContainer 
            data-testid = "question-option" 
            data-selected = {isSelectedOption} 
            >
            <HiddinInputRadio 
                id={`question-${questionIndex}-option-${indexItem}`}
                value={option} 
                checked={isSelectedOption}
                name={`question-${questionIndex}-radio`}
                onChange={onSelectOption}
            ></HiddinInputRadio>
            <LabelContainer htmlFor={`question-${questionIndex}-option-${indexItem}`} isSelectedOption = {isSelectedOption}>
                <OptionLetterRounded data-testid="letter-option">
                    <Typography tag="span" variant="body5" color={"onPrimaryColor"} fontWeight="bold">
                        {letterOption[indexItem]}
                    </Typography>
                </OptionLetterRounded>
                <Typography tag="span" className="text_question" variant="body4" color={isSelectedOption ? "onPrimaryColor" : "onSurfaceColor"} fontWeight="bold">{option}</Typography>
            </LabelContainer>
        </QuestionOptionContainer>
    )
}

const QuestionOptionContainer = styled.div``;

const HiddinInputRadio = styled.input.attrs({
    type: "radio"
})`
    position: absolute;
    opacity: 0;

    &:checked ~ label{
        background-color: ${({ theme }) => theme.primaryColor};
    }
`

const LabelContainer = styled.label<{
    isSelectedOption: boolean;
}>`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.onPrimaryColor};
    width: 100%;
    padding: 20px;
    margin: 15px 0;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 10px;

    @media(min-width: 992px){
        &:hover{
            background-color: ${({ theme }) => theme.primaryColor} 
        }

        &:hover span{
            color: ${({ theme }) => theme.onPrimaryColor}
        }
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