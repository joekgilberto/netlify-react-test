
export default function SkillListItem({ skill }) {
    return (
        <div className="list-items">
            <p className="list-name">{skill.name}</p>
            <p className="list-level">LEVEL {skill.level}</p>
        </div>
    )
}