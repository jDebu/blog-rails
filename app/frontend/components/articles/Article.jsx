import React from 'react'
import PropTypes from 'prop-types'
import { truncateText } from '../../helpers/helpers'

export const Article = ({ title, body }) => {
  return (
    <div className='pt-2'>
      <h1 className='font-black pb-2'>{title}</h1>
      <div className='line-clamp-3 md:line-clamp-2' dangerouslySetInnerHTML={{ __html: truncateText(body, 210) }} />
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}