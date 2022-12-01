import { useEffect, useState } from "react";
import styled from "styled-components"
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Pie from "../../../components/Pie";
import Typography from "../../../components/Typography";

interface ResultProps{
    score: number;
    questionLength: number;
    tryAgainFunc: () => void;
}


const Result = ({ score, questionLength, tryAgainFunc }: ResultProps) =>{
    const [percentage, setPercentage] = useState<number>(0);
    const [message, setMessage] = useState<string>("");

    useEffect(() =>{
        // Get percentage and check if score is not 0
        const pctCalc = score !== 0 ? Math.round((score * 100) / questionLength) : 0;
        setPercentage(pctCalc);
        let messageText = "";
        if(pctCalc === 0) messageText = `You got all the questions wrong. It's a great ideia you study the subject again.`
        else if(pctCalc <= 50) messageText = `You got ${score} of ${questionLength}. It's a great ideia you study the subject again.`
        else if(pctCalc <= 70) messageText = `Good! You got ${score} of ${questionLength}`
        else if(pctCalc < 100) messageText = `Well Done! You got ${score} of ${questionLength}`
        else if(pctCalc === 100) messageText = `Congratulations! You got all answers right!!`
        setMessage(messageText);
    },[score, questionLength])

    const handleTryAgainBTN = () =>{
        tryAgainFunc();
    }

    return(
        <ResultContainer>
            <Heading variant="h2" level={3}>Final Result</Heading>
            <PieChart percentage={percentage}/>
            <ResultMessage>{message}</ResultMessage>
            <TryAgainButton onClick = {handleTryAgainBTN}>Try it again</TryAgainButton>
        </ResultContainer>
    )
}

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PieChart = styled(Pie).attrs(({ theme })=>({
    colorText: theme.primaryColor,
    colorGraphic: theme.primaryColor,
}))``;

const ResultMessage = styled(Typography).attrs({
    fontWeight: "bold"
})`
  margin: 20px 0;  
`

const TryAgainButton = styled(Button).attrs({
    background: "surfaceColor",
    color: "primaryColor",
    outlined: true
})`
    margin-top: 10px;
    margin-bottom: 40px;
`

export default Result;