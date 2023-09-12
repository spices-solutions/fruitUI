import BtnOne from "./code/btnOne.mdx";
import BtnTow from "./code/btnTow.mdx";
import BtnThree from "./code/btnThree.mdx";
import BtnFour from "./code/btnFour.mdx";
import React,{ useEffect } from "react";
import { Rippel } from "./../../fruitUI/dist/js/fruitui.modules";

const Buttons = () => {
  useEffect(() => {
    Rippel()
  },[]);
  return (
    <>
      
      <button className="btn btn-ripple">defuilt</button>{"⠀"}
      <BtnOne />
      <br/>
      <br/>
      <button className="btn primary btn-ripple">primary</button>{"⠀"}
      <button className="btn secondary btn-ripple">secondary</button>{"⠀"}
      <button className="btn success btn-ripple">success</button>{"⠀"}
      <button className="btn info btn-ripple">info</button>{"⠀"}
      <button className="btn orange btn-ripple">orange</button>{"⠀"}
      <button className="btn error btn-ripple">error</button>{"⠀"}
      <button className="btn gray btn-ripple">gray</button>{"⠀"}
      <button className="btn black btn-ripple">black</button>{"⠀"}
      <button className="btn white btn-ripple">white</button>{"⠀"}
      <BtnTow />
      <br/>
      <br/>
      <button className="btn outlined e:primary btn-ripple">primary</button>{"⠀"}
      <button className="btn outlined e:secondary btn-ripple">secondary</button>{"⠀"}
      <button className="btn outlined e:success btn-ripple">success</button>{"⠀"}
      <button className="btn outlined e:info btn-ripple">info</button>{"⠀"}
      <button className="btn outlined e:orange btn-ripple">orange</button>{"⠀"}
      <button className="btn outlined e:error btn-ripple">error</button>{"⠀"}
      <button className="btn outlined e:gray btn-ripple">gray</button>{"⠀"}
      <button className="btn outlined e:black btn-ripple">black</button>{"⠀"}
      <button className="btn outlined e:white btn-ripple">white</button>{"⠀"}
      <BtnThree />
      <br/>
      <br/>
      <button className="btn primary-flat btn-ripple">primary</button>{"⠀"}
      <button className="btn secondary-flat btn-ripple">secondary</button>{"⠀"}
      <button className="btn success-flat btn-ripple">success</button>{"⠀"}
      <button className="btn info-flat btn-ripple">info</button>{"⠀"}
      <button className="btn orange-flat btn-ripple">orange</button>{"⠀"}
      <button className="btn error-flat btn-ripple">error</button>{"⠀"}
      <BtnFour />
      <br/>
      <br/>
    </>
  );
};

export default Buttons