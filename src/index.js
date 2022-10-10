// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// //capitalize the first letter of your component name.
// // use div/section/article fragment
// // everything in a method should be under one div
// // className instead of class
// // close every element
// // do not create div soup
// // this uses jsx

// // function Greeting(){
// //     return <h4>This is Riya and this is my first component</h4>;
// // }
// // const Greeting=()=>{
// //     return React.createElement("h4",{},"Hello riya");
// // }
// // const Greeting=()=>{
// //     return ("div",{},
// //      React.createElement("h1",{},"Hello riya"));
// // }

// // const Greeting=()=>{
// //    return(<div>
// //         <h1>Hello</h1>
// //     </div>);
// // }
// // const Greeting = () => {
// //     return (
    
// //         <div>
// //             <h1>Hello world</h1>
// //         </div>


// //     );
// // }
// const Greeting = () =>{
//     return(
//         <div>
//             <Person></Person>
//             <Message/>
//         </div>
//     )
// }
// const Person = () =><h2>Riya</h2>
// const Message = () =><p>Hello</p>

// const BookList = () =>{
//     return(
//         <section>
//             <Book/>
//         </section>
//     )
// }
// const Book = () =>{
//     return (<article className="author">
//         <Image></Image>
//         <Author></Author>
//         <Title></Title>
//     </article>);
// }
// const Image = () => {
//     return(
//         <img src=""
//         alt="book"/>
//     );
// };

// ///jsx css
// const Author = ()=>{
//     return(
//         <div style={{color:'#000000',fontSize:'0.75rem'}}>Book name</div>
//     );
// }
// const Title = ()=>{
//     return(
//         <div>Riya</div>
//     );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// function BookList(){
//     return (
//         <section className="bookList">
//             <Book/>
//         </section>
//     );
// }
// const author="Paulo"
// const Book = ()=>{
//     const title="Riya book";
//     return(
//         <article>
//             <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"
//             alt=""/>
//             <h1>{title}</h1>
//             <h2>{author.toUpperCase()}</h2>
//         </article>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);

//PROPS
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const author='Riya';
// const title='Alchemist';
// const image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"

// function BookList(){
//     return(
//         <section className="book">
//         <Book job="developer"/>
//         <Book job="designer" number={22}/>
//         </section>
//     );
// }
// const Book=(props)=>{
//     console.log(props);
//     return (
//         <article className="book">
//             <img src={image}/>
//             <h1>{author}</h1>
//             <h2>{title}</h2>
//             <p>job:{props.job}</p>
//             <p>{props.number}</p>
//         </article>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const firstBook={
//     img:"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
//     title:"Psycholgy of Money",
//     author:"James"
// }

// const secondBook = {
//     img:"https://m.media-amazon.com/images/I/81StezluKUS._AC_UY327_FMwebp_QL65_.jpg",
//     title:"Sherlock",
//     author:"James"
// }

// function BookList(){
//     return (
//         <article>
//             <Book
//             img={firstBook.img}
//             title={firstBook.title}
//             author={firstBook.author}>
//             <p>this is a child</p> </Book>
//             <Book 
//             img = {secondBook.img}
//             title={secondBook.title}
//             author={secondBook.author}/>
//         </article>
//     )
// }
// const Book=(props)=>{
//     console.log(props);
//     return(
//         <article>
//             <img src={props.img}/>
//             <h1>{props.title}</h1>
//             <h2>{props.author}</h2>
//         </article>
//     )
// }
// const Book=(props)=>{
//     console.log(props);
//     const {img,title,author}=props;
//     return(
//         <article>
//             <img src={img}/>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//         </article>
//     )
// }

// const Book=({img,title,author,children})=>{
//     // console.log(props);
//     // const {img,title,author}=props;
//     return(
//         <article>
//             <img src={img}/>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//             {children}
//         </article>
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);

//Simple List
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const names=[
//     'a','b','c'];
// const newNames = names.map((name)=>{
//     return <h1>{name}</h1>;
// })

// function BookList(){
//     console.log(newNames)
//     return <section>
//         {newNames}
//     </section>;
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);


// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const books=[
//     {
//           id:1,
//           img:"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
//           title:"Psycholgy of Money",
//           author:"James"
            
//     },
//     {
//         id:2,
//         img:"https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
//         title:"Power of mind",
//         author:"Joseph"
          
//   },
//   {
//     id:3,    
//     img:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
//     title:"Attitude",
//     author:"Jeff Keller"
      
// }]

// function BookList(){
//     return <section >
//         {books.map((book)=>{
//             return <Book book={book} key={book.id}></Book>;
//             //return <Book key={book.id} {...book}></Book>;
//         })}
//     </section>;
// }
// const Book=(props)=>{
//     //console.log("props :"+props.book);
//     const {img,title,author}=props.book;
//     return (<section>
//         <img src={img} alt=""/>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//     </section>);
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);

import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";

const books=[
    {
          id:1,
          img:"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
          title:"Psycholgy of Money",
          author:"James"
            
    },
    {
        id:2,
        img:"https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
        title:"Power of mind",
        author:"Joseph"
          
  },
  {
    id:3,    
    img:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Attitude",
    author:"Jeff Keller"
      
}]
function BookList(){
    return <section >
        {books.map((book)=>{
            return <Book book={book} key={book.id}></Book>;
            //return <Book key={book.id} {...book}></Book>;
        })}
    </section>;
}
const Book=(props)=>{
    
    const {img,title,author}=props.book;
    //events
    //onclick, onMouseOver
    const clickHandler=(e)=>{   //here e is the event
        //console.log(e);
        console.log("hello world");
    }
    const complexExample=(author)=>{
        console.log(author);
    }

    return (<section onMouseOver={()=>console.log(title)}>
        <img src={img} alt=""/>
        <h1 onClick={()=>console.log(author)}>{title}</h1>
        <h4>{author}</h4>
        <button onClick={clickHandler()}>example</button>
        <button onClick={()=>complexExample(author)}>complex </button>
    </section>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);