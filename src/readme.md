# ReactES6

A web project for working with react js in es6
uses gulp and browser-sync for frontend building, 6to5 for es6 support

Install:
---------
1. Setup IIS Site
	create new website "ReactES6", pointing to src folder
	add binding "local.reactes6"
	add local.reactes6 to hosts file

2. Install nodejs: 
	go to: http://nodejs.org/download

3. Install gulp:
	run "npm install -g gulp"

4. Install node package
	cd .\src from sln root
	run "npm install"

5. Install taskrunner
	https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708

6. Install growl
	http://www.growlforwindows.com/gfw/

7. Build solution in Visual Studio

Development:
----------
After install, reopen the sln, and the task "serve" should start automatically.
Otherwise you can run it manually from the taskrunner or powershell (cd to src and run "gulp serve")

Karma:
----------
To run the karma watch tasks, open a new powershell window.
cd to sln root, then .\src.
run "gulp karma:start"
(normal serve task should be running aswell)
