import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; 
  padding: 2rem;
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ffffff; 
  padding: 40px;
  border-radius: 15px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  max-width: 800px;
  width: 100%;
`;

export const ContactImage = styled.div`
  flex: 1;
  max-width: 40%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const ContactDetails = styled.div`
  flex: 2;
  max-width: 50%;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #333; 
  }

  p {
    font-size: 1.2rem;
    color: #666; 
    margin-bottom: 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;

  a {
    font-size: 1.5rem;
    color: #ffba08; 
    transition: color 0.3s;

    &:hover {
      color: #333; 
    }
  }
`;

export const Address = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    color: #333; 
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #007bff; 
    margin-bottom: 10px;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  margin-top: 20px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #333; 
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }

  .btn {
    margin-top: 20px;
    background-color: #ffba08; 
    color: #ffffff; 
    &:hover {
      background-color: #333; 
    }
  }
`;
