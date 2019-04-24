import React from 'react'

import styled from 'styled-components'

const Title = styled.div`
height:0px;
width:220px;
background:black;
color:white;
transition:all 0.5s;
`

const DownloadLink = styled.div`
height:0px;
width:220px;
background:black;
color:white;
transition:all 0.5s;
`


const Card = styled.div`
            background:black;
            height:225px;
            color:white;
            background-image: url(${props => props.image});
            background-repeat: none;
            background-size: 100%;
            transition:height width 0.5s;
            filter: grayscale(70%);
            &:hover {
                position:absolute;
            z-index:1000;
            filter: grayscale(0%);
             width:240px;
             height:240px;

            }
        `
const Container = styled.div`
                flex: 1 0 21%; /* explanation below */
                

                &:hover ${Title} {
                height:40px;
                width:240px;
  };
  &:hover ${DownloadLink} {
                height:15px;
                width:240px;
                position:absolute;
  }
  `





const Album = ({data}) => {
  return (
      <Container>
          <Title>{data.title} - {data.type} - {data.year}
          </Title>
          <Card image={data.image}> 
          </Card>
        <DownloadLink>Buy</DownloadLink>
        
      </Container>
  )
}

export default Album
