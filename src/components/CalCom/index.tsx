"use client"
import Cal from "@calcom/embed-react";
import SectionTitle from "../Common/SectionTitle";


const CalScheduler = ()=>{
  return (
    <div className="flex justify-center flex-col text-center">
          <SectionTitle
            title="Schedule A call with us Now!"
            paragraph="Let's discuss the problem you want us to solve. Select a date and schedule a call Now"
            center
          />      
          <Cal calLink="bytegrove/service"></Cal>
    </div>
  )
}

export default CalScheduler