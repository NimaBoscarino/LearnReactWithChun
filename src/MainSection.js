import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  flex: 0.7;
  background-color: green;
  color: white;
`;

const Post = styled.div`
width: 100%;
height: 60px;
padding: 20px;
background-color: white;
color: #888;
`;


const Number = styled.text`
font-size: 20px;
margin: 5px;
`
const Votes = styled.text`
font-size: 20px;
font-style: bold;
margin: 5px;

`
const TitleText = styled.text`
font-size: 20px;
color: blue;
margin: 5px;

`

class SinglePost extends Component {
  render() {
    return (
      <Post>
        <Number>{this.props.index}</Number>
        <Votes>{this.props.votes}</Votes>
        <TitleText>{this.props.text}</TitleText>
      </Post>
    );
  }
}

const posts = [
  {
    text: 'hello world',
    votes: '12k'
  },
  {
    text: 'ea sucks',
    votes: '15'

  },
  {
    text: 'chun',
    votes: '99k'

  }
]

class MainSection extends Component {
  render() {
    return (
      <MainDiv>
        {
          posts.map((post, index) => {
            return (
              <SinglePost index={index + 1} text={post.text} votes={post.votes}/>              
            )
          })
        }
      </MainDiv>
    );
  }
}

export default MainSection;
