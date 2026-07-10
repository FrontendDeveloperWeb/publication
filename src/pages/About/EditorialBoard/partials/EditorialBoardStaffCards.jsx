import React from 'react'
import EditorialBoardStaffCard from '../../../../components/Card/EditorialBoardStaffCard'

const EditorialBoardStaffCards = () => {
  return (
    <div>
        <h1>Editorial board</h1>
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/Abdelsadek.png",
            designation: "President of Cairo University",
            name: "Mohamed Sami Abdelsadek"
        }} />
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/saidmahmoud.png",
            designation: "Vice President of Cairo University for Graduate Studies and Research",
            name: "Mahmoud El Said Mahmoud"
        }} />
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/Abdelsadek.png",
            designation: "President of Cairo University",
            name: "Mohamed Sami Abdelsadek"
        }} />
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/saidmahmoud.png",
            designation: "Vice President of Cairo University for Graduate Studies and Research",
            name: "Mahmoud El Said Mahmoud"
        }} />
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/Abdelsadek.png",
            designation: "President of Cairo University",
            name: "Mohamed Sami Abdelsadek"
        }} />
        <EditorialBoardStaffCard staffDetails={{
            img: "../../../../../public/assets/img/saidmahmoud.png",
            designation: "Vice President of Cairo University for Graduate Studies and Research",
            name: "Mahmoud El Said Mahmoud"
        }} />
    </div>
  )
}

export default EditorialBoardStaffCards