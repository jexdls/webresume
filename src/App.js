import img1 from './pix/1.jpg';
import img2 from './pix/2.jpg';
import img3 from './pix/3.jpg';
import './App.scss';
import { Button, Overlay, Tooltip, Container, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from 'react';
import ScrollingColorBackground from 'react-scrolling-color-background';
import { Slide, Grow } from '@material-ui/core';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { FaReact, FaGithub, FaCss3 } from 'react-icons/fa';
import { DiPhotoshop, DiSass, DiHtml5 } from 'react-icons/di';
import { IoLogoVercel } from 'react-icons/io5';



const renderDelay = 400;

function App(){

  return(
    <div className="App">

      <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'
      />

        <div 
        data-background-color='#ffffff'
        className='js-color-stop'>
        <section id="home-sec" 
          className="px-5 col-xl-7 mx-auto mb-5">
          <Face/>
        </section>
      </div>

        <section id="work-sec"
          className="my-5">
          <div 
        data-background-color='#383e56'
        className='js-color-stop'>
            <Works/>
          </div>
          
        </section>

        <section 
          id="details-sec"
          className="d-flex mx-auto my-5">
          <div 
        data-background-color='#000000'
        className='js-color-stop mx-auto'>
            <Details/>
          </div>
        </section>

        <footer className="m-auto font-lora d-flex">
          <div className ="m-auto">
            (c) 2021 jex
          </div>
        </footer>
    </div>
  );
}

function Face({children}){
  return(
  <div>
    <div 
      data-background-color='rgb(360, 360, 360)'
      className='js-color-stop'>
        <Greetings/> 
        <br/>
        <br/>
        <AboutMe/> 
        <br/>
        <Skills/> 
    </div>
  </div>);
}

function isVanishAppear(topPoint, pos, botPoint){
  return (topPoint < pos && pos < botPoint);
}

function Greetings({}){
  const[elementPosition, setElementPosition] = useState(true);
  const[domino1, setDomino1] = useState(false);
  const[domino2, setDomino2] = useState(false);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-120, currPos.y, window.innerHeight));
  }, [], elementRef);

  useEffect(()=>{
    console.log(`im in useeffect`)
    if(elementPosition){
      setTimeout(()=>setDomino1(true), renderDelay*2);
      setTimeout(()=>setDomino2(true), renderDelay*3);
    }else{
      setTimeout(()=>setDomino1(false), renderDelay*2);
      setTimeout(()=>setDomino2(false), renderDelay*3);
    }
  },[elementPosition]);

  return(
        <div id="greetings" 
          className="font-righ">
          <Slide 
            direction="right" 
            in={elementPosition} 
            mountOnEnter> 
                <div className="g1">
                  HELLO,
                </div>
          </Slide>
          <div className="g2">
            <div className="d-flex">
              <Slide 
                direction="left" 
                in={domino1}
                mountOnEnter> 
                <div>
                  I'M&nbsp;
                </div>
              </Slide>
              <Slide 
                direction="up" 
                in={domino2} 
                mountOnEnter>
                <div>
                  JEX  
                </div>
              </Slide>
            </div>
          </div>
        </div>
    );
}


function AboutMe({}){
  const[elementPosition, setElementPosition] = useState(true);
  const[domino1, setDomino1]= useState(false);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-20, currPos.y, window.innerHeight));
  }, [], elementRef);

  useEffect(()=>{
    if(elementPosition){
      setTimeout(()=>setDomino1(true), renderDelay*5);
    }else{
      setDomino1(false);
    }
  },[elementPosition]);

  return(
    <div>
      <Grow in={domino1}>
        <div id="aboutme"
          className="per-det d-flex flex-column"
          ref={elementRef}>
          <div className="title font-mont">
            #ABOUT ME{"{"}
          </div>
          <div className="description pl-5 font-lora">
            {/* <PopupTimeout  */}
            {/*   timer="5000"  */}
            {/*   label="computer engineering undergraduate"/> */}
              I’m a self taught React developer
            and web designer. I aim to be a Full Stack developer using MERN as my preferred stack.
          </div>
          <div className="title font-mont">
             {"}"}
          </div>
        </div>
      </Grow>
    </div>
    );
}

