import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import { questionProps, subjects } from "../../data/questions";
import QuestionOption from "./components/QuestionOption";

interface SelectedAnswer{
    questionId: number;
    selectedAnswer: string | null;
} 

const QuizPage = () =>{
    const [questions, setQuestions] = useState<questionProps[] | null>(null)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
    const [error, setError] = useState<string | null>(null)
    const { themeId } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        let theme = subjects[0].themes.filter((theme) => {
            return theme.themeId.toString() === themeId 
        })

        if(theme[0] && theme[0].questions){
            setQuestions(theme[0].questions);

            let initSelectedAnswers: SelectedAnswer[] = [];
            theme[0].questions.forEach((question) => {
                initSelectedAnswers.push({
                    questionId: question.questionId,
                    selectedAnswer: null
                })
            })
            setSelectedAnswers(initSelectedAnswers);
        }else{
            setError("We couldn't find any Quiz with the id: "+ themeId)
        }
        
    },[themeId])

    const handleNextQuestion = () =>{
        setCurrentQuestion(currentQuestion + 1);
    }

    const onSelectOption = (selectedOption: string) =>{
        const copySelectedAnswers = [...selectedAnswers];
        copySelectedAnswers[currentQuestion].selectedAnswer = selectedOption;
        setSelectedAnswers(copySelectedAnswers);
    }

    const handlePreviousQuestion = () =>{
        setCurrentQuestion(currentQuestion - 1);
    }

    const checkForNullAnswers = () =>{
        return selectedAnswers.filter((selectedAnswer) => {
            return selectedAnswer.selectedAnswer === null;
        });
    }

    const createErrorMessage = (nullAnswers: SelectedAnswer[]) =>{
        let errorText = nullAnswers.length > 1 ? "Questions" : "Question";
        
        nullAnswers.forEach((nullAnswer, index) =>{
            let findedindex = selectedAnswers.findIndex((Answer) =>{
                return nullAnswer.questionId === Answer.questionId;
            })
            if(nullAnswers.length <= 1) errorText +=` ${findedindex + 1} must be answerd!`;
            else if(index + 1 !== nullAnswers.length) errorText +=` ${findedindex + 1},`;
            else errorText +=` and ${findedindex + 1} must be answerd!`
        })

        return errorText;
    }

    const handleSave = () =>{
        setError(null);
        let nullAnswers = checkForNullAnswers(); 
        if( nullAnswers.length === 0){
            return;
        }

        let errorText = createErrorMessage(nullAnswers)

        setError(errorText);
    }

    return(
        <QuestionCard>
            {error && 
                <ErrorContainer>
                    <Typography color="onErrorColor" align="center" fontWeight="bold">{error}</Typography>    
                </ErrorContainer>
            }
            {questions && <Heading variant="h2" level={3}>{questions[currentQuestion].question}</Heading>}         
            {questions && questions[currentQuestion].options.map((option: string, index: number)=>(
               <QuestionOption 
                    key={index}
                    indexItem = {index}
                    option = {option} 
                    isSelectedOption = {selectedAnswers[currentQuestion]?.selectedAnswer === option} 
                    onSelectOption = {onSelectOption}
                />
            ))}
            {questions && 
            <ButtonGroup>
                {currentQuestion !== 0 && <Button onClick={handlePreviousQuestion} background="surfaceColor" color="primaryColor" outlined>Previous</Button>}
                {currentQuestion + 1 !== questions.length && <Button onClick={handleNextQuestion}>Next</Button>}
                {currentQuestion + 1 === questions.length && <Button onClick={handleSave}>Save</Button>}
            </ButtonGroup>}
            {!questions && error && <Button onClick={() => navigate("/")}>Go Back To Home</Button>}
        </QuestionCard>
    )
}

const QuestionCard = styled.div`
    background-color: ${({ theme }) => theme.surfaceColor};
    padding: 20px;
    
    border-radius: 20px;
    box-shadow: 4px 4px 9px -3px rgba(0,0,0,0.75);
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const ErrorContainer = styled.div`
    background-color: ${({ theme }) => theme.errorColor};
    width: 100%;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
`;

export default QuizPage;