import styled from 'styled-components';

const SideImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(148, 147, 247);
  background: linear-gradient(217deg, rgba(148, 147, 247, 1) 0%, rgba(210, 194, 221, 1) 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;

const Image = styled.img`
  width: auto;
  height: 40vh;
  img {
    width: auto;
    height: 100%;
  }
`;

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <SideImageContainer>
      <Image src={src} alt={alt} />
    </SideImageContainer>
  );
};
