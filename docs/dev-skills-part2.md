<img src="https://i.imgur.com/pg98OTd.png">

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

### This lab combined with Parts 1, 2 & 3 is a Deliverable

## Deliverable Submission

Complete a pull request for this lab repository, if you have not already made one. Each part of this lab will require 1 or more commits; following best git practices, for every major step add one commit. 

Your final commit for each part should follow this pattern: 
`git add . && git commit -m 'part XXX dev skills complete'`

## Return to other labs
- [Part 1](../README.md)
- [Part 2](./dev-skills-part2.md) 
- [Part 3](./dev-skills-part3.md) 
- [Part 4](./dev-skills-part4.md) 