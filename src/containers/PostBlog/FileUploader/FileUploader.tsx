import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Presentation } from './Presentation';
import { postBlogActions } from '../../../redux/postBlog/actions';
import { selectPostBlogData } from '../../../redux/postBlog/selectors';

const FileUploader = (props: any) => {
  let dragEventCounter = 0;
  let fileUploaderInput: HTMLElement | null = null;

  const [dragging, setDragging] = useState(false);
  const { image } = useSelector(selectPostBlogData);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('dragover', (event: Event) => {
      overrideEventDefaults(event);
    });
    window.addEventListener('drop', (event: Event) => {
      overrideEventDefaults(event);
    });

    return () => {
      window.removeEventListener('dragover', overrideEventDefaults);
      window.removeEventListener('drop', overrideEventDefaults);
    };
  }, []);

  const dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter++;
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      setDragging(true);
    } else if (event.dataTransfer.types && event.dataTransfer.types[0] === 'Files') {
      // This block handles support for IE - if you're not worried about
      // that, you can omit this
      setDragging(true);
    }
  };

  const dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter--;

    if (dragEventCounter === 0) {
      setDragging(false);
    }
  };

  const dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter = 0;
    setDragging(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      dispatch(
        postBlogActions.setNewPostImage({
          url: URL.createObjectURL(file),
          ext: file.name.split('.').pop(),
        })
      );
    }
  };

  const overrideEventDefaults = (event: Event | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onSelectFileClick = () => {
    fileUploaderInput && fileUploaderInput.click();
  };

  const onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      dispatch(
        postBlogActions.setNewPostImage({
          url: URL.createObjectURL(file),
          ext: file.name.split('.').pop(),
        })
      );
    }
  };

  return (
    <Presentation
      uploadedPictureURL={image.url}
      dragging={dragging}
      file={image.url}
      onSelectFileClick={onSelectFileClick}
      onDrag={overrideEventDefaults}
      onDragStart={overrideEventDefaults}
      onDragEnd={overrideEventDefaults}
      onDragOver={overrideEventDefaults}
      onDragEnter={dragenterListener}
      onDragLeave={dragleaveListener}
      onDrop={dropListener}
    >
      <input style={{ display: 'none' }} ref={el => (fileUploaderInput = el)} type="file" onChange={onFileChanged} />
    </Presentation>
  );
};

export default FileUploader;
export { FileUploader };
