# App Layout Redesign

Pick a prior lab you have done over last few weeks and redo the lab **starting with the design and layout**.
* Make sure the app you choose has some at least a few differnt app routes. 
* Ideally also has some lists of data.

## Static Content

Focus on layout design by using static content or simple hard-coded data. You want enough to validate your 
design, but you don't want to get sucked into react, redux, state manangement, backend server, etc., etc.

## Reponsive

Your layout design needs to be mindful of device size. It should work well on a narrow phone as well as desktop.

## CSS Structure

1. Primary site-wide CSS goes in `main.css` which is imported by `index.js`
2. Component specific CSS (including `App.js`!) goes in `Component.css`, using `:local(.myclass)` and `className={styles.myclass}`

## Overall layout with CSS Grid

Format the overall structure of your app using CSS grid. Include a header and footer.

## Route Pages

Work through each route page and its components, and use CSS Grid and Flexbox were it makes sense. 
Any list compoent (`data.map`) is a likely candidate for some layout style love!

## Rubric **10pts**

* Overall App CSS Grid **3pts**
* Use of local component css **1pt**
* Responsiveness **3pts**
* Grid and Flexbox on route pages and components **3pts**
