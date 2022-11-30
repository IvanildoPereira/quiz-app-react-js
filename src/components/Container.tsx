import styled from "styled-components";

const Container = styled.div`
  margin: 0 20px;

  @media(min-width: 1200px){
    max-width: 1140px;
    margin: auto;
  }

  @media(min-width: 992px){
    max-width: 960px;
    margin: auto;
  }
`

export default Container;