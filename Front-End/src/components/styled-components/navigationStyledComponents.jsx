import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SimpleTopNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    position: sticky;
    top: 0;
    background: #5b8266;
    padding: 30px 90px;
    z-index: 1000;

    ul {
        list-style-type: none;
        display: block;
        
        li {
            float: left;
            a {
                padding: 0 10px;
                text-decoration: none;
                color: white;
            }
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        padding: 20px 40px;
        ul {
            display: none;
            li {
                a {
                    padding: 0 5px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`;

export const MobileMenuButton = styled.button`
    border: none;
    margin: 0;
    font-size: 160%;
    color: white;
    cursor: pointer;
    background: transparent;
    display: none;

    @media (max-width: 1080px) {
     
    }

    @media (max-width: 768px) {
        display: flex;
    }

    @media (max-width: 480px) {
        display: flex;
    }
`;

export const Logo = styled(Link)`
    padding: 0 10px;
    text-decoration: none;
    color: white;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MobileMenueContainer = styled.div`
    flex-direction: column:
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    z-index:999;

    ul {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        gap: 40px;
        padding-top: 40px;

        li {
            color: black;
            a {
                color: black;
                font-size: 150%; 
            }
        }
        
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        display: flex;
    }

    @media (max-width: 480px) {

    }
`;


export const LogoSpace = styled.div`


    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const NavigationLinks = styled.div`
    

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
    
    }

    @media (max-width: 480px) {
    
    }
`;

export const TopBarLeft = styled.div`


    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MobileNavigationLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;        
    margin-top: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            margin: 0 15px;
            padding: 19px 0;
            width: 100%;
    
            &:hover {
                color: orange;
            }
    
            &.active {
                border-bottom: 4px solid orange;
            }
        }
    }        

    @media (max-width: 1080px) {
        display: none;    
    }

    @media (max-width: 768px) {
        display: flex;
    }

    @media (max-width: 480px) {

    }
`;