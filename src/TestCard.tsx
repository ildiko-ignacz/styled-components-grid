import react from "react";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 200px;
  background-color: #cbd7ff;
  margin-bottom: 25px;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 18px;
`;

interface TestCardProps {
  title: string;
  description: string;
}

const TestCard = ({ title, description }: TestCardProps) => {
  return (
    <div>
      <Img></Img>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

export default TestCard;
