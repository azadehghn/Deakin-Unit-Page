
# SIT753 – Git Version Control (Sprint 1): (DRAFT)

This guide walks you through the entire Git Version Control Sprint 1 activity for SIT753, designed for team members new to Git, GitHub, and version control practices.

---

## 📘 1. Overview

Version Control helps developers collaborate effectively. In this sprint, you will work in a team of three to build a sample Deakin Unit Page using Git and GitHub, focusing on teamwork and version control rather than code complexity.

---

## 👥 2. Team Roles

Form a group of 3 and assign roles:
- **Team Leader (TL)** – Sets up the project, adds collaborators.
- **UI Designer (UI)** – Designs the user interface.
- **Front-End Developer (FD)** – Builds and styles front-end components.

---

## 🛠️ 3. Initial Setup


## 🔗 4. Forking and Cloning the Repository

### 👤 TEAM LEADER Tasks: (1/4)
1. Go to: [https://github.com/seffy/Deakin-Unit-Page-Group18.git]
2. Click **Fork** (creates a copy in your GitHub account)
3. Go to **Settings > Collaborators**
4. Add UI and FD GitHub usernames

### All MEMBERS
1. Copy the HTTPS URL of the forked repo
2. In Terminal, navigate to your code folder
3. Run:
```bash
git clone https://github.com/seffy/Deakin-Unit-Page-Group18.git
```

4. Enter the folder:
```bash
cd Deakin-Unit-Page-Group18
open index.html
```

---

## 🎨 5. UI DESIGNER Tasks: (1/3)

### a. Create a new branch:
```bash
git checkout -b add-header
```

### b. Add Header and Logo
Insert this inside `<body>`:
```html
<div>
  <img src="logo.svg" alt="Deakin" width="200" height="210">
</div>
```

Save and Open the index file to see the changes.
```bash
open index.html
```

### c. Style it in `main.css`:
```css
div {
  background-color: darkcyan;
  text-align: right;
}
```
Save and Open the index file to see the changes.
```bash
open index.html
```

To view the changes that will be made use git's diff. You can get the changes of all files in the project or for a single file.

```bash
git diff
```

OR 

```bash
git diff index.html
```


### d. Save and commit:
```bash
git add .
git commit -m "add header and logo"
git push -u origin add-header
```

---

## 💻 6. FRONT-END DEVELOPER Tasks: (1/3)

### a. Create a new branch:
```bash
git checkout -b add-table
```

### b. Add Unit Details Table in `index.html`:
Add below the header:
```html
<h2>Unit details</h2>
<table>
  <tr><td>Year:</td><td>2023 unit information</td></tr>
  <tr><td>Enrolment modes:</td><td>Trimester 1...</td></tr>
  <tr><td>Credit point(s):</td><td>1</td></tr>
  <tr><td>Unit Chair:</td><td>Azadeh Ghari Neiat</td></tr>
</table>
```

### c. Style the table in `main.css`:
```css
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:nth-child(odd) { background-color: #f2f2f2; }
```

Save and Open the index file to see the changes.
```bash
open index.html
```

To view the changes that will be made use git's diff. You can get the changes of all files in the project or for a single file.

```bash
git diff
```

OR 

```bash
git diff index.html
```


### d. Save and commit:
```bash
git add .
git commit -m "add table"
git push -u origin add-table
```

---

## 🧑‍💼 7. TEAM LEADER Tasks: (2/3)

### a. Create a new branch:
```bash
git checkout -b add-unit-content
```

### b. Add paragraph and fee link to `index.html`:
```html
<h3>Content</h3>
<p>To be successful IT graduates need to understand the use of industry tools and practices, the ways these tools work and connect together, and the underlying professional, ethical, and teamwork knowledge and skills needed to put these into practice in a professional manner.</p>
<a href="https://www.deakin.edu.au/students/enrolment-and-fees/fees">Current students</a>
```

Save and Open the index file to see the changes.
```bash
open index.html
```

To view the changes that will be made use git's diff. You can get the changes of all files in the project or for a single file.

```bash
git diff
```

OR 

```bash
git diff index.html
```


### c. Save and commit:
```bash
git add .
git commit -m "add unit content and fee link"
git push -u origin add-unit-content
```

---



## 🎨 8. UI DESIGNER Tasks: (2/3)

### a. Checkout

```bash
git checkout main
```



### b. Pull any changes

```bash
git pull
```

### c. Now you can merge your branch into main. This will take all of your changes and apply them to the main branch.

```bash
git merge add-header
```

### d. Check Status and Push
```bash
git status
git push
```

## 💻 9. FRONT-END DEVELOPER Tasks: (2/3)

### a. Switch to `main` branch:

```bash
git checkout main
git pull
```

### b. Merge your feature branch:
```bash
git merge add-table
```

### c. Save and Open the index file to see the changes.
```bash
open index.html
```

### d. Push changes:
```bash
git push
```



## 👤 9. TEAM LEADER Tasks: (3/4)

### a. Switch to `main` branch:

```bash
git checkout main
git pull
```

### b. Merge your feature branch:
```bash
git merge add-unit-content
```

### c. Save and Open the index file to see the changes.
```bash
open index.html
```

### d. Push changes:
```bash
git push
```


---

## 10. Additional Tasks

## 🎨 UI DESIGNER Tasks: (3/3)

###  Style it in `main.css`:
```css
div {
  background-color: darkcyan;
  text-align: right;
}
```

## 💻 FRONT-END DEVELOPER Tasks: (3/3)

```css
<tr>
   <td> Scheduled Learning Activities:</td>
   <td> 1 x 3 hour active class per week, weekly drop in support.</td>
</tr>
```

## 👤 TEAM LEADER Tasks: (4/4)

### Add Hurdle requirement (before Current Students link )

```bash
<h3>Hurdle requirement</h3>
<p>
To be eligible to obtain a pass in this unit, students must meet certain milestones as part of the portfolio.
</p>
```

## ✅ Submission

Submit the following on OnTrack:
- Screenshot: GitHub > Insights > Contributors
- Screenshot: GitHub > Insights > Network
- Optional log file:
```bash
git log --pretty=format:"%h - %an - %ad - %s" --date=short > group_log.txt
```
- 
---



