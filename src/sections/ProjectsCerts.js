import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Background2 = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CARD_HEIGHT = '225px';

const MEDIA_QUERY_SMALL = '@media (max-width: 600px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  techStack,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto', flex: 1 }}>
          {description}
        </Text>
        <Text alignSelf="flex-end">
          {techStack ? (
            <>
              <b>Tech Stack:</b>
              {` `}
              {techStack.map((item, index) => (index ? ', ' : '') + item)}
            </>
          ) : (
            <></>
          )}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              {repositoryUrl ? (
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                />
              ) : (
                <></>
              )}
            </Box>
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle
            bg="primaryLight"
            color="white"
            y="bottom"
            x="right"
            round
          >
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string,
  type: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const ProjectsCerts = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        contentfulAbout {
          projects {
            id
            name
            description
            projectUrl
            repositoryUrl
            publishedDate(formatString: "YYYY")
            type
            techStack
            logo {
              title
              image: resize(width: 200, quality: 100) {
                src
              }
            }
          }
          certifications {
            id
            name
            description
            projectUrl
            publishedDate(formatString: "YYYY")
            logo {
              title
              image: resize(width: 200, quality: 100) {
                src
              }
            }
          }
        }
      }
    `}
    render={({ contentfulAbout }) => (
      <>
        <Section.Container id="projects" Background={Background}>
          <Section.Header name="Projects" icon="💻" Box="notebook" />
          <CardContainer minWidth="400px">
            {contentfulAbout.projects.map((p, i) => (
              <Fade key={p.id} bottom delay={i * 200}>
                <Project {...p} />
              </Fade>
            ))}
          </CardContainer>
        </Section.Container>
        <Section.Container id="certifications" Background={Background2}>
          <Section.Header name="Certifications" icon="💳" Box="notebook" />
          <CardContainer minWidth="400px">
            {contentfulAbout.certifications.map((p, i) => (
              <Fade key={p.id} bottom delay={i * 200}>
                <Project {...p} />
              </Fade>
            ))}
          </CardContainer>
        </Section.Container>
      </>
    )}
  />
);

export default ProjectsCerts;
