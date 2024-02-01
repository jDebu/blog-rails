import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { truncateText } from "../../helpers/helpers";
import clsx from "clsx";

export const Article = ({ title, body, slug, listMode = true }) => {
  const content = listMode ? truncateText(body, 210) : body
  return (
    <div className="pt-2">
      {listMode ? (
        <Link to={`/articles/${slug}`}>
          <h1 className="font-black pb-2">{title}</h1>
        </Link>
      ) : (
        <h1 className="font-black pb-2">{title}</h1>
      )}
      <div
        className={clsx({ "line-clamp-3 md:line-clamp-2": listMode })}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  slug: PropTypes.string,
};
