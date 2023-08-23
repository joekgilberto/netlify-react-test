import './SkillList.css'
import SkillListItem from './SkillListItem'

export default function SkillList({skills}) {

    const skillsArr = skills.map(s => <SkillListItem skill={s} key={s.name.slice(0,3)} />)
    return (
        <div className="list">
            {skillsArr}
        </div>
    )
}