// react-bootstrap tooltip
function PopupTimeout({timer, label}) {
  const message ='clickie click';
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [repeat, setRepeat] = useState(0);

  useEffect(()=>{
    if (repeat <= 4)setTimeout(()=>setShow(true), timer)
  })
  return (
    <>
      <span ref={target} 
        onClick={()=>{
                    setShow(!show)
                    setRepeat(repeat+1)
                  }}>
              {label}   
      </span>
      <Overlay 
        target={target.current} 
        show={show} 
        placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {repeat > 3 ? 
              ":)" : 
              repeat > 2? 
                "oh hi again" :
                 repeat <= 1 ? 
                   message : 
                  "this will be the last"}
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

function Skills({}){
  const[elementPosition, setElementPosition] = useState(true);
  const elementRef = useRef();
  const[domino1, setDomino1]= useState(false);

  useEffect(()=>{
    if(elementPosition){
      setTimeout(()=>setDomino1(true), renderDelay*6);
    }else{
      setDomino1(false);
    }
  },[elementPosition])

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-20, currPos.y, window.innerHeight));
  }, [], elementRef);

  return(
    <Grow in={domino1}>
      <div id="skills" 
        className="per-det d-flex flex-column" 
        ref={elementRef}>
        <div className="title font-mont">
          .SKILLS{"{"}
        </div>
        <div className="description pl-5 font-lora">
          ReactJS<br/>
          HTML<br/>
          SCSS<br/>
        </div>
        <div className="title font-mont">
           {"}"}
        </div>
      </div>
    </Grow>
    );
}


const initialClass = {
  worksCardGlass: "glass h-100 w-100",
  specItemUnhovered: 
    {cont: "icon-cont m-auto d-flex",
    icon: "spec-icon m-auto"}
};

function SpecItem({item, linkRefa1, linkRefb1}){
  const iconElement = 
  item == "ReactJS" ? <FaReact/> : 
  item == "Photoshop" ? <DiPhotoshop/> :
  item == "SCSS" ? <DiSass/> :
  item == "HTML" ? <DiHtml5/> :
  item == "Vercel" ? <IoLogoVercel/> :
  item == "Git" ? <FaGithub/> : 
  item == "CSS" ? <FaCss3/> : ""
  ;
  return(
    <div
      className="spec-item d-flex flex-column p-3">
      <div ref={linkRefa1}
        className={initialClass.specItemUnhovered.icon}>
        <div ref={linkRefb1}
          className={initialClass.specItemUnhovered.cont}>
          {iconElement}
        </div>
      </div>
      <div className="spec-name m-auto font-mont">
        {item}
      </div>
    </div>);
}

