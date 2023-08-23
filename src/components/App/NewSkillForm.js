import { useState } from 'react'
import './NewSkillForm.css'

export default function NewSkillForm({addSkill}) {

    const [newSkill, setNewSkill] = useState(
        {name:'',
        level: 3}
    )
    
    function handleClick(e){
        e.preventDefault()
        addSkill(newSkill)
        setNewSkill({name:'',level:3})
    }

    function handleChange(e) {
        const newSkillData = {
            ...newSkill,
            [e.target.name]: e.target.value
        }

        setNewSkill(newSkillData)
    }

    return (
        <form className="form" onSubmit={handleClick}>
            <label className="form-label">
                Skill
                <input name="name" value={newSkill.name} onChange={handleChange} type="text" />
            </label>
            <label className="form-label">
                Level
                <select name="level" value={newSkill.level} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}