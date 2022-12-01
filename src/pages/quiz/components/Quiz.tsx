import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { questionProps } from "../../../data/questions";
import { SelectedAnswer } from "../QuizPage";
import QuestionOption from "./QuestionOption";

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

    const onSelectOption = (selectedOption: string) =>{
        const copySelectedAnswers = [...selectedAnswers];
        copySelectedAnswers[currentQuestion].selectedAnswer = selectedOption;
        setSelectedAnswers(copySelectedAnswers);
    }

    const handleSave = () =>{
        onSave(selectedAnswers);
    }

    return(
        <QuizContainer>
            <Heading variant="h2" level={3}>{`${currentQuestion + 1}) `}{questions[currentQuestion].question}</Heading>       
            {questions[currentQuestion].options.map((option: string, index: number)=>(
               <QuestionOption 
                    key={index}
                    indexItem = {index}
                    option = {option} 
                    isSelectedOption = {selectedAnswers[currentQuestion]?.selectedAnswer === option} 
                    onSelectOption = {onSelectOption}
                />
            ))}
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