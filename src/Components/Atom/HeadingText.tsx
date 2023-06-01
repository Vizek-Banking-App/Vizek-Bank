type heading = {
  content: string;
};

export default function HeadingText(props: heading) {
  return (
    <>
      <h1>{props.content}</h1>
    </>
  );
}
