import { Java } from "@styled-icons/fa-brands/Java";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { CPlusPlus } from "@styled-icons/boxicons-logos/CPlusPlus";
import { Yarn } from "@styled-icons/fa-brands/Yarn";
import { Angular } from "@styled-icons/boxicons-logos/Angular";
import { Php } from "@styled-icons/fa-brands/Php";
import { Rubyonrails } from "@styled-icons/simple-icons/Rubyonrails";
import { Flutter } from "@styled-icons/remix-fill/Flutter";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Express } from "@styled-icons/simple-icons/Express";
import { Sequelize } from "@styled-icons/simple-icons/Sequelize";
import { Apollographql } from "@styled-icons/simple-icons/Apollographql";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Gatsby } from "@styled-icons/remix-fill/Gatsby";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { HardHat } from "@styled-icons/fa-solid/HardHat";
import { Solidity } from "@styled-icons/simple-icons/Solidity";
import {Github} from '@styled-icons/bootstrap/Github';
export const logos = (array: any[]) => {
  array = array.map((item: any) => {
    if (item === "Javascript") {
      item = { name: "Javascript", logo: Javascript };
    } else if (item === "Java") {
      item = { name: "Java", logo: Java };
    } else if (item === "React") {
      item = { name: "React", logo: ReactLogo };
    } else if (item === "Python") {
      item = { name: "Python", logo: Python };
    } else if (item === "Mysql") {
      item = { name: "Mysql", logo: Mysql };
    } else if (item === "Postgresql") {
      item = { name: "Postgresql", logo: Postgresql };
    } else if (item === "Html") {
      item = { name: "Html", logo: Html5 };
    } else if (item === "CSS") {
      item = { name: "CSS", logo: Css3 };
    } else if (item === "C++") {
      item = { name: "C++", logo: CPlusPlus };
    } else if (item === "Mongodb") {
      item = { name: "Mongodb", logo: Mongodb };
    } else if (item === "Express") {
      item = { name: "Express", logo: Express };
    } else if (item === "Nodejs") {
      item = { name: "Nodejs", logo: Nodejs };
    } else if (item === "Yarn") {
      item = { name: "Yarn", logo: Yarn };
    } else if (item === "Angular") {
      item = { name: "Angular", logo: Angular };
    } else if (item === "PHP") {
      item = { name: "PHP", logo: Php };
    } else if (item === "Rubyonrails") {
      item = { name: "Rubyonrails", logo: Rubyonrails };
    } else if (item === "Flutter") {
      item = { name: "Flutter", logo: Flutter };
    } else if (item === "Redux") {
      item = { name: "Redux", logo: Redux };
    } else if (item === "Sequelize") {
      item = { name: "Sequelize", logo: Sequelize };
    } else if (item === "Apollo") {
      item = { name: "Apollo", logo: Apollographql };
    } else if (item === "Graphql") {
      item = { name: "Graphql", logo: Graphql };
    } else if (item === "Gatsby") {
      item = { name: "Gatsby", logo: Gatsby };
    } else if (item === "Next") {
      item = { name: "Next", logo: Nextdotjs };
    } else if (item === "Typescript") {
      item = { name: "Typescript", logo: Typescript };
    } else if (item === "MaterialUI") {
      item = { name: "MaterialUI", logo: Materialui };
    } else if (item === "HardHat") {
      item = { name: "HardHat", logo: HardHat };
    } else if (item === "Solidity") {
      item = { name: "Solidity", logo: Solidity };
    } else if (item === "Github") {
      item = { name: "Github", logo: Github };
    }
    return item;
  });
  return array;
};

