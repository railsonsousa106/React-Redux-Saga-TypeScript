import React from 'react';
import defaultUploadPicture from 'assets/blog/postBlog/Icon ionic-md-cloud-upload.svg';
import { AttachmentField, CustomImage, DefaultImage } from './Presentation.style';

type PresentationalProps = {
  uploadedPictureURL: any;
  dragging: boolean;
  file: File | null;
  onSelectFileClick: () => void;
  onDrag: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

const Presentation: React.FC<PresentationalProps> = ({
  uploadedPictureURL,
  onSelectFileClick,
  onDrag,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
  children,
}) => {
  let uploaderClasses = '';

  return (
    <div
      className={uploaderClasses}
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <AttachmentField onClick={onSelectFileClick}>
        {uploadedPictureURL ? (
          <CustomImage>
            <img src={uploadedPictureURL} alt="" />
          </CustomImage>
        ) : (
          <DefaultImage>
            <img src={defaultUploadPicture} alt="uploadPicture" />
            <span>Drag and drop an Image</span>
          </DefaultImage>
        )}
        <p>Add a high-quality image in your story to make it more inviting to readers</p>
      </AttachmentField>
      {children}
    </div>
  );
};

export default Presentation;
export { Presentation };
