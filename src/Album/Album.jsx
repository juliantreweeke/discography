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


// const Card = styled.div`
//             background:black;
//             height:225px;
//             color:white;
//             background-image: url(${props => props.image});
//             background-repeat: none;
//             transition:height width 0.5s;
//             filter: grayscale(70%);
//             &:hover {
//                 position:absolute;
//             z-index:1000;
//             filter: grayscale(0%);
//              width:240px;
//              height:240px;
//             }
        
const Card = styled.li`
                background-image:url(${props => props.image});
                background-size:100%;
                background-repeat:no-repeat; 
                transition:all 0.2s;
                &:hover {
                  transform:scale(1.2)
                }
                min-height:45vh;
             
                
  `





const Album = ({data}) => {
  return (
      <Card image={data.image}>
          {/* <Title>{data.title} - {data.type} - {data.year}</Title>
          <Card image={data.image}> 
          </Card>
        <DownloadLink>Buy</DownloadLink> */}
        
      </Card>
  )
}

export default Album




//   &: hover ${ Title } {
//   height: 40px;
//   width: 240px;
// };
//                 &: hover ${ DownloadLink } {
//   height: 15px;
//   width: 240px;
//   position: absolute;
// }