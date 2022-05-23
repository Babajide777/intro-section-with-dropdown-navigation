import styled from "styled-components";

const MainBoxStyled = styled.main`
  .main-img {
    height: 300px;
    margin-bottom: 3rem;

    .desktop-img {
      display: none;
    }

    .mobile-img {
      margin-bottom: 3rem;
    }
  }

  .text {
    text-align: center;
    h1 {
      margin-bottom: 1rem;
      letter-spacing: 0.1rem;
    }
    p {
      opacity: 0.7;
      margin-bottom: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.02rem;
    }

    button {
      padding: 0.6rem 1.2rem;
      border: none;
      border: 1px solid ${({ theme }) => theme.color.almostBlack};
      color: ${({ theme }) => theme.color.almostWhite};
      background-color: ${({ theme }) => theme.color.almostBlack};
      border-radius: 10px;
      font-weight: bold;
      margin-bottom: 3rem;
      cursor: pointer;
    }
  }

  .icons {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2rem;
    width: 80vw;
    height: 70vh;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 10vw;
    .main-img {
      height: 70vh;
      order: 2;
      .desktop-img {
        display: block;
        height: 100%;
        width: 100%;
      }

      .mobile-img {
        display: none;
      }
    }

    .text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      h1,
      p,
      button {
        margin-bottom: 0;
      }

      h1 {
        font-size: 4rem;
      }
    }

    .icons {
      padding: 0;
    }
  }
`;

export default MainBoxStyled;
