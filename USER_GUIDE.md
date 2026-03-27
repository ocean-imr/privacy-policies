![Header](images/public/header.png)

# Ocean Tracer – User Guide

---

## 1. Overview

This app allows you to:
- Scan and manage pipe data  
- Create structured tallies  
- Sync data with the cloud backend  

---

## 2. Getting Started

### Login

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

When opening the app, you must log in using your company account via Microsoft Entra ID.

**Steps:**
1. Open the app  
2. Sign in with your company credentials  
3. Complete authentication

</div>
<img src="images/guide/login.png" alt="Login Page" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

## 3. Home Screen

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

After login, you will land on the main screen.

**Available options:**
- **Tally** – Create and manage tallies  
- **Pipe Information** – View pipe data  
- **Settings** – App configuration

</div>
<img src="images/guide/homepage.png" alt="Homepage" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

## 4. Settings

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

Open settings from the top corner.

**Options:**
- **Language**  
  Switch between English and Norwegian  

- **Sync**  
  Connects to the backend and enables:
  - Data upload  
  - Data retrieval  
  - Access to pipe documentation  

**Important:**  
If the cloud icon is **green**, the app is connected to the backend.

</div>
<img src="images/guide/settings.png" alt="Settings Menu" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

## 5. Pipe Information

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

Use this section to retrieve detailed pipe data.

**Steps:**
1. Open **Pipe Information**  
2. Scan or manually enter a pipe  
3. View available data  

**Data Sheet:**
- Press **"Data Sheet"** to open full documentation  
- Requires active sync (connection must be green)

</div>
<img src="images/guide/pipe-info.png" alt="Pipe Information" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

## 6. Tally (Main Function)

This is the primary workflow of the app.

---

### 6.1 Create a Tally

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

1. Press **Tally**  
2. Enter:
   - Booking reference  
   - First row amount  
3. Confirm to create the tally

</div>
<img src="images/guide/tally-input.png" alt="Tally Input" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

### 6.2 Add Pipes to a Row

- Scan pipes to fill the row  
- Continue until the row is complete  

<br>
<br>

---

### 6.3 Add a New Row

- After completing a row:
  1. Add a new row  
  2. Set the required row length  

<br>
<br>

---

### 6.4 Fix Missing or Incorrect Input

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

If a pipe is missing or misplaced:
- Press **"Set Joint"**  
- Scan the pipe into the correct position

</div>
<img src="images/guide/set-joint.png" alt="Set Joint" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

### 6.5 Manage Tallies

Use the top header to:
- Switch between active tallies  
- Delete a tally  

<br>
<br>

---

### 6.6 Manage Rows

Use the row header to:
- Switch between rows  
- Delete a row  

<br>
<br>

---

### 6.7 Edit Pipe Data

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

- Press the gear icon on a pipe row  
- Edit data or add comments

</div>
<img src="images/guide/edit-pipe.png" alt="Edit Pipe" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

### 6.8 Complete a Tally

<div style="display: flex; align-items: center; margin-bottom: 20px;">
<div style="flex: 1;">

1. Press **"Tally Complete"**  
2. An Excel report is generated

</div>
<img src="images/guide/complete-tally.png" alt="Complete Tally" height="400" style="margin-left: 20px; max-width: 300px; object-fit: contain;">
</div>

<br>
<br>

---

## 7. Sync Status (Critical)

Sync status is visible:
- In **Settings**  
- In the **Tally page header**  
- In the **Pipe Information header**  

**Status meaning:**
- 🟢 Green = Connected to backend  
- 🔴 Not connected = Data may not be saved or updated  

---

## 8. Best Practices

- Ensure sync is **green** before:
  - Accessing data sheets  
  - Expecting data to be saved  
- Verify all rows before completing a tally
- Use **Set Joint** to correct mistakes
- A tally cannot be completed until required data is valid

---

![Footer](images/public/footer.png)