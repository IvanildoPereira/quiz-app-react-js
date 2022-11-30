import { useEffect, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import { subjects, subjectProps } from "../../data/questions";
import QuestionCard from "./components/QuestionCard";

const SubjectPage = () =>{
    const [subject, setSubject] = useState<subjectProps |null>(null);
    useEffect(()=>{
        setSubject(subjects[0]);
    },[])
    return(
        <SubjectContainer>
            {subject && <Heading variant="h1" level={2}>{subject.subject} - Temas</Heading>}
            <GridContainer>
                {subject && subject.themes.map((theme)=>(
                    <QuestionCard key={theme.themeId} themeId={theme.themeId} bgImage={theme.themeBG} themeName = {theme.themeName} numberOfQuestions={theme.questions.length}/>
                ))}
            </GridContainer>
        </SubjectContainer>
    )
}

const SubjectContainer = styled.div``;

const GridContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    margin: 20px 0;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
`;

export default SubjectPage;