// WORKS COMPONENTS
function Works({children}){
  const[elementPosition, setElementPosition] = useState(true);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-20, currPos.y, window.innerHeight));
  }, [], elementRef);

  const hoverRef1 = useRef();
  const hoverRef2 = useRef();
  const hoverRef3 = useRef();
  const [showPopUp1, setShowPopUp1] = useState(false);
  const handleShowPopUp1 = () => setShowPopUp1(true);
  const [showPopUp2, setShowPopUp2] = useState(false);
  const handleShowPopUp2 = () => setShowPopUp2(true);
  const [showPopUp3, setShowPopUp3] = useState(false);
  const handleShowPopUp3 = () => setShowPopUp3(true);

  let refsCard1=[];

  const linkRefa1 = useRef(); 
  const linkRefb1 = useRef();
  const handleLinkRef1 = ()=>{
    linkRefa1.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    linkRefb1.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleLinkRef1 = ()=>{
    linkRefa1.current.className = initialClass.specItemUnhovered.icon
    linkRefb1.current.className = initialClass.specItemUnhovered.cont};

  const arr1=[[linkRefa1,linkRefb1],handleLinkRef1, unHandleLinkRef1];
  refsCard1.push(arr1);

  const linkRefa2 = useRef(); 
  const linkRefb2 = useRef();
  const handleLinkRef2 = ()=>{
    linkRefa2.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    linkRefb2.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleLinkRef2 = ()=>{
    linkRefa2.current.className = initialClass.specItemUnhovered.icon
    linkRefb2.current.className = initialClass.specItemUnhovered.cont};

  const arr2=[[linkRefa2,linkRefb2],handleLinkRef2, unHandleLinkRef2];
  refsCard1.push(arr2);

  const Arba2 = useRef(); 
  const Arbb2 = useRef();
  const handleArb2 = ()=>{
    Arba2.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    Arbb2.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleArb2 = ()=>{
    Arba2.current.className = initialClass.specItemUnhovered.icon
    Arbb2.current.className = initialClass.specItemUnhovered.cont};

  const arr3=[[Arba2,Arbb2],handleArb2, unHandleArb2];
  refsCard1.push(arr3);

  const Xa2 = useRef(); 
  const Xb2 = useRef();
  const handleX2 = ()=>{
    Xa2.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    Xb2.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleX2 = ()=>{
    Xa2.current.className = initialClass.specItemUnhovered.icon
    Xb2.current.className = initialClass.specItemUnhovered.cont};

  const arr4=[[Xa2,Xb2],handleX2, unHandleX2];
  refsCard1.push(arr4);

  const NewZa2 = useRef(); 
  const NewZb2 = useRef();
  const handleNewZ2 = ()=>{
    NewZa2.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    NewZb2.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleNewZ2 = ()=>{
    NewZa2.current.className = initialClass.specItemUnhovered.icon
    NewZb2.current.className = initialClass.specItemUnhovered.cont};

  const arr5=[[NewZa2,NewZb2],handleNewZ2, unHandleNewZ2];
  refsCard1.push(arr5);

  const RandZa2 = useRef(); 
  const RandZb2 = useRef();
  const handleRandZ2 = ()=>{
    RandZa2.current.className = `${initialClass.specItemUnhovered.icon} link_hovered`;
    RandZb2.current.className = `${initialClass.specItemUnhovered.cont} link_hovered`};
  const unHandleRandZ2 = ()=>{
    RandZa2.current.className = initialClass.specItemUnhovered.icon
    RandZb2.current.className = initialClass.specItemUnhovered.cont};

  const arr6=[[RandZa2,RandZb2],handleRandZ2, unHandleRandZ2];
  refsCard1.push(arr6);
  
  

  return(
    <Container fluid id="works">
  
  <Grow in={elementPosition}>
    
      <div className="ttl font-righ txt-al-cen"
        ref = {elementRef}>
        Works
      </div>
  </Grow>
      <div>
        <WorksList>


          <WorksCard
            handleShowPopUp={handleShowPopUp1} 
            cardHoverRef = {hoverRef1}>
            <WorksCardImgBg 
              imgsrc={img1}
              cardHoverRef = {hoverRef1}/>
            <WorksCardHeadText>
              JIA OFFICIAL
            </WorksCardHeadText>
            <WorksCardSubText>
              (POP-UP WINDOW)
            </WorksCardSubText>
          </WorksCard>
          <WorksPopUp
            showPopUp={showPopUp1}
            setShowPopUp={setShowPopUp1}
            title="Jia Official"
            pageLink="https://jiabibii.vercel.app/">
            <div>
              A content creator’s page that has embedded instagram,
              facebook, twitter, tiktok, and youtube posts.
            </div>
            <div>
              I created a wireframe using 
              {' '}<a 
              onMouseOver={refsCard1[0][1]}
              onMouseLeave={refsCard1[0][2]}
              target="_blank" 
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj4y-PEjuHvAhVXdGAKHQE_BfIYABAAGgJ0bQ&ae=2&ohost=www.google.com&cid=CAASE-RoHXJ0cmXi-lTEXe5CH2fEtHE&sig=AOD64_2jeIcdar4Cak4ya4VqkdlARnUmTA&q&adurl&ved=2ahUKEwiwmN3EjuHvAhXD7GEKHc2VBjQQ0Qx6BAgFEAE">
                Photoshop
              </a>. 
              {' '}<a 
              onMouseOver={refsCard1[1][1]}
              onMouseLeave={refsCard1[1][2]}
              target="_blank" 
              href="https://en.wikipedia.org/wiki/HTML">
                HTML
              </a>, and 
              {' '}<a 
              onMouseOver={refsCard1[2][1]}
              onMouseLeave={refsCard1[2][2]}
              target="_blank" 
              href="https://sass-lang.com/">
                SCSS
              </a> for basics, and 
              {' '}<a 
              onMouseOver={refsCard1[3][1]}
              onMouseLeave={refsCard1[3][2]}
              target="_blank" 
              href="https://reactjs.org/">
                ReactJS
              </a> for DOM Manipulation. The project is then saved in github.
              I used 
              {' '}<a 
              onMouseOver={refsCard1[4][1]}
              onMouseLeave={refsCard1[4][2]}
              target="_blank" 
              href="https://github.com/">
                Git
              </a> for easier updating of the source code and version control. Lastly, 
              {' '}<a 
              onMouseOver={refsCard1[5][1]}
              onMouseLeave={refsCard1[5][2]}
              target="_blank" 
              href="https://vercel.com/">
                Vercel
              </a> serves as the domain server. 
            </div>
            <>
              <SpecItem item="ReactJS"  linkRefa1={refsCard1[3][0][0]} linkRefb1={refsCard1[3][0][1]}/>
              <SpecItem item="Photoshop" linkRefa1={refsCard1[0][0][0]} linkRefb1={refsCard1[0][0][1]}/>
              <SpecItem item="HTML" linkRefa1={refsCard1[1][0][0]} linkRefb1={refsCard1[1][0][1]}/>
              <SpecItem item="SCSS"  linkRefa1={refsCard1[2][0][0]} linkRefb1={refsCard1[2][0][1]}/>
              <SpecItem item="Git"  linkRefa1={refsCard1[4][0][0]} linkRefb1={refsCard1[4][0][1]}/>
              <SpecItem item="Vercel"  linkRefa1={refsCard1[5][0][0]} linkRefb1={refsCard1[5][0][1]}/>
            </>
          </WorksPopUp>


          <WorksCard 
            handleShowPopUp={handleShowPopUp2} 
            cardHoverRef = {hoverRef2}>
            <WorksCardImgBg 
              imgsrc={img2}
              cardHoverRef = {hoverRef2}/>
            <WorksCardHeadText>
             SINGLE TO DO
            </WorksCardHeadText>
            <WorksCardSubText>
              (POP-UP WINDOW)
            </WorksCardSubText>
          </WorksCard>
          <WorksPopUp
            showPopUp={showPopUp2}
            setShowPopUp={setShowPopUp2}
            title="single To Do"
            pageLink="https://singletodo.vercel.app/">
            <div>
              A To Do List App. A user can add 1 item at a time. It only shows the user 1 random task after a task has been completed or ignored. The to do list is stored in the user's local storage to allow for persisting data.
            </div>
            <div>
              I created a wireframe using 
              {' '}<a 
              onMouseOver={refsCard1[0][1]}
              onMouseLeave={refsCard1[0][2]}
              target="_blank" 
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj4y-PEjuHvAhVXdGAKHQE_BfIYABAAGgJ0bQ&ae=2&ohost=www.google.com&cid=CAASE-RoHXJ0cmXi-lTEXe5CH2fEtHE&sig=AOD64_2jeIcdar4Cak4ya4VqkdlARnUmTA&q&adurl&ved=2ahUKEwiwmN3EjuHvAhXD7GEKHc2VBjQQ0Qx6BAgFEAE">
                Photoshop
              </a>. 
              {' '}<a 
              onMouseOver={refsCard1[1][1]}
              onMouseLeave={refsCard1[1][2]}
              target="_blank" 
              href="https://en.wikipedia.org/wiki/HTML">
                HTML
              </a>, and 
              {' '}<a 
              onMouseOver={refsCard1[2][1]}
              onMouseLeave={refsCard1[2][2]}
              target="_blank" 
              href="https://sass-lang.com/">
                SCSS
              </a> for basics, and 
              {' '}<a 
              onMouseOver={refsCard1[3][1]}
              onMouseLeave={refsCard1[3][2]}
              target="_blank" 
              href="https://reactjs.org/">
                ReactJS
              </a> for DOM Manipulation. The project is then saved in github.
              I used 
              {' '}<a 
              onMouseOver={refsCard1[4][1]}
              onMouseLeave={refsCard1[4][2]}
              target="_blank" 
              href="https://github.com/">
                Git
              </a> for easier updating of the source code and version control. Lastly, 
              {' '}<a 
              onMouseOver={refsCard1[5][1]}
              onMouseLeave={refsCard1[5][2]}
              target="_blank" 
              href="https://vercel.com/">
                Vercel
              </a> serves as the domain server. 
            </div>
            <>
              <SpecItem item="ReactJS"  linkRefa1={refsCard1[3][0][0]} linkRefb1={refsCard1[3][0][1]}/>
              <SpecItem item="Photoshop" linkRefa1={refsCard1[0][0][0]} linkRefb1={refsCard1[0][0][1]}/>
              <SpecItem item="HTML" linkRefa1={refsCard1[1][0][0]} linkRefb1={refsCard1[1][0][1]}/>
              <SpecItem item="SCSS"  linkRefa1={refsCard1[2][0][0]} linkRefb1={refsCard1[2][0][1]}/>
              <SpecItem item="Git"  linkRefa1={refsCard1[4][0][0]} linkRefb1={refsCard1[4][0][1]}/>
              <SpecItem item="Vercel"  linkRefa1={refsCard1[5][0][0]} linkRefb1={refsCard1[5][0][1]}/>
            </>
          </WorksPopUp>


          <WorksCard 
            handleShowPopUp={handleShowPopUp3} 
            cardHoverRef = {hoverRef3}>
            <WorksCardImgBg 
              imgsrc={img3}
              cardHoverRef = {hoverRef3}/>
            <WorksCardHeadText>
              PORTFOLIO
            </WorksCardHeadText>
            <WorksCardSubText>
              (POP-UP WINDOW)
            </WorksCardSubText>
          </WorksCard>
          <WorksPopUp
            showPopUp={showPopUp3}
            setShowPopUp={setShowPopUp3}
            title="PORTFOLIO"
            pageLink="https://jexdls.github.io/">
            <div>
              My previous website portfolio.
            </div>
            <div>
              I created a wireframe using 
              {' '}<a 
              onMouseOver={refsCard1[0][1]}
              onMouseLeave={refsCard1[0][2]}
              target="_blank" 
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj4y-PEjuHvAhVXdGAKHQE_BfIYABAAGgJ0bQ&ae=2&ohost=www.google.com&cid=CAASE-RoHXJ0cmXi-lTEXe5CH2fEtHE&sig=AOD64_2jeIcdar4Cak4ya4VqkdlARnUmTA&q&adurl&ved=2ahUKEwiwmN3EjuHvAhXD7GEKHc2VBjQQ0Qx6BAgFEAE">
                Photoshop
              </a>. 
              {' '}<a 
              onMouseOver={refsCard1[1][1]}
              onMouseLeave={refsCard1[1][2]}
              target="_blank" 
              href="https://en.wikipedia.org/wiki/HTML">
                HTML
              </a>, and 
              {' '}<a 
              onMouseOver={refsCard1[2][1]}
              onMouseLeave={refsCard1[2][2]}
              target="_blank" 
              href="https://sass-lang.com/">
                CSS
              </a> for basics. The project is then saved in github.
              I used 
              {' '}<a 
              onMouseOver={refsCard1[4][1]}
              onMouseLeave={refsCard1[4][2]}
              target="_blank" 
              href="https://github.com/">
                Git
              </a> for easier updating of the source code and version control. And, 
              {' '}<a 
              onMouseOver={refsCard1[4][1]}
              onMouseLeave={refsCard1[4][2]}
              target="_blank" 
              href="https://github.com/">
                GitHub Pages
              </a> is the domain server. 
            </div>
            <>
              <SpecItem item="Photoshop" linkRefa1={refsCard1[0][0][0]} linkRefb1={refsCard1[0][0][1]}/>
              <SpecItem item="HTML" linkRefa1={refsCard1[1][0][0]} linkRefb1={refsCard1[1][0][1]}/>
              <SpecItem item="CSS"  linkRefa1={refsCard1[2][0][0]} linkRefb1={refsCard1[2][0][1]}/>
              <SpecItem item="Git"  linkRefa1={refsCard1[4][0][0]} linkRefb1={refsCard1[4][0][1]}/>
            </>
          </WorksPopUp>


        </WorksList>     
      </div>

    </Container>
    );
}


function WorksList({children}){
    return(
    <div id="workslist" 
      className="d-flex flex-wrap justify-content-center">
      {children}
    </div>
    );
}

function WorksCard({children, setHoverState, cardHoverRef, handleShowPopUp}){
  const[elementPosition, setElementPosition] = useState(true);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-100, currPos.y, window.innerHeight));
  }, [], elementRef);

  const handleHover = ()=>{cardHoverRef.current.className = initialClass.worksCardGlass + " glass_hover"};
  const handleLeave = ()=>{cardHoverRef.current.className = initialClass.worksCardGlass};

  return(
    <div>
      <Grow in={elementPosition}>
        <div 
          onMouseOver={handleHover} 
          onMouseLeave={handleLeave} 
          onClick={handleShowPopUp}
          className = "card m-3 font-mont"
          ref={elementRef}>
          {children}
        </div>
      </Grow>
    </div>
    );
}

