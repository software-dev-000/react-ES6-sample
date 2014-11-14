ReactES6

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

Development:
----------
After install, reopen the sln, and the task "serve" should start automatically.
Otherwise you can run it manually from the taskrunner.

Karma:
----------
To run the karma watch tasks, open a new powershell window.
cd to sln root, then .\src.
run "gulp karma:start"
(normal serve task should be running aswell)
