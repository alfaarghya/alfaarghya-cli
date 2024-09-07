#!/usr/bin/env node

import figlet, { Options as FigletOptions } from "figlet";
import gradient from "gradient-string";
import boxen, { Options as BoxenOptions } from "boxen";
import chalk from "chalk";

// A utility function to return a promise-based figlet text
const figletText = (text: string, options: FigletOptions): Promise<string> => {
  return new Promise((resolve, reject) => {
    figlet.text(text, options, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result || "");
      }
    });
  });
};

// The main CLI logic wrapped in an async function
const alfaarghya = async (): Promise<void> => {
  try {
    const data: string = await figletText("alfaarghya", {
      font: "Slant",
      horizontalLayout: "fitted",
      verticalLayout: "default",
    });

    const titleGradient = gradient("#95d2ee", "#000a28", "#bee9ef");
    const boxOptions: BoxenOptions = {
      padding: { top: 1, bottom: 1, left: 2, right: 2 },
      borderStyle: "classic",
      borderColor: "#bee9ef",
      backgroundColor: "#000a28",
    };

    console.log(
      boxen(titleGradient(data) + "\n" + cliDescription(), boxOptions)
    );
  } catch (err) {
    console.log("Something went wrong...");
    console.error(err);
  }
};

// Function to return the CLI description, styled with chalk and boxen
const cliDescription = (): string => {
  const separator: string = chalk.hex("#bee9ef").bold("─".repeat(62));

  const info: string = `
  ${chalk.hex("#bee9ef").bold("=>")} ${chalk.white.bold("  Hii👋, I'm")} ${chalk
    .hex("#bee9ef")
    .bold.italic("Arghya Das")} ${chalk.white.bold(
    "a Fullstack Developer based on India."
  )}
  

  ${chalk.hex("#bee9ef").bold("=>")} ${chalk.hex("#fdf9d3").bold("Skills 🧪")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Languages:"
  )}   JavaScript, Typescript, Java, Python
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Frameworks:"
  )}  React.js, Next.js, Turborepo
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Libraries:"
  )}   Express.js, Tailwind, PrismaORM, Zod
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Databases:"
  )}   MySQL, Postgres, MongoDB
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "DevOps:"
  )}      Docker, Postman
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Tools:"
  )}       Git, GitHub, Linux


  ${chalk.hex("#bee9ef").bold("=>")} ${chalk
    .hex("#fdf9d3")
    .bold("Top Projects 💻")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "#1 leetcode api:"
  )}  ${chalk.underline("github.com/alfaarghya/alfa-leetcode-api")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "#2 blog web:"
  )}      ${chalk.underline("github.com/alfaarghya/blog-web")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "#3 typing test:"
  )}   ${chalk.underline("github.com/alfaarghya/typing-test")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "#4 ReadHub.md:"
  )}    ${chalk.underline("github.com/alfaarghya/readhub.md")}


  ${chalk.hex("#bee9ef").bold("=>")} ${chalk
    .hex("#fdf9d3")
    .bold("Let's Connect 🌐")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "GitHub:"
  )}    ${chalk.underline("github.com/alfaarghya/")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "LinkedIN:"
  )}  ${chalk.underline("linkedin.com/in/alfaarghya/")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "X:"
  )}         ${chalk.underline("x.com/alfaarghya")}
  ${chalk.hex("#bee9ef").bold("|")}
  ${chalk.hex("#bee9ef").bold("+-")} ${chalk.white.italic(
    "Instagram:"
  )} ${chalk.underline("instagram.com/alfaarghya")}

  
  ${separator}

            ${chalk.bold(" 💬 SAY HELLO : ")} ${chalk.italic(
    "arghya.coding@gmail.com"
  )}

  ${separator}

              ${chalk.white.dim.italic(
                "🚀 Thank you for checkout my CLI! 😀 "
              )}    
  `;

  const boxOptions: BoxenOptions = {
    borderColor: "#000a28",
  };

  return boxen(info, boxOptions);
};

// Execute the CLI logic
alfaarghya();
