import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContentContainer,
  LeftSide,
  PostContent,
  PostCount,
  PostTitle,
  RightSide,
  TagSection,
  CategoryMenu,
  StyledButton,
  Label,
} from './PostBlog.style';

import { Dante } from '../../pages/Blog/MediumLikeEditor';

import { FileUploader } from './FileUploader';
import { Categories } from './Categories';
import { TagsFields } from './TagsFields';
import firebase from '../../utils/firebase';
import { postBlogActions } from '../../redux/postBlog/actions';
import { selectPostBlogData } from '../../redux/postBlog/selectors';
import { IBlog } from 'pages/Blog/types';

const PostBlog = () => {
  const { title, content, countsOfWords: count, tags, image } = useSelector(selectPostBlogData);

  const dispatch = useDispatch();

  const handleTagsChange = (selected: any) => {
    const tags = selected.map((sel: any) => sel.value);
    console.log(tags);
    dispatch(postBlogActions.setNewPostTags(tags));
  };

  const publishStory = async () => {
    try {
      let url = '';
      if (image.url) {
        let res = await fetch(image.url);
        const blob = await res.blob();
        
        let formData = new FormData();
        formData.append('file', blob);
        res = await fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/upload', {
          method: 'post',
          body: formData
        });
        const json = await res.json();
        url = json.url;
      }
      const res = await fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/blogs/create', {
        method: 'post',
        body: JSON.stringify({
          title: title,
          description: JSON.stringify(content),
          authorId: 1,
          tags: tags,
          picture: url,
        }),
      });
      const blog = await res.json();
      dispatch(postBlogActions.setMainModalPostBlog(false));
      dispatch(postBlogActions.setPublishedModalPostBlog(true));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContentContainer>
      <LeftSide>
        <h1>Story Preview</h1>
        <FileUploader />

        <PostTitle>{title}</PostTitle>
        <PostContent>
          <Dante read_only={true} content={content} />
        </PostContent>
        <PostCount>
          {count}/{count}
        </PostCount>
      </LeftSide>

      <RightSide>
        <h3>Add Tags</h3>
        <Label>Add or change tags (up to 5) so readers know what your story is about</Label>

        <TagSection>
          <TagsFields onChange={handleTagsChange} />
        </TagSection>

        {/* <h3>Category</h3>
        <Label>Select a category of your post so readers will find your post in that category</Label>

        <CategoryMenu>
          <Categories />
        </CategoryMenu> */}

        <StyledButton>
          <button onClick={publishStory}>Publish Now</button>
        </StyledButton>
      </RightSide>
    </ContentContainer>
  );
};

export default PostBlog;
export { PostBlog };
