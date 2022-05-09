# Rick and Morty characters list

    Simple app that posts info about Rick and Morty characters
    - [DEMO](https://mtctxd.github.io/rick-and-morty-character-table/)

## Technologies i used

    - typescript
    - react
    - redux-toolkit
    - scss
    - uuid
    - react-select
    - vite

### Dependencies

- Node v12.16.3 and higher
- NPM v6.14.4 and higher

### Installing

- Fork and clone this repository
- Run `npm install` in your terminal
- Run `npm run dev`

## Thoughts

    - maybe it would be better if I store checked characters separately
    - process and store characters as objects with id's
    - should use mapping technique on filterOptions type
    - should use styled either styled components or css modules next time

## issues / todos

- [x] search
- [x] options
- [x] edits
- [x] sort in table
- [ ] pagination
  - [ ] next and prev buttons only work when clicking directly on symbols
- [x] hover on inputs
- [x] cleaner useGetAllCharacter
- [x] some variable names are too long
  - [x]changePreparedCharacterList
- [x] Next time I should think about making Characters list as object where key will be id to this character

## Q&A
Q: Why you using sass if you dont use variables?
A: Why I dod not used scss variables? Because after compiling this variable would turn into just ready property, but if i type like native css property, it would be using like native property in the browser.
So, why i did use scss in the first place? Nesting....
