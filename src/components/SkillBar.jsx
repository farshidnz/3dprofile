import React from "react";

function SkillsBar () {
   return (
       <div className="container">
           <h1 className="title-text">Skills</h1>
           
       <div className="skills-container">
           <div className="column1">
           <div className="skill-box">
               <span className="title">.Net</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Angular</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">NodeJS</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           <div className="skill-box">
               <span className="title">Terraform</span>
               <div className="skill-bar">
                   <span className="skill-per Terraform">
                       <span className="tooltip">85%</span>
                   </span>
               </div>
           </div>
           </div>
           </div>
           <div className="column2">
           <div className="skill-box">
               <span className="title">Devops</span>
               <div className="skill-bar">
                   <span className="skill-per Devops">
                       <span className="tooltip">85%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Golang</span>
               <div className="skill-bar">
                   <span className="skill-per Golang">
                       <span className="tooltip">40%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">AWS & Azure</span>
               <div className="skill-bar">
                   <span className="skill-per Aws">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Python</span>
               <div className="skill-bar">
                   <span className="skill-per Python">
                       <span className="tooltip">35%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Snowflake</span>
               <div className="skill-bar">
                   <span className="skill-per Snowflake">
                       <span className="tooltip">45%</span>
                   </span>
               </div>
           </div>
           </div>
           </div>
       </div>
   )
}

export default SkillsBar;