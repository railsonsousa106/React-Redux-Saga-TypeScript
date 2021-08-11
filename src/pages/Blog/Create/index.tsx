import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import {
  TitleBlog,
  CreateBlogContainer,
  InputContainer,
  Toggle,
  Title,
  Content,
  Label,
  Dots,
  TextAreaWrapper,
} from './BlogCreatePage.style';
import { Input } from 'components/Input';
import { postBlogActions } from 'redux/postBlog/actions';
import { selectPostBlogData } from 'redux/postBlog/selectors';

import { Dante } from '../MediumLikeEditor';
import { ImageBlockConfig } from '../MediumLikeEditor/components/blocks/image.js';
import { DividerBlockConfig } from '../MediumLikeEditor/components/blocks/divider.js';
import { VideoBlockConfig } from '../MediumLikeEditor/components/blocks/video.js';
import { PlaceholderBlockConfig } from '../MediumLikeEditor/components/blocks/placeholder.js';

const BlogCreate = (props: any) => {
  const postBlogData = useSelector(selectPostBlogData);
  const dispatch = useDispatch();

  const handleContentChange = (editor: any) => {
    const content = editor.emitSerializedOutput();
    dispatch(postBlogActions.setNewPostContent(content));
  };

  const handleTitleChange = (e: any) => {
    dispatch(postBlogActions.setNewPostTitle(e.target.value));
  };

  return (
    <CreateBlogContainer>
      {/* <Toggle>
        <b style={{ marginRight: '33px' }}>Draft</b>
        <label>Saved</label>
      </Toggle> */}
      <InputContainer>
        <Title>
          <Label>Title</Label>
          <Input
            StyledComponent={TitleBlog}
            placeholder={'Title'}
            name="title"
            type="text"
            onChange={handleTitleChange}
            value={postBlogData.title}
          />
        </Title>
      </InputContainer>
      <InputContainer>
        <Content>
          <Label>Content</Label>
          <TextAreaWrapper>
            <Dante
              body_placeholder="Tell me your story..."
              onChange={handleContentChange}
              widgets={[
                ImageBlockConfig({
                  options: {
                    upload_url: 'https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/upload',
                    upload_headers: { 'Access-Control-Allow-Origin': '*' },
                    delete_block_callback: (e: any) => {
                      console.log(e);
                    },
                  },
                }),
                VideoBlockConfig(),
                PlaceholderBlockConfig(),
                DividerBlockConfig(),
              ]}
            />
          </TextAreaWrapper>
        </Content>
      </InputContainer>
    </CreateBlogContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    content: state.postBlogData.content,
  };
};

export default connect(mapStateToProps)(BlogCreate);
