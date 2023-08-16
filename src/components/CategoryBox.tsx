import { Link } from "gatsby";
import React, { FC } from "react";

interface ICategoryBoxProps {
  data: {
    title: string;
    category: string[];
    date: string;
    slug: string;
    excerpt: string;
  };
}

const CategoryBox: FC<ICategoryBoxProps> = (props) => {
  const { data } = props;
  return (
    <article className="grid grid-cols-4">
      <Link
        className="col-start-2 col-end-5 pl-3 mb-3 font-semibold w-fit text-subtitle2 hover:text-primary-dark"
        to={`/categories/${data.slug}`}
      >
        {data.title}
      </Link>
      <div className="pr-4 text-right text-button">
        <span className="">{data.date}</span>
        <br />
        {data.category.map((el) => (
          <div className="flex flex-col items-end gap-2 mt-1">
            <Link
              className="rounded-sm border-[1px] py-1 px-2 w-fit border-primary-dark text-primary-dark hover:text-mono-white hover:bg-primary-dark "
              to={`/categories/${data.category}`}
            >
              {el.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
      <div className="col-start-2 col-end-5 pl-4 border-l-[1px] border-mono-black solid ">
        <p className="mb-3 text-transparent bg-clip-text bg-gradient-to-b from-paragraph to-transparent line-clamp-5 text-small">
          {data.excerpt}
        </p>
        <div className="flex items-center hover:text-primary-dark">
          <Link className="font-semibold text-small" to={`/categories/${data.slug}`}>
            read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CategoryBox;
