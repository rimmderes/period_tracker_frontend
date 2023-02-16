import starsimage from "./stars.png";
import backgroundmoonimage from "./backgroundmoon.avif";
import mountains_behindimage from "./mountains_behind.png";
import mountains_frontimage from "./mountains_front.png";
import moonimage from "./moon.png";
// import logo from "./logo.png"
import { useLayoutEffect } from "react";

const MainPageContainer = () => {
    
     let stars= document.getElementById('stars');
            let moon= document.getElementById('moon');
            let mountains_behind= document.getElementById('mountains_behind');
            let text= document.getElementById('text');
            let btn= document.getElementById('btn');
            let mountains_front= document.getElementById('mountains_front');
            let header = document.querySelector('header');

            const handleScroll = () => {
                let value = window.scrollY;
                stars.style.left = value *0.25 + 'px';
                console.log(stars);
                moon.style.top = value *1.05 + 'px';
                mountains_behind.style.top = value *0.5 + 'px';
                mountains_front.style.top = value *0 + 'px';
                text.style.marginRight = value *4 + 'px';
                text.style.marginTop = value * 1.5 + 'px';
                btn.style.marginTop = value * 1.5 + 'px';
                header.style.top = value *0.5 +'px';
            }

            useLayoutEffect(() => {

            window.addEventListener('scroll', handleScroll)

            
                // returned function will be called on component unmount
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                }
              }, []);
              

    return ( 
        <>
        <section className="bodymain" >
                <img src={starsimage} id="stars" />
                <img src={moonimage} id="moon" />
                <img src={mountains_behindimage} id="mountain_behind" />
                <h2 id="text">MyMoon</h2>
                <a href="#sec" id="btn">Explore</a>
                <img src={mountains_frontimage} id="mountain_front" />
            </section>
            <div className="sec" id="sec">
                <h2>Understand the Menstration Cycle Here</h2>
<p>One of the most obvious reasons period education is important for everyone regardless of gender is to gain a scientific understanding of how bodies work. Getting to grips with what the menstrual cycle is and knowing the implications of it. Understanding fertility, pregnancy and periods, will normalise what these are and what they mean. Teaching boys how periods and the menstrual cycle works helps them better understand the importance and practicalities of safe sex and contraception, which could help prevent unwanted pregnancies when they are older.

</p>

           </div>
           </>
     );
}
 
export default MainPageContainer;