import {useState} from "react";
const Section =({title,description,isVisible,SetisVisible})=>{
//    const [isVisible,SetisVisible]=useState(false);

return( <div className="instasection">
   
    <h3 className="instatitle">{title}</h3> 
{
    isVisible?<button onClick={()=>SetisVisible(false)} className="underline cursor-pointer">Hide</button>
    :
    <button onClick={()=>SetisVisible(true)} className="underline cursor-pointer">Show</button>
}

{isVisible && <p>{description}</p>}
{/* will only be shown if true */}
</div>
);
}


const Instamart=()=>{
    const [visibleSection,setIsVisibleSection]=useState("about")
   
    return(<div>

    {/* <h1>yoyo</h1>
    <p>conatains 100s of component</p> */}
     <h1 className="instahead">Instamart</h1>

    <Section title={"About Instamart"}
    description="Swiggy Instamart is an online grocery delivery platform launched by Swiggy, a leading food delivery company in India. Instamart offers a wide range of groceries and household essentials that can be ordered through its website or mobile app and delivered to customers' doorsteps within a few hours.
"
SetisVisible={()=> setIsVisibleSection(visibleSection === "about" ? "" : "about")}
    isVisible={visibleSection==="about"}
   />


<Section title={"Team Instamart"}
    description="The platform offers a variety of products such as fresh fruits and vegetables, dairy products, bakery items, packaged food, household essentials, and personal care products from local stores and trusted brands. It operates in multiple cities in India and has tie-ups with local retailers and brands to ensure timely delivery and quality products."
    SetisVisible={()=> setIsVisibleSection(visibleSection === "team" ? "" : "team")}
    isVisible={visibleSection==="team"}
  />

 <Section title={"Careers"}
    description="Swiggy Instamart is an online grocery delivery platform launched by Swiggy, a leading food delivery company in India. Instamart offers a wide range of groceries and household essentials that can be ordered through its website or mobile app and delivered to customers' doorsteps within a few hours.

    The platform offers a variety of products such as fresh fruits and vegetables, dairy products, bakery items, packaged food, household essentials, and personal care products from local stores and trusted brands. It operates in multiple cities in India and has tie-ups with local retailers and brands to ensure timely delivery and quality products."
    SetisVisible={()=> setIsVisibleSection(visibleSection === "career" ? "" : "career")}
    isVisible={visibleSection==="career"}
   
/>
     </div>);
}

export default Instamart;
