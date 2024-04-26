import { Box } from '@mui/material';
import styled from 'styled-components';

export const AdminPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #f0f5f5;
    height: 100vh;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const UpperBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 90px;
    background: #0066ff;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const LowerBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 90px;
    background: white;
    gap: 20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.19);

    a {
        color: #003380;
        text-decoration: none;
        font-size: 90%;
    }

    a:hover {
        color: black;
    }

    a.active {
        color: black;
        text-decoration: underline;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 90px;
    gap: 20px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const SideNavigationBar = styled.div`
    // width: 30%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const OutLetSpace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const LogoSpace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;

    svg {
        color: white;
        background: #0066ff;
        border: 2px solid white;
        font-size: 200%;
    }

    span {
        color: white;
        font-weight: 700;
        font-size: 150%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const DashboardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start
    gap: 20px;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const DashboardTitleBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0px 10px;
    
    h3 {
        font-weight: 600;
         
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const StatisticsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 15px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const AStatistic = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    background: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.19);
    }

    h5 {
        color: gray;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        
        h4 {
            font-size: 170%;
        } 
    }

    svg {
        font-size: 300%;
        color: white;
        border-radius: 50px;
        padding: 5px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const Popup = styled(Box)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50%;
    background-color: white;
    border: none;
    box-shadow: 24px;
    height: 100%;
    padding: 50px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 60%;
        padding: 40px;
    }

    @media (max-width: 480px) {
        width: 80%;
        padding: 20px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 100%;    
    padding: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 100%;    
    padding: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const TwoSidedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        
    }
`;

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 30%;    
    padding: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const FirstPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 29%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const SecondPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 29%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ThirdPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 29%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const DataColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 10px;

    label {
        font-size: 90%;
        color: gray;
        margin-bottom: 4px;
    }

    input, select {
        width: 100%;
        padding: 5px 3px;
        border: 1px solid gray;
        border-radius: 4px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const AttachmentContainer = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    padding: 2px;
    background: #94b8b8;
    cursor: pointer;

    a { 
        img {
            height: 300px;
            width: auto;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        a { 
            img {
                height: auto;
                width: 100%;
            }
        }   
    }

    @media (max-width: 480px) {
        
    }
`;

export const CommandButtons = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: flex-end;
    align-items: center;
    width: 100%;
    font-size: 90%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseList = styled.ul`
    list-style-type: none;
    overflow-y: scroll;
    max-height: 280px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 0;
    
    &:hover {
        background-color: whiteSmoke;
    }

    &:nth-child(even) {
        background-color: white;
        
        &:hover {
            background-color: whiteSmoke;
        }   
    }

    span {
        margin-left: 10px;
        width: 60%;
    }

    strong {
        width: 20%;
    }

    button {
        width: 20%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const a = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const b = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const J = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const K = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;