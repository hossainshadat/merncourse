import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Accordions() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <div className="mt-12">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            How does React work?
          </AccordionHeader>
          <AccordionBody>
            One of the biggest advantages of using React is that you can infuse
            HTML code with JavaScript. Users can create a representation of a
            DOM node by declaring the Element function in React. The code below
            contains a combination of HTML and JavaScript: You may have noticed
            that the syntax of the HTML code above is similar to XML. That said,
            instead of using the traditional DOM class, React uses className.
            JSX tags have a name, children, and attributes. Numeric values and
            expressions must be written inside curly brackets. The quotation
            marks in JSX attributes represent strings, similarly to JavaScript.
            In most cases, React is written using JSX instead of standard
            JavaScript to simplify components and keep code clean. Here is an
            example of React code written using JSX: The following is a
            breakdown of the HTML tags above: MyCounter represents a variable
            called count whose value is a numeric expression. GameScores is an
            object literal that has two prop-value pairs. DashboardUnit is the
            XML block that is rendered on the page. scores=GameScores is the
            scores attribute. It gets its value from the GameScores object
            literal defined earlier. A React app usually has a single root DOM
            node. Rendering an element into the DOM will change the user
            interface of the page. For instance, the following code displays
            “Hello World” on the page by rendering the element into a DOM node
            called root. ReactDOM.render(element,
            document.getElementById('root')); Whenever a React component returns
            an element, the Virtual DOM will update the real DOM to match.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is difference between state and props in React?
          </AccordionHeader>
          <AccordionBody>
            Props and state are related. The state of one component will often
            become the props of a child component. Props are passed to the child
            within the render method of the parent as the second argument to
            React.createElement() or, if you're using JSX, the more familiar tag
            The parent's state value of childsName becomes the child's
            this.props.name. From the child's perspective, the name prop is
            immutable. If it needs to be changed, the parent should just change
            its internal state:
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            React UseEffect without fetching
          </AccordionHeader>
          <AccordionBody>
            Sometimes, however, we need our components to reach outside this
            data-flow process and directly interact with other APIs. An action
            that impinges on the outside world in some way is called a side
            effect. Common side effects include the following: 1. Setting the
            page title imperatively 2. Working with timers like setInterval or
            setTimeout 3. Measuring the width, height, or position of elements
            in the DOM 4.Logging messages to the console or other service
            5.Setting or getting values in local storage 6. Fetching data or
            subscribing and unsubscribing to services
          </AccordionBody>
        </Accordion>
      </div>
    </Fragment>
  );
}
