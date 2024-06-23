type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return (
    <>
      <button className="btn">{text}</button>
    </>
  );
};
