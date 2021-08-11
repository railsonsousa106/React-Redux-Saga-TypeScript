import React from 'react';
import { useSelector } from 'react-redux';

import { selectHomeBlogsData } from '../../../redux/homeBlogs/selectors';
import { ITag } from 'pages/Blog/types';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const TagsFields = (props: any) => {
  const { tags: tags } = useSelector(selectHomeBlogsData);
  const tagOptions = tags.map((tag: ITag) => ({
    value: tag.id,
    label: tag.name
  }));

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      placeholder={'Add a tag'}
      options={tagOptions}
      onChange={props.onChange}
    />
  );
};

export default TagsFields;
export { TagsFields };
