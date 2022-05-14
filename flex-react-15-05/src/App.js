import logo from './logo.svg';
import { StyledHeader } from './Components/Header';
import { StyledTitle, ColumnContainer, ContentWrapper } from './styles'
import {StyledLink, StyledList, StyledArticle as Article} from './Components/Article';

import careersImage from "./Images/careers.png";
import codeImage from "./Images/code.png";
import laptopImage from "./Images/laptop.png";


/* Make the page look the same as in zeplin , same content and images */

/* Make <a> tags orange */

/* Make array with data for all columns and a field which represent which columns 
   the article should be displayed in */


const leftData = [
  {
    title: "DESIGN SYSTEM",
    headline: "How Do You Handle Component Spacing In A Design System ?",
    buttonText: "READ THIS",
    content: (<p>Say you’ve got a <strong>&lt; Card /&gt;</strong> component.
      It’s highly likely it shouldn’t be butted right up against any
      other components with no spacing around it. That’s true for…
      pretty much every component. So, how do you handle component spacing
      in a design system?</p>),
    image: undefined
  },

  {
    title: "FRONTEND",
    headline: "How to Favicon in 2022: Six Files That Fit Most Needs",
    buttonText: undefined,
    content: (<p>Editor’s note: With the arrival of the new year,
      this post has been slightly modified to reflect
      the fact that this content is still relevant!</p>),
    image: laptopImage
  },]


const centerData = [
  {
    title: "COLORS",
    headline: "A Whistle-Stop Tour of 4 New CSS Color Features",
    buttonText: undefined,
    content: (<p>I was just writing in my <StyledLink href="#">“What’s new in since CSS3?”</StyledLink> article about recent and
      possible future changes to CSS colors. It’s weirdly a lot. There are just as many or more
      new and upcoming ways to define colors than what we have now. I thought we’d take a really
      quick look.
      <br />
      First, a major heads up. This stuff is so complicated. I barely understand it. But here are some aspects:
      <br />
      <StyledList>
        <li>Before all this upcoming change, we only had RGB as a color model, and everything dealt with that.</li>
        <li>We had different “color spaces” that handled it differently (e.g. the rgb() function mapped that RGB
          color model as a cube with linear coordinates, the hsl() function mapped that RGB color model as a cylinder)
          but it was all sRGB gamut.</li>
        <li>With the upcoming changes, we’re getting new color models and (!) we’re getting new functions that map that
          color model differently. So I think it’s kind of a double-triple whammy.</li>
      </StyledList></p>),
    image: codeImage
  },

  {
    title: "SUBSCRIBTION",
    headline: "Stay Tuned & Get New Updates",
    buttonText: "SUBSCRIBE",
    content: (<p>If you'd like to know when we release additional results or announce next year's edition,
      just leave us your email below</p>),
    image: undefined
  },

];

const rightData = [
  {
    title: "WEB & MOBILE DEVELOPMENT",
    headline: "Building an Adaptive Favicon",
    buttonText: undefined,
    content: (<p>A custom <StyledLink href="#">favicon</StyledLink> is a great way to polish a web project.
      It displays on desktop browser tabs, and also inside "save for later"
      readers, other blog posts linking to your site, and more.
      Traditionally this has been done with the .ico file type,
      but recently browsers have allowed use of <StyledLink href="#">SVG</StyledLink>, a vector format.</p>),

    image: undefined
  },

  {
    title: "CAREERS",
    headline: "Looking for You!",
    buttonText: undefined,
    content: (<p>As part of your role, you will have the opportunity to develop from scratch,
      working closely with the product, design, and QA teams to deliver the best product.
      This is a great opportunity to join us and grow with other team members.
      <br />
      Send CV to <StyledLink href="#"> Jobsil@abra-it.com </StyledLink></p>),
    image: careersImage
  },]

function App() {
  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <StyledTitle>Latest updates</StyledTitle>
      <ContentWrapper>
        <ColumnContainer>
          {leftData.map((item, idx) => {
            return (
              <>
                <Article title={item.title}
                  headline={item.headline}
                  image={item.image}
                  buttonText={item.buttonText}
                >
                  {item.content}
                </Article>
                {(idx != leftData.length-1) && <hr/> }
              </>
            )
          })}
        </ColumnContainer>

        <ColumnContainer big>
          {centerData.map((item, idx) => {
            return (
              <>
                <Article title={item.title}
                  headline={item.headline}
                  image={item.image}
                  buttonText={item.buttonText}
                >
                  {item.content}
                </Article>
                {(idx != leftData.length-1) && <hr/> }
              </>
            )
          })}
        </ColumnContainer>

        <ColumnContainer>
          {rightData.map((item, idx) => {
            return (
              <>
                <Article title={item.title}
                  headline={item.headline}
                  image={item.image}
                  buttonText={item.buttonText}
                >
                  {item.content}
                </Article>
                {(idx != leftData.length-1) && <hr/> }
              </>
            )
          })}
        </ColumnContainer>
      </ContentWrapper>
    </div>
  );
}

export default App;
