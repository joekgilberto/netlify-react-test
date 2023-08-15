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

### This lab combined with Parts 2, 3 & 4 is a deliverable

## Deliverable Submission

Complete a pull request for this repository. Each part of this lab will require 1 or more commits; following best git practices, for every major step add one commit. 

Your final commit for each part should follow this pattern: 
`git add . && git commit -m 'part XXX dev skills complete'`

---

# React Dev Skills Lab - Part 2

## Intro

Now that you know quite a bit about JSX, props and how to style React Elements, time to apply your new knowledge by continuing to build the React Dev Skills app.

## Exercises

1. Make sure you stage and commit - `"part 1 dev skills complete"` before begining part 2.

2. Add a `skills` array like the following above `<App>`:

    ```jsx
    const skills = [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "Python", level: 2 },
    ];

    export default function App() {
    ```

3. Refactor the code so that the renders the "skill" objects similar to the following:

    <img src="https://i.imgur.com/z1ZMjrG.png">

    > Feel free to style different colors, however, layout should be similar.


## Hints

<details><summary>Updated styles.css</summary>
<p>

```css
.App {
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.padding-0 {
  padding: 0;
}

.teal-text {
  color: teal;
}
```

</p>
</details>

<details><summary>Example SkillListItem.css</summary>
<p>

```css
.SkillListItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  padding: 0.2rem 0.6rem;
  border: 0.2rem solid coral;
  border-radius: 0.3rem;
  list-style: none;
  color: teal;
  font-size: 1rem;
  font-weight: bold;
}

.SkillListItem > .level {
  margin-left: 5rem;
  padding: 0.3rem 0.8rem;
  color: white;
  background-color: teal;
  border-radius: 0.8rem;
  font-size: 0.8rem;
  font-weight: normal;
}
```

</p>
</details>

<details><summary>Example NewSkillForm.css</summary>
<p>

```css
.NewSkillForm {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: teal;
  text-align: left;
  border: 0.2rem solid coral;
  border-radius: 0.3rem;
  padding: 1rem;
}

.NewSkillForm > input,
.NewSkillForm > select {
  font-size: 1rem;
  font-weight: bold;
  color: teal;
  padding: 0.2rem;
  border: 0.2rem solid coral;
  border-radius: 0.3rem;
  outline: none;
}

.NewSkillForm > button {
  grid-column: span 2;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding: 0.2rem;
  background-color: teal;
  border: 0.2rem solid teal;
  border-radius: 0.3rem;
}
```

</p>
</details>

---

# React Dev Skills Lab - Part 3

## Intro

This lab will simply ask you to use the `useState` hook to add state to the React Dev Skills app.

Open your "react-dev-skills" and follow the instructions below. Make sure you commit - `"part 2 dev skills complete"` before begining part 3.

Updating that state will be an exercise in part 4.

## Exercises

1. Make sure you stage and commit - `"part 1 dev skills complete"` before begining part 2.

2. Use the `useState` hook to add a state value named `skills`.

3. Be sure to name the setter function according to the convention discussed in the lesson.

4. Initialize the state using the same array of skill objects used in part 2.

5. When finished, the skills should continue to be displayed without error:

    <img src="https://i.imgur.com/z1ZMjrG.png">

---

# React Dev Skills Lab - Part 4

## Intro

This lab provides an opportunity to practice:

- Using the `value` and `onChange` props to implement controlled inputs.
- Implementing event handlers.
- Updating state by replacing objects instead of mutating them.
- Passing a method from a parent component to a child component via a prop.

##### This lab, combined with Parts 1, 2 & 3 is a Deliverable


## Exercises

1. Open your "react-dev-skills" repository and follow the instructions below. Make sure you commit - `"part 3 dev skills complete"` before begining part 4.

2. Add state to the existing `<NewSkillForm>` component that will be used to manage the form's state. The state should be initialized as an object with two properties: `name` and `level` - by design, these properties match the names of the properties of the skill objects held in state (App.js). The `name` property should be initialized to an empty string and the `level` property should be initialized to a number of `3`.

3. Add `value` props to each `<option>` tag and assign the **numbers** 1 thru 5 like this:

    ```jsx
    <option value={1}>1</option>
    ```
    > Remember, unlike attributes in HTML which always hold strings, props in React can hold any type of data.

4. Following the steps in the lesson, make the `<input>` and `<select>` controlled inputs that update the form's state you created in step 2.

    > Hint:  As in the lesson, use computed property names so that a single onChange handler can be used for any number of inputs.

5. Make the form's button a submit button and add an `onSubmit` prop to the `<form>`.  Assign an event handler to `onSubmit` and ensure that the form does not trigger a full-page refresh when the button is clicked!

6. Following the steps in the lesson, code the app so that when the [ADD SKILL] button is clicked, the new Dev Skill is added to the `skills` state held in **App.js**. The app should re-render and display the new skill.

    > Hint: App.js needs a function that will update the state and that function will need to be passed to the `<NewSkillForm>` component.

7. For a better UX, after the new skill is added, the form should reset to the same values used to initialized the state.

## This lab combined with Parts 1, 2 & 3 is a Deliverable
