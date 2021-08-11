import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

import { postBlogActions } from '../../../redux/postBlog/actions';

const colourOptions = [
  { value: 'design', label: 'Design' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'serviceDelivery', label: 'Service Delivery' },
  { value: 'tutorial', label: 'Tutorial' },
  { value: 'caseStudy', label: 'Case Study' },
];

const Categories = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(postBlogActions.setCurrentCategory(e.label));
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name="color"
      placeholder={'Select a category'}
      options={colourOptions}
      onChange={handleChange}
    />
  );
};

export default Categories;
export { Categories };
