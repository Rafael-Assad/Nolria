import styled from 'styled-components';
import  Dialog  from "@mui/material/Dialog";


export const IlustrationCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .art{
    width: 60vw;
    height: 90vh;
    border-radius: 5px 0px 0px 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff5;
  }

  .artInfo{
    width: 30vw;
    height: 90vh;
    padding: 2.3rem;
    border-radius: 0px 5px 5px 0px;

    background-color: #FFF;
  }
`;

export const DialogPaperContainer = styled(Dialog)`
  [role='dialog'] {
    background-color: #0000;
  }
`