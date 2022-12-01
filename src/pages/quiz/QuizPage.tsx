import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import { questionProps, subjects } from "../../data/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

export interface SelectedAnswer{
    questionId: number;
    selectedAnswer: string | null;
} 

const QuizPage = () =>{
    const [themeName, setThemeName] = useState<string | null>(null);
    const [questions, setQuestions] = useState<questionProps[] | null>(null);
    const [score, setScore] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null)
    const { themeId } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        let theme = subjects[0].themes.filter((theme) => {
            return theme.themeId.toString() === themeId 
        })

        if(theme[0] && theme[0].questions) {
            setThemeName(theme[0].themeName);
            setQuestions(theme[0].questions);
        }
        else setError("We couldn't find any Quiz with the id: "+ themeId)
    },[themeId]);

    const checkForNullAnswers = (selectedAnswers: SelectedAnswer[]) =>{
        return selectedAnswers.filter((selectedAnswer) => {
            return selectedAnswer.selectedAnswer === null;
        });
    }

    const createErrorMessage = (nullAnswers: SelectedAnswer[]) =>{
        let errorText = nullAnswers.length > 1 ? "Questions" : "Question";
        
        nullAnswers.forEach((nullAnswer, index) =>{
            let findedindex = questions!.findIndex((question) =>{
                return nullAnswer.questionId === question.questionId;
            })
            if(nullAnswers.length <= 1) errorText +=` ${findedindex + 1} must be answerd!`;
            else if(index === 0) errorText +=` ${findedindex + 1}`
            else if(index + 1 !== nullAnswers.length) errorText +=`, ${findedindex + 1}`;
            else errorText +=` and ${findedindex + 1} must be answerd!`
        })

        return errorText;
    }

    const getScore = (selectedAnswers: SelectedAnswer[]) =>{
        if(!questions) return;

        let scoreBoard = 0;
        
        selectedAnswers.forEach((selectedAnswer) =>{
            let findedindex = questions!.findIndex((question) =>{
                return selectedAnswer.questionId === question.questionId;
            })

            if(selectedAnswer.selectedAnswer === questions[findedindex].answer) scoreBoard += 1;
        });

        setScore(scoreBoard)
    }

    const handleSave = (selectedAnswers: SelectedAnswer[]) =>{
        setError(null);
        let nullAnswers = checkForNullAnswers(selectedAnswers); 
        if( nullAnswers.length === 0){
            getScore(selectedAnswers);
        }else{
            let errorText = createErrorMessage(nullAnswers)
            setError(errorText);
        }
    }

    return(
        <>
            {themeName && <Heading variant="h1" level={2} align="center">Tema - {themeName}</Heading>}
            <QuestionCard>
                {error && 
                    <ErrorContainer>
                        <Typography color="onErrorColor" align="center" fontWeight="bold">{error}</Typography>    
                    </ErrorContainer>
                }
                {questions && score === null && <Quiz questions={questions} onSave={handleSave}/>}
                {questions && score !== null && <Result score={score} questionLength={questions?.length}/>}
            </QuestionCard>
            <GoBack onClick={() => navigate("/")}>Go Back to Home</GoBack>
        </>
    )
}

const QuestionCard = styled.div`
    background-color: ${({ theme }) => theme.surfaceColor};
    padding: 20px;
    margin: 20px 0;
    
    border-radius: 20px;
    box-shadow: 4px 4px 9px -3px rgba(0,0,0,0.75);
`

const ErrorContainer = styled.div`
    background-color: ${({ theme }) => theme.errorColor};
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

const GoBack = styled(Button).attrs({
    background: "surfaceColor",
    color: "primaryColor",
    outlined: true
})`
    margin: 40px 0;
`

export default QuizPage;