import React, { Component } from 'react'
import Album from './Album';
import * as ZeusImage from './assets/zeus.jpg';
import * as DruidImage from './assets/druid.jpeg';

import styled from 'styled-components'

const albumList = [
    { id: "zeus", title: "Zeus", year: 2017, downloadLink: 'http://www.google.com', image: ZeusImage, type:'album'},
    { id: "druid-lizard", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type:'single'},
    { id: "blah", title: "Zeus", year: 2017, downloadLink: 'http://www.google.com', image: ZeusImage, type: 'album' },
    { id: "bagee", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "rewrew", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "rewrewe", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "zeus", title: "Zeus", year: 2017, downloadLink: 'http://www.google.com', image: ZeusImage, type: 'album' },
    { id: "druid-lizard", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "blah", title: "Zeus", year: 2017, downloadLink: 'http://www.google.com', image: ZeusImage, type: 'album' },
    { id: "bagee", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "rewrew", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' },
    { id: "rewrewe", title: "Druid Lizard", year: 2015, downloadLink: 'http://www.google.com', image: DruidImage, type: 'single' }
]

const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
`


export default class AlbumContainer extends Component {

    render() {
        return (
            <Container>
            {albumList.map( album => 
              <Album key={album.id} data={album}   />
             )}
            </Container>
        )
    }
}

