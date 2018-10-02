import React from 'react';
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import PostContainer from 'containers/PostContainer'


const PostPage = ({match}) => {
  const { id } = match.params;
  return (
    <div>
      <Header />
      <PostContainer id={id}/>
      <Footer />
    </div>
  );
};

export default PostPage;