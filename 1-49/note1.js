// React - JS Library whose only purpose is to create UI of a website

// What is Library? - Segment of code which are provided with some functions that we can use for the UI development.
// Magical Line for React -> It has component based arcitecture i.e we deal with component

// Component -> Reusable piece of code similar to a function in a C.
// or for making understanding easy, component can be called as our custom HTML element

// Why use React when we have JS to optimize HTML and CSS? -> Normal JS is based on Imperative Approach
// (Step by step / line by line -> in detail(low level detail)) while in React, we only need to define the end state and leave it on react which is called Declarative Approach.

// SPA - single page application is used to write react code i.e. without the linking of many pages, one single
//       page is changed dynamically
// In SPA, we use API calls to get the data dynamically in a tag


// React Alternatives - Angular/Vu  




// Component -> Could be utilized (time and again)x2.




// Why React?
// -> Reusability
// -> Dont get repeated
// -> Readibility
// -> Separation
// -> Maintainability





// What is there in Package.json -> Scripts and Dependencies are there. Required to run a react code. Versions are also listed there.
// 



// What happens with index.js -> This file will be executed in the beginning. or entry point for react 
// In index.js, we have to import different files that are used to run codes.
// We fetch root element from public/index.html
// Then we create a JS root element and put the above html div in it.
// now, we render App.js file with index.js
// Our basic code will be done in App.js file inside a function



// Browswer doesnt understands what we are writing in the JS file, it converts the code we write in to basic html code
// react root ele,emt is user and browser friendly




// ____IMPORTANT____ The code that we are writing is not proper JS code either, we can say that it is a JSX code
// i.e Java Script XML code. We can also say that we are writing html in JS.




// the npm start converts the code into browser friendly code i.e into html





// For creating a component, we do this by writing the first name in block letters.


// NOTE---for returning different tags from App.js, we need to have a single parent div for them
// Example:
/*return (
    <div>  
      <Item></Item>
      <ItemDate></ItemDate>
      <div className="App">Hello World</div>
    </div>
    );
*/


// As class is a reserved keyword in JS so, className is used replacing class.
// Example:
// <div className="App">Hello World</div>


// We can use the component we created different times, but what is the advantage if the data is static, for dynamic
// we need API calls which we will learn later.
// Syntax for API calls and fetching the values is:
/*
function ItemDate()
{
    const day=28;
    const month="August";
    const year=2003;
    return(<div className='mfg-date'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}
*/



// For Dynamic data in the above code, we use props->properties
// Example:
/*
function ItemDate(props)
{
    const day=props.day;
    const month=props.month;
    const year=props.year;
    return(<div className='mfg-date'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}

or the other way is again making a constant.

function App() {
  const item2name="SurfExcel";
  return (
    <div>  
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="May" year="2000"></ItemDate>

      <Item name={item2name}></Item>
      <ItemDate day="21" month="June" year="2001"></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="22" month="July" year="2002"></ItemDate>
      <div className="App">Hello World</div>
    </div>
  );
}

or

***********8
function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"July",
      itemyear:"2001"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"July2",
      itemyear:"20012"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"July3",
      itemyear:"20013"
    },
    {
      itemName:"Nirma4",
      itemDate:"204",
      itemMonth:"July4",
      itemyear:"20014"
    }
  ];
  return (
    <div>  
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>
      <div className="App">Hello World</div>
    </div>
  );
}

The above method will be used mostly, it uses objects inside a array
*/




// NOTE - To print the content inside a self created component, we need to use props.children
// Example:
// To print the following: 
/*
function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"July",
      itemyear:"2001"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"July2",
      itemyear:"20012"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"July3",
      itemyear:"20013"
    },
    {
      itemName:"Nirma4",
      itemDate:"204",
      itemMonth:"July4",
      itemyear:"20014"
    }
  ];
  return (
    <div>  
      <Item name={response[0].itemName}>
        This is the best brand                 ////////////////////////////////////////////////////////This item******
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>
      <div className="App">Hello World</div>
    </div>
  );
}


We need to use this:

function Item(props)
{
    const itemName=props.name;
    return(<div>
                <p className="nirma">{itemName}</p>
                {props.children}
            </div>
    );
}  
*/
