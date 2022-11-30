import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "../../../components/Typography"


interface QuestionCardProps{
    themeId: number;
    bgImage: string;
    themeName: string;
    numberOfQuestions: number
}

const QuestionCard = ({themeId, bgImage, themeName, numberOfQuestions}: QuestionCardProps) =>{
    return(
        <CardContainer to={`/quiz/${themeId}`} bgImage={bgImage}>
            <Description>
                <Typography variant="body2" fontWeight="bold" color="onPrimaryColor">{themeName}</Typography>
                <Typography color="onPrimaryColor" fontWeight="bold">{numberOfQuestions} questions</Typography>
            </Description>
        </CardContainer>
    )
}

const CardContainer = styled(Link)<{
    bgImage: string;
}>` 
  display: flex;
  align-items: flex-end;
  background-image: url(${props => props.bgImage});
  height: 200px;
  box-shadow: 4px 4px 9px -3px rgba(0,0,0,0.75);
  background-size: cover;
  background-position-y: center;
  border-radius: 10px;
`;

const Description = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: ${({ theme }) => theme.primaryColor}; /* Black w/opacity/see-through */
  opacity: 0.8;
  padding: 10px 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default QuestionCard;