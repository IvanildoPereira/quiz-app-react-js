import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { questionProps } from "../../../data/questions";
import { SelectedAnswer } from "../QuizPage";
import QuestionList from "./QuestionList";
import QuestionMenu from "./QuestionsMenu";

interface quizProps{
    questions: questionProps[];
    onSave: (selectedAnswers: SelectedAnswer[]) => void;
}

const Quiz = ({questions, onSave}: quizProps) =>{
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);

    useEffect(()=>{
        let initSelectedAnswers: SelectedAnswer[] = [];
            questions.forEach((question) => {
                initSelectedAnswers.push({
                questionId: question.questionId,
                selectedAnswer: null
            })
        })
        setSelectedAnswers(initSelectedAnswers);
    },[questions])

    const handlePreviousQuestion = () =>{
        setCurrentQuestion(currentQuestion - 1);
    }

    const handleNextQuestion = () =>{
        setCurrentQuestion(currentQuestion + 1);
    }

    const onSelectQuestionMenu = (index: number) =>{
        setCurrentQuestion(index);
    }

    const onSelectOption = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const copySelectedAnswers = [...selectedAnswers];
        const selectedValue = event.target.value;
        copySelectedAnswers[currentQuestion].selectedAnswer = selectedValue;
        setSelectedAnswers(copySelectedAnswers);
    }

    const handleSave = () =>{
        onSave(selectedAnswers);
    }

    return(
        <QuizContainer>
            <QuestionMenu questions={questions} currentQuestion={currentQuestion} onSelectMenu={onSelectQuestionMenu}/>
            <Heading variant="h3" level={3}>{`${currentQuestion + 1}) `}{questions[currentQuestion].question}</Heading>    
            <QuestionList 
                question={questions[currentQuestion]} 
                currentQuestion={currentQuestion}
                selectedAnswerQuestion={selectedAnswers[currentQuestion]}
                onSelectOption={onSelectOption}
            />   
            <ButtonGroup>
                {currentQuestion !== 0 && <Button onClick={handlePreviousQuestion} background="surfaceColor" color="primaryColor" outlined>Previous</Button>}
                {currentQuestion + 1 !== questions.length && <Button onClick={handleNextQuestion}>Next</Button>}
                {currentQuestion + 1 === questions.length && <Button onClick={handleSave}>Save</Button>}
            </ButtonGroup>
        </QuizContainer>
    )
};

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const QuizContainer = styled.div``;

export default Quiz;