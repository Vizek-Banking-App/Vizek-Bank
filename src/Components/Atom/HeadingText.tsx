type heading = {
  content: string;
};

export  function HeadingText(props: heading) {
  return (
    <>
      <h1 className="header_text">{props.content}</h1>
    </>
  );
}
