import React from "react";

const MDXComponents = {
  // https://typescript-kr.github.io/pages/jsx.html#%EB%82%B4%EC%9E%A5-%EC%9A%94%EC%86%8C-intrinsic-elements
  h1: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h1 className="my-6 font-semibold text-headline1 sm:text-2xl" {...props} />,
  h2: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="my-6 font-semibold text-headline2 sm:text-2xl" {...props} />,
  h3: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h3 className="my-3 font-semibold text-headline3 sm:text-xl" {...props} />,
  h4: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h4 className="my-3 font-semibold text-headline4 sm:text-xl" {...props} />,
  h5: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h5 className="my-3 font-semibold text-subtitle2 sm:text-xl" {...props} />,
  h6: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h6 className="my-3 font-semibold text-body sm:text-xl" {...props} />,

  a: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ) => <a className="leading-relaxed text-blue-600 text-body sm:text-base lg:text-lg hover:underline" {...props} />,
  p: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLParagraphElement> &
      React.HTMLAttributes<HTMLParagraphElement>
  ) => <p className="mb-4 leading-relaxed text-body sm:text-base lg:text-lg" {...props} />,
  ul: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLUListElement> &
      React.HTMLAttributes<HTMLUListElement>
  ) => <ul className="mb-4 ml-8 leading-relaxed list-disc text-body sm:text-base lg:text-lg" {...props} />,
  ol: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLOListElement> &
      React.OlHTMLAttributes<HTMLOListElement>
  ) => <ol className="mb-4 ml-8 leading-relaxed list-decimal text-body sm:text-base lg:text-lg" {...props} />,
  blockquote: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLQuoteElement> &
      React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote
      className="p-4 mb-4 [&>p]:mb-0 leading-relaxed bg-gray-100 border-gray-600 text-body sm:text-base lg:text-lg border-1-4"
      {...props}
    />
  ),
  td: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableCellElement> &
      React.TdHTMLAttributes<HTMLTableCellElement>
  ) => <td className="px-2 py-1 leading-relaxed border border-gray-400 text-body sm:text-base lg:text-lg" {...props} />,
  th: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableCellElement> &
      React.ThHTMLAttributes<HTMLTableCellElement>
  ) => <th className="px-2 py-1 leading-relaxed border border-gray-400 text-body sm:text-base lg:text-lg" {...props} />,
  table: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableElement> &
      React.TableHTMLAttributes<HTMLTableElement>
  ) => <table className="mb-6 leading-relaxed text-body sm:text-base lg:text-lg" {...props} />,
  code: (
    props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>
  ) => <code className="" {...props} />,
  pre: (
    props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>
  ) => <pre className="" {...props} />,
  hr: (
    props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement>
  ) => <hr className="" {...props} />,
  img: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => <img className="border-red-600" {...props} />,
};

export default MDXComponents;
