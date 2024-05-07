import { StaticImageData } from "next/image";
import img01 from "../../public/01.jpg";
import img02 from "../../public/02.jpg";
import img03 from "../../public/03.jpg";
import img04 from "../../public/04.jpg";
import img05 from "../../public/05.jpg";
import img06 from "../../public/06.jpg";
import img07 from "../../public/07.jpg";
import img08 from "../../public/08.jpg";

export interface CardData {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export const cards: CardData[] = [
  {
    image: img01,
    title: "HTML5 and CSS3",
    description:
      "Learn HTML5 and CSS3 quickly and easily!•Easy-to-view approach uses real-world code examples to guide you through learning HTML and CSS, showing you what to do in steps.•Concise explanations and steps let you learn and get up and running quickly.Whether you're new to HTML and CSS or have been building websites for years and want to learn about HTML5, CS3 and more, this book has something for you - how to structure content with HTML5 elements; style pages with CSS and improve them with some of the new features of CSS3; use images, customize forms and web fonts; add audio and video in HTML5; build a website that works on cell phones and smartphones, tablets, laptops and desktops; follow best practices; and much, much more!",
    link: "https://acesse.one/nWjtx",
  },
  {
    image: img02,
    title: "Logic and Algorithms with JavaScript",
    description:
      "The contents covered in Programming Logic and Algorithms are essential for all those who wish to enter the world of Computer Programming. These contents, in general, impose some difficulties on beginners. In this book, the author uses his experience of more than 15 years in teaching the subject of Algorithms in undergraduate courses, to work on the subject step by step. Each chapter was carefully planned to avoid information overload for the reader, with examples and fixation exercises for each subject.The examples and exercises are developed in JavaScript, a language widely used in the development of web pages. Running JavaScript programs does not require any additional software; You just need to open the page in your favorite browser.",
    link: "https://l1nk.dev/Kn3qF",
  },
  {
    image: img03,
    title: "Data Structures and Algorithms with JavaScript",
    description:
      "The book 'Data Structures and Algorithms with JavaScript' starts by covering the basics of JavaScript and introduces you to ECMAScript 2017, before gradually moving on to the most important data structures such as arrays, queues, stacks, and linked lists. You will gain in-depth knowledge of how hash tables and data structures for sets work, as well as how trees and hash maps can be used to search for files on a hard drive or to represent a database. This book serves as a path for you to dive deeper into JavaScript. You will also gain a better understanding of how and why graphs - one of the most complex data structures there is - are widely used in GPS navigation systems and social networks",
    link: "https://acesse.one/VLpYT",
  },
  {
    image: img04,
    title: "Clean code",
    description:
      "Even bad code can work. But if it isn't clean, it could wipe out a development company. Countless hours and important resources are lost every year due to poorly written code. But it does not need to be like that.Renowned software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: Practical Agile Software Skills. Martin got together with his colleagues at Mentor Object to distill their best and most agile practices for cleaning code 'on the fly' into a book that will gradually instill into you the values of a software professional's skill and make you a better programmer - but only if you practice.What type of work will you do? You will read code here, a lot of code. And you must find out what is correct and wrong in the code. And, most importantly, you will have to reevaluate your professional values and your commitment to your craft.",
    link: "https://acesse.one/3YLct",
  },
  {
    image: img05,
    title: "React - Learn by Practicing",
    description:
      "React is a library for creating websites, graphical interfaces and web applications, created by Facebook, and its use has grown a lot, being used by large companies, such as Netflix, Walmart and The New York Times. In this eminently practical book, Maujor, with his renowned teaching skills, provides the reader with a detailed overview of the basic concepts and resources of the React library. You will learn how to develop complete React applications, step by step, from scratch to hosting on a remote server. Each chapter introduces a new React feature, with practical exercises to consolidate the concepts studied. It is aimed at developers with basic knowledge of HTML, CSS3 and JavaScript, interested in creating websites in both the design and development and programming areas.",
    link: "https://acesse.one/b6qGn",
  },
  {
    image: img06,
    title: "Building applications with NodeJS",
    description:
      "O NodeJS é uma poderosa plataforma para construir de forma rápida e fácil aplicações de rede escaláveis. Utiliza um modelo de single thread, faz I/O não bloqueante, por isso trabalha sempre de forma assíncrona. Neste livro, você aprenderá a construir uma API RESTful funcional e escalável, com testes unitários e otimizações para melhor performance, que estará pronta para ser publicada seguindo boas práticas. Será utilizada uma estrutura robusta, testável e expansível, que poderá servir como base para implementar outras aplicações HTTP com NodeJS. Além disso, será possível revisar conceitos importantes sobre as novas features da linguagem JavaScript e aprender a utilizar diferentes bancos de dados, como Postgres, MongoDB, DynamoDB e Redis.",
    link: "https://acesse.one/SarSp",
  },
  {
    image: img07,
    title: "Clean Architecture",
    description:
      "By applying universal rules of software architecture, you can dramatically improve developer productivity throughout the life of any software system. Now, building upon the success of his best-selling books Clean Code and The Clean Coder, legendary software craftsman Robert C. Martin (“Uncle Bob”) reveals those rules and helps you apply them. Martin's Clean Architecture doesn't merely present options. Drawing on over a half-century of experience in software environments of every imaginable type, Martin tells you what choices to make and why they are critical to your success. As you've come to expect from Uncle Bob, this book is packed with direct, no-nonsense solutions for the real challenges you'll face-the ones that will make or break your projects.",
    link: "https://l1nk.dev/uLYHq",
  },
  {
    image: img08,
    title: "Web Development with Node and Express",
    description:
      "Build dynamic web applications with Express, a key component of the Node/JavaScript development stack. In this updated edition, author Ethan Brown teaches you Express fundamentals by walking you through the development of an example application. This hands-on guide covers everything from server-side rendering to API development suitable for use in single-page apps (SPAs). Express strikes a balance between a robust framework and no framework at all, allowing you a free hand in your architecture choices. Frontend and backend engineers familiar with JavaScript will also learn best practices for building multipage and hybrid web apps with Express. Pick up this book and discover new ways to look at web development.",
    link: "https://acesse.one/3PKAG",
  },
];
