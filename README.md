# zc_expenses plungin

### Creators:
 HNG8 Team Grange
 
### About
 The Zuri expenses plugin hosted [here](http://expenses.zuri.chat/) is a plugin that allows users to create and publish expense list which can be viewed by everyone in the organisation
 
### Files
1. [This](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714) is the link to the Design file

## Instructions

### Setting up your environment
1. make a fork of the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git)
2. clone the forked repo to your system
3. add a remote url pointing at the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git) for fetches

### Getting Tasks to work on
1. To get a task to work on, search for any unassigned issue on your preferred track(i.e design, frontend or backend)  on the issues tab
2. take note of the issue number and indicate interest to work on the issue on the slack channel
3. if approved the issue will be assigned to you
4. try to finish the issue as fast as possible to avoid reassignment
5. when done submit task

### Submitting a task
1. after working on a task before committing, fetch from the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git) to make sure your work is synced with ohers
2. after commitng make a pull request 
3. in the title field write a very very brief descripton of the work done and also the number of the issues you worked on 
4. on the description field add a link to your work on the [live server](http://expenses.zuri.chat/) for developer and a [link to your design file](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714) for designer
5. also include a snapshot of your work on the [live server](http://expenses.zuri.chat/) or [design file](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714)
6. make the pull request to the [zc_plugin_expenses](https://github.com/zurichat/zc_plugin_expenses.git) repo
7. submit the link to your pull request on the  #issue-review page tagging one of our mentors i.e(@Loy, @caculuz or @twanitoria) and the team reviewer @Ammeromi or I @kelanialiyu 

## Coding Guidelines
1. create new files only when necessary
2. before writing any code on any file write a comment including your slack username and task issue number with start 
3. then your code 
4. and a comment including your slack username and task issue number withend keywords 
eg
```javascript

//@kelanialiyu issue #123
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
//@kelanialiyu issue #123
```
***GOOD LUCK AND HAPPY CODING***
