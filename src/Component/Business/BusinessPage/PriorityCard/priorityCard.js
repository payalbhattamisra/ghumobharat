import React from 'react'
import './priorityCard.css'
export default function PriorityCard(props) {
  return (
    <>
      <div className="containerP">
        <span className="pr_no">{props.num}</span>
        <span className="pr_head">{props.head}</span>
        <span className="pr_des">{props.des}</span>
      </div>
    </>
  )
}
