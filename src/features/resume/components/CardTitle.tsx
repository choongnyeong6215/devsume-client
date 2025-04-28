interface CardTitleProps {
  text: string;
}

const CardTitle = ({ text }: CardTitleProps) => {
  return <h2>{text}</h2>;
};

export default CardTitle;
