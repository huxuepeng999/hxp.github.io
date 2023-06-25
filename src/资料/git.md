
## git 常用命令

### 官网  https://git-scm.com/docs/git

合并master代码 git merge master

更改以master为基线 git rebase master


提交暂存区到仓库区  git commit -m [message]

### 分支 
列出所有本地分支    git branch
列出所有远程分支    git branch -r

切换到指定分支，并更新工作区    git checkout [branch-name]
新建一个分支，并切换到该分支    git checkout -b [branch]

选择一个commit，合并进当前分支  git cherry-pick [commit]

删除分支    git branch -d [branch-name]


### 其他
备份当前工作区的内容    git stash
从Git栈中读取最近一次保存的内容，恢复工作区的相关内容   git stash pop
清空Git栈    git stash clear


### git push提交完数据后后悔了怎么办？

写在前面的话重要：删除上次提交后本地和远程仓库的数据都将删除，所以删除上次提交前，记得备份备份备份数据！！！    <br>

1.直接删除上次提交，使用reset命令       <br>

git reset --hard HEAD^      <br>
git push origin master -f       <br>