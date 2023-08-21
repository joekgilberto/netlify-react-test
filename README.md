<img src="https://i.imgur.com/pg98OTd.png">

# React Dev Skills Lab - Part 1

## Intro

Now that you've learned a bit about components in React, let's practice defining and rendering a few more.

##### This lab, combined with Parts 2, 3 & 4 is a Deliverable

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _React Intro & Components_ lesson.

Fork and clone the repository provided by your instructional team.

Code the app so that it renders the following UI:

<img src="https://i.imgur.com/a1YSt4R.png">

Using the following component hierarchy:

<img src="https://i.imgur.com/Z7yRF8b.png">

### Legend

- React Elements are outlined in blue.
- The components are as follows:

  | Component | Renders |
  |---|---|
  | `<App>` | `<h1>`<br>`<SkillList>`<br>`<hr>`<br>`<NewSkillForm>` |
  | `<SkillList>` | `<ul>`<br>`<SkillListItem>` x 3 |
  | `<SkillListItem>` | `<li>` with "SkillListItem" as its content |
  | `<NewSkillForm>` | `<form>` |
  | `<form>` in `<NewSkillForm>`  | `<label>` with "Skill" and `<input>` as its content<br>`<label>` with "Level" and `<select>` as its content<br>`<button>` with "ADD SKILL" as its content |
  | `<select>` in<br>`<form>` above | `<option>` x 5 with content of "1" thru "5"` |


---

### This lab combined with Parts 2, 3 & 4 is a deliverable

## Deliverable Submission

Complete a pull request for this lab repository. Each part of this lab will require 1 or more commits; following best git practices, for every major step add one commit. 

Your final commit for each part should follow this pattern: 
`git add . && git commit -m 'part XXX dev skills complete'`

## Continue to other labs
- [Part 1](./README.md)
- [Part 2](./docs/dev-skills-part2.md) 
- [Part 3](./docs/dev-skills-part3.md) 
- [Part 4](./docs/dev-skills-part4.md) 
