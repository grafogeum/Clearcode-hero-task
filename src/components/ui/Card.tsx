import styled from '@emotion/styled';

const SideImageContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  flex: 1;
  width: 100%;
`;

const Image = styled.img`
  overflow: hidden;
  border-radius: 100%;
  width: 20vh;
  height: 20vh;
  overflow: hidden;
  border: 4px solid #9edec6;
`;

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <SideImageContainer>
      <Image src={src} alt={alt} />
    </SideImageContainer>
  );
};
