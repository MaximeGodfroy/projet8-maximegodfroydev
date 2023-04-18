import Projects from "../../components/Projects"
import styled from "styled-components"

const ProjectsContainer = styled.section`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
`

const Title = styled.h2`
    background-color: rgba(28, 28, 26, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 15px;
    text-align: center;
    width: 200px;
    padding: 10px;
    font-size: 28px;
`

const Presentation = styled.p`
    background-color: rgba(28, 28, 26, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 15px;
    text-align: center;
    width: 50%;
    padding: 10px;
    font-size: 20px;
`

export default function MesProjets() {

    return (
        <ProjectsContainer>
            <Title>Mes Projets</Title>
                <Presentation>
                La formation d'OpenClassRooms m'a permis de me former aux langages de base HTML, CSS et JavaScript 
                mais également aux outils puissants basés sur JavaScript  que sont React, Node.js, Express et MongoDB.< br/>
                Je me suis également initié à la gestion de projet agile et au référencement SEO d'un site dont l'indexation
                sur Google Images est accessible.
                </Presentation>
            <Projects />
        </ProjectsContainer>
    )
}