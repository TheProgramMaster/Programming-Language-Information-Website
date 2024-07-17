# Programming Language Information Website

## Description

This is a website the user can execute 
on their local machine to record 
information pertaining to a list of 
programming languages, as well as a
secondary list of interesting facts
relevant to a second list of 
programming languages. This program
is to operate through parallel program
execution by executing two programs via
command line interface on the user's
local machine.

## Tools Used

This website was created using React.js
to design the front-end of this website,
as well as Django to design the backend
of this application. Django was used to
maintain a running list of articles on
two sections of the website. Namely,
this website includes one section that
allows the user to record a list of articles
of programming languages and their relevant
descriptions, as well as a second section
that allows the user to record a list of
articles and interesting facts about them.

NOTE: This web application makes use of
node package manager to operate.
Consequently, you will need to download
and install the latest version of node
package manager to execute this application.
To download and install the latest version
of npm, please visit the following link:

[a link](https://nodejs.org/en)

## Instructions

To execute this program as intended, please
follow these steps.

### Step 1

First download the zip file of this repository
and decompress the relevant .zip file to your
local PC.

### Step 2

Open a command line interface window. Then
change directories into this .zip folder.
From here, change directories once more
into rouleTechWebsite to run the Django 
back-end server on your PC.

<code>python manage.py runserver</code>

You should be able to open the back-end
Django server on your local machine to
determine whether or not the back-end
server is operating as intended. To do
so, open another tab in your current
window. To check the back-end server
for the website pertaining to recording
programming languages and their relevant
description, set your newly-opened URL
to localhost:8000/wel/. To test the backend
of the URL pertaining to recording interesting
facts of a second list of programming languages,
open another tab, and go to localhost:8000/interesting.

### Step 3

Once you have execute the previous step
to operate the backend Django server of
this application, open a second
command-line-interface window, then change
directories to arrive at this .zip folder.
From here, run the following line of code
via the node package manager to run the
frontend of this web application

<code>npm start</code>

If you have node package manager installed
on your local PC, this command execution
should open another tab on your local machine's
window to utilize this website.
