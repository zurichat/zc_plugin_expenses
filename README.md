# zc_expenses plugin

### Creators:

HNGi8 Team Grange

### About

The Zuri expenses plugin hosted [here](http://expenses.zuri.chat/) is a plugin that allows users to create and publish expense list which can be viewed by everyone in the organisation

### Resources

1. [This](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714) is the link to the Design file
2. Our repo the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git)
3. The [live server](http://expenses.zuri.chat/)

## Instructions

### Instruction for backend endpoints creators
1. Please take note that all plugins should follow the route <pluginurl>/api/v1/<endpoint>
2. After writing an api document it properly and make it available on <pluginurl>/docs/v1
3. For each of the api created, create a test that will call it and validate that it is working. The test has to be online and hosted via <pluginurl>/test/<endpoint>. Each test is a different task.

### Setting up your environment

1. Make a fork of the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git)
2. Clone the forked repo to your system
3. Add a remote url pointing at the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git) for fetches

### Getting Tasks to work on

1. To get a task to work on, search for any unassigned issue on your preferred track(i.e design, frontend or backend) on the issues tab
2. Take note of the issue number and indicate interest to work on the issue on Team grange slack channel
3. If approved the issue will be assigned to you
4. Try to finish the issue as fast as possible to avoid reassignment
5. When done submit task

### Submitting a task

1. After working on a task before committing, fetch from the [zc_plugin_expenses repo](https://github.com/zurichat/zc_plugin_expenses.git) to make sure your work is synced with others
2. After commiting make a pull request
3. In the title field write the team name i.e Team Grange, a very brief descripton of the work done and also the number of the issues you worked on
4. Make the pull request to the [zc_plugin_expenses](https://github.com/zurichat/zc_plugin_expenses.git) repo
5. locate the issue you worked on and on the descrition field write the team name i.e Team Grange, a very brief descripton of the work done
6. Also on the description field add a link to your work on the [live server](http://expenses.zuri.chat/) for developers and a [link to your design file](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714) for designers
7. Add a link to your pull request
8. And finally include a snapshot of your work on the [live server](http://expenses.zuri.chat/) or [design file](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714)
9. Submit the link to your issue on the slack #issue-review page tagging **one** of our mentors i.e (@Loy, @caculuz or @twanitoria) **and** the **one** team reviewer @Ammeromi or I @kelanialiyu

## Coding Guidelines

1. Create new files only when necessary
2. Try to make all work look excactly like the [designs](https://www.figma.com/file/mizfCMNkiGxwfRgMkRJech/Zuri-Expenses?node-id=59%3A714)
3. Before writing any code on any file write a comment including your slack username and task issue number with start
4. Then your code
5. And a comment including your slack username and task issue number with end keywords
   eg

````javascript


```javascript
//@kelanialiyu issue #123

function fancyAlert(arg) {
    console.log("Team Grange");
}

//@kelanialiyu issue #123
````

**_GOOD LUCK AND HAPPY CODING_**