function WorksPopUp({showPopUp, setShowPopUp, children, title, pageLink}){
  const handleClosePopUp = () => setShowPopUp(false);
  return (
      <Modal id="works-modal"
        show={showPopUp} 
        onHide={handleClosePopUp}>
        <Modal.Header closeButton>
          <div className="modal-title w-100">
            <div className="m-auto w-auto font-kris">
              {title}  
            </div>
          </div>
        </Modal.Header>
        <div className="wrap d-flex flex-column px-5">
          <div className="first-cat cat-title d-flex flex-column txt-al-cen">
            <div className="line"/>
            <div className="line-text px-4 font-mont">
              DESCRIPTION
            </div>
          </div>
          <div className="description font-lora my-2">
            {children[0]}
          </div>
          <div className="cat-title d-flex flex-column txt-al-cen">
            <div className="line"/>
            <div className="line-text px-4 font-mont">
              TECHNOLOGY USED
            </div>
          </div>
          <div className="grp-icons w-100 d-flex my-4 mx-auto">
            {children[2]}
          </div>
          <div className="description tech-desc font-lora my-2">
                {children[1]}
          </div>

          <a id="visit"
            className="font-mont px-3 py-2 my-3"
            href={pageLink} 
            target="_blank">
              Visit Page >  
          </a>
        </div>
      </Modal>
    );
}

