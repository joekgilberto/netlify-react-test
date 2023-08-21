import './SkillList.css'
import SkillListItem from './SkillListItem'

export default function SkillList({skills}) {

    const skillsArr = skills.map(s => <SkillListItem skill={s} />)
    return (
        <div className="list">
            {skillsArr}
        </div>
    )
}