import styled from "styled-components";

const NavStyled = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-link > a {
    opacity: 0.6;
  }

  a {
    color: ${({ theme }) => theme.color.almostBlack};
  }

  .nav-lg {
    img {
      width: 10%;
    }
  }

  .nav-mobile {
    img {
      width: 10%;
    }
  }

  .overlay,
  .ham {
    display: none;
  }

  .logo {
    img {
      width: 100%;
    }
  }
  .nav-lg {
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 85%;

    .start-nav-links {
      width: 40%;
      display: flex;
      justify-content: space-between;

      li:first-of-type,
      li:nth-of-type(2) {
        position: relative;
      }

      .feature-dropdown,
      .company-dropdown {
        position: absolute;
      }

      .feature-dropdown {
        z-index: 2;
        background-color: #fff;
        right: 0.5rem;
        top: 2rem;
        width: 8.5rem;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-shadow: 0 0 4px #aaa;
        display: none;
      }

      .company-dropdown {
        z-index: 2;
        background-color: #fff;
        right: 0.5rem;
        top: 2rem;
        width: 7rem;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        box-shadow: 0 0 4px #ccc;
        display: none;
      }
    }

    .start-nav-links li:first-of-type:hover .feature-dropdown {
      display: inline-block;
      transition: all 5s;
    }

    .start-nav-links li:nth-of-type(2):hover .company-dropdown {
      display: inline-block;
      transition: all 5s;
    }

    .end-nav-links {
      display: flex;
      gap: 15%;
    }

    .register {
      border: 1px solid #000;
      padding: 0.5rem 1rem;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 900px) and (min-width: 600px) {
    .nav-lg .start-nav-links {
      width: 70%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    .nav-lg {
      display: none;
    }

    .close img {
      cursor: pointer;
    }

    .ham {
      display: inline-block;
      cursor: pointer;
    }

    .overlay {
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: 3;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .together {
      position: absolute;
      background-color: #fff;
      height: 100vh;
      width: 50vw;
      right: 0;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .close {
      margin-bottom: 2rem;
      align-self: flex-end;
    }

    .nav-mobile {
      li {
        margin-bottom: 0.7rem;
      }

      li a {
        opacity: 0.7;
      }

      .nav-link {
        text-align: center;
      }

      .nav-link:first-of-type {
        margin-top: 2rem;
      }

      .nav-link:nth-of-type(2) a {
        border: 1px solid #000;
        padding: 0.5rem 1rem;
        border-radius: 10px;
      }
    }

    .show {
      display: block;
    }
  }
`;

export default NavStyled;