function WorksCardHeadText({children}){
  return(
    <div className = "headtext mx-auto mt-auto txt-al-cen">
      {children}
    </div>
    );
}

function WorksCardSubText({children}){
  return(
    <div className = "subtext mx-auto mb-auto">
      {children}
    </div>
    );
}

function WorksCardImgBg({imgsrc, imgalt, hoverState, cardHoverRef}){
  return(
    <div>
      <img 
        className ="img h-100 w-100" 
        src={imgsrc} 
        alt={imgalt}>
      </img>
      <div ref = {cardHoverRef}
        className = {initialClass.worksCardGlass}>
      </div>
    </div>
    );
}

// DETAILS COMPONENTS
function Details(){
  const[elementPosition, setElementPosition] = useState(true);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-20, currPos.y, window.innerHeight-100));
  }, [], elementRef);

  return(
    <Container id="details"
      className="font-lora">
      <Grow in={elementPosition}>
        <div className = "title"
          ref={elementRef}>{"<details/>"}</div>
      </Grow>
      <DetailsList>
        <DetailsElement spanDesc={"//download pdf"} cusId="details_resume">Résumé</DetailsElement>
        <DetailsElement spanDesc={"//visit"} pageLink="https://www.linkedin.com/in/jexdls"cusId="details_li">LinkedIn</DetailsElement>
        <DetailsElement spanDesc={"//visit"} pageLink="https://www.freecodecamp.org/jexdls" cusId="details_fcc">freeCodeCamp</DetailsElement>
        <DetailsElement spanDesc={"//visit"} pageLink="https://github.com/jexdls" cusId="details_github">GitHub</DetailsElement>
        <DetailsPopUp>
          <DetailsElement spanDesc={"//copy to clipboard"} cusId="details_copy" >Email</DetailsElement>
        </DetailsPopUp>
      </DetailsList>
    </Container>
    );
}

