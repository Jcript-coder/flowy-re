import {useState} from "react";


const LeftCard=()=>{

    const CloseCard=()=>{
        const handleClick=()=>{
            console.log("I was clicked")
        }
        return(
            <>
                 <div id="closecard">
                <img src="./assets/closeleft.svg" onClick={handleClick}/>
                </div>
                <p id="header">Blocks</p>
            </>
        )
    }

    const SearchBox=()=>{
        return(
            <div id="search">
            <img src="./assets/search.svg"/>
            <input type="text" placeholder="Search blocks"/>
        </div>
        )
    }

    const SearchNav=()=>{
                const [active,setNotActive]=useState("navactive side");
                const [nonActive,setActive]=useState("navdisabled side")
        const ChangeNav=()=>{

            const Triggers=()=>{
                const handleClick=(e)=>{
                    e.stopPropagation();
                    setActive("navactive side");
                }
               return(
                <div id="triggers" className={nonActive} onClick={handleClick}>Triggers</div>
               )
            }

            const Actions=()=>{
                const handleClick=(e)=>{
                    e.stopPropagation();
                    setActive("navactive side");
                }
                return(
                    <div id="actions" className={nonActive} onClick={handleClick}>Actions</div>
                )
            }

            const Loggers=()=>{
                const handleClick=(e)=>{
                    e.stopPropagation();
                    setActive("navactive side");
                }
               return(
                <div id="loggers" className={nonActive} onClick={handleClick}>Loggers</div>
               )
            }
            //console.log("changeNav was clicked");     
            return(
                <>
                    <Triggers />
                    <Actions />
                    <Loggers />
                </>
            )
      
        }
        return(
            <div id="subnav">
            <ChangeNav>
                
                </ChangeNav>
                </div>
        )
    }

    const BlockList=()=>{

        return(
            <div id="blocklist">
            <div className="blockelem create-flowy noselect">
                <input type="hidden" name="blockelemtype" className="blockelemtype" value="1"/>
                <div className="grabme">
                    <img src="assets/grabme.svg"/>
                </div>
                <div className="blockin">       
                    <div className="blockico">
                    <span></span>
                    <img src="../assets/eye.svg"/>
                        </div>
                    <div className="blocktext">      
                        <p className="blocktitle">New visitor</p>
                            <p className="blockdesc">Triggers when somebody visits a specified page</p>        
                        </div>
                    </div>
                </div>
            <div className="blockelem create-flowy noselect">
                <input type="hidden" name="blockelemtype" className="blockelemtype" value="2"/>
                <div className="grabme">
                    <img src="../assets/grabme.svg"/>
                </div>
                <div className="blockin"> 
                    <div className="blockico">
                        <span></span>
                        <img src="../assets/action.svg"/>
                    </div>
                    <div className="blocktext">                   
                        <p className="blocktitle">Action is performed</p>
                        <p className="blockdesc">Triggers when somebody performs a specified action</p>
                    </div>
                </div>
            </div>
            <div className="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" className="blockelemtype" value="3"/>
            <div className="grabme">
                <img src="assets/grabme.svg"/>
            </div>
            <div className="blockin">                   
                <div className="blockico">
                    <span></span>
                <img src="assets/time.svg"/>
                </div>
                <div className="blocktext">                       
                    <p className="blocktitle">Time has passed</p>
                    <p className="blockdesc">Triggers after a specified amount of time</p> 
                </div>
            </div>
        </div>
            <div className="blockelem create-flowy noselect">
        <input type="hidden" name="blockelemtype" className="blockelemtype" value="4"/>
        <div className="grabme"><img src="../assets/grabme.svg"/>
            </div>
        <div className="blockin">                   
            <div className="blockico">
                <span></span>
                <img src="assets/error.svg"/>
            </div>
        <div className="blocktext">                       
            </div>
        </div>
    </div>
        </div>
        )
    }
    return(
    <div>
        <div id="leftcard">
            <CloseCard/>
                <SearchBox />
                <SearchNav />
                <BlockList />
            </div>
        </div>
                                                                   
    );
}



export default LeftCard;

