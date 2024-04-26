import { Box } from '@mui/material';
import styled from 'styled-components';

export const SectionOrPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 90px;
    

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        padding: 40px 40px;
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
    }
`;

export const BookingFormContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        margin-top: 30px;
    }

    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;

export const Page = styled.div`
    width: 100%;
    // margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #f0f5f5;
    min-height: 100vh;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;

export const PageTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    h2 {
        font-weight: 400;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const PageContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ListOfBookings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        margin-top: 20px;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ABooking = styled.div`
    border-top: 4px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28%;
    padding: 10px 10px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0px 0px 8px 8px;
    background: white;

    p {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 90%;
        margin-bottom: 5px;
        
        em {
            color: gray;
            text-align: right;
        }
    }

    a {
        text-decoration: none;
        color: black;

        svg {
            font-size: 150%;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const LecturerList = styled.ul`
    list-style-type: none;
    font-size: 90%;
    width: 100%;

    li {
        width: 100%;
        border-bottom: 1px solid gray;
        font-weight: bold;

        &:hover {
            background: #ebf0fa;
        }

        button {
            cursor: pointer;
            width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            padding: 10px;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const ModalLabel = styled.label`
    color: gray;
    font-size: 95%;

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

export const TopCourseInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;    
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        
        div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            align-items: center;
            gap: 20px;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseManagementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    // gap: 20px;
    border: 1px solid #c2d1f0;
    border-radius: 8px;

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

export const CustomTableContainer = styled.div`
    borderRadius: 8px;
    width: 100%;

    h4 {
        padding: 15px 15px 0;
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

export const DetailsForAllocatedLecturer = styled.div`
    padding: 15px;
    width: 100%;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;            
        }
    }

    h4 {
        margin-bottom: 10px;
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

export const Lecturers = styled.div`
    width: 33%;
    margin-bottom: 20px;

    h4 {
        margin-bottom: 10px;
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

export const ChooseLecturers = styled.div`
    width: 33%;
    margin-bottom: 20px;

    h4 {
        margin-bottom: 10px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        width: 100%;
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const SmallButton = styled.button`
    padding: 2px 10px;
    border: none;
    color: white;
    background: #7d9770;
    cursor: pointer;

    &:hover {
        color: black;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseListContainer = styled.div`
    margin-top: 10px;
    padding: 10px;
    background: #f1f0f1;
    width: 100%;
    font-size: 90%;
    min-height: 300px;
    height: 300px;

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