function DetailsList({children}){
  return(
    <div className="">
      {children}      
    </div>
    );
}

function DetailsElement({children, spanDesc,pageLink, cusId}){
  const[elementPosition, setElementPosition] = useState(true);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) =>{
    setElementPosition(isVanishAppear(-20, currPos.y, window.innerHeight-10));
  }, [], elementRef);
  return(
    <Grow in={elementPosition}>
      <a 
        id={cusId}
        className="d-flex flex-row my-n4"
        ref={elementRef}
        href={pageLink}
        target="_blank"
        onClick={ cusId == "details_copy" ? copyToClipboard("jexdelossantos2010@gmail.com") : ""}>
        <div className="details-element font-righ">
          {children}<span className="font-righ">  {spanDesc}</span>
        </div>
      </a>
    </Grow>
    );
}

//POPUP COMPONENTS
function CustomPopUp({children}){
  return(
    <div>
      {children}
    </div>
    );

}

function CustomPopUpTitle({children}){
  return(
    <div>
      {children}
    </div>
    );
}


function copyToClipboard(text){
      const textArea = document.createElement('textarea');
      textArea.value = text;

      const body = document.body;
      if (body != null) {
          body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          body.removeChild(textArea);
      }
  };


function DetailsPopUp({children}) {
  const message ='clickie click';
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [repeat, setRepeat] = useState(0);

  return (
    <>
      <span ref={target} 
        onClick={()=>{
                    setShow(!show)
                    setTimeout(()=>setShow(false), 4000);
                  }}>
              {children}   
      </span>
      <Overlay 
        target={target.current} 
        show={show} 
        placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            copy successful
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}



export default App;
