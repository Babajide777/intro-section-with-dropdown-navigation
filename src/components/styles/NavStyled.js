import styled from "styled-components";

const NavStyled = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-link > a {
    opacity: 0.6;
  }

  .nav-link:hover > a {
    opacity: 1;
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
        width: 9.5rem;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-shadow: 0 0 4px #aaa;

        li:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }

      .company-dropdown {
        z-index: 2;
        background-color: #fff;
        right: 0.5rem;
        top: 2rem;
        width: 8rem;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        box-shadow: 0 0 4px #ccc;

        li:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
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
      left: 0;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      animation: navSlide 2s ease 1 forwards;
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
        cursor: pointer;
      }

      .nav-link {
        text-align: center;
        margin-top: 1.5rem;

        .register {
          border: 1px solid #000;
          padding: 0.5rem 2rem;
          border-radius: 10px;
        }
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

    .feature-dropdown,
    .company-dropdown {
      margin-top: 1rem;
      margin-left: 2rem;
    }

    .show {
      display: block;
    }

    @keyframes navSlide {
      from {
        transform: translateX(100%);
        opacity: 0;
      }

      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

export default NavStyled;
