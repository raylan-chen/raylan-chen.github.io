# Git初探


**下载 Git**


**全局设置**

```bash
git config --global user.name
git config --global user.email
```


**生成密钥**

```bash
# 检查
ls -al ~/.ssh
# 生成，-t 密钥类型，-C 添加一个标签 通常为邮箱
ssh-keygen -t ed25519 -C "your_email@example.com"
```

**启动ssh agent，并添加密钥**

```bash
# 启动
eval "$(ssh-agent -s)"
# 添加密钥
ssh-add ~/.ssh/私钥名字
```

**查看公钥**

Git 生成的 SSH 公钥通常位于用户的主目录下的 `.ssh` 目录中。具体路径为：

- Linux 和 macOS: `~/.ssh/id_xxx.pub`
- Windows: `C:\Users\<YourUsername>\.ssh\id_xxx.pub`

**将公钥添加到 gitee.com / github.com**


**测试连接**

```bash
ssh -T git@gitee.com
(记得输入'yes')
```


**创建远程仓库**


**关联本地仓库**

``` bash
# 查看已关联信息
git remote -v
# 关联
git remote add <远程名称> git@gitee.com:用户名/仓库
# 删除
git remote rm <远程名称>
```


**Git基本使用**

``` bash
# 将工作区文件添加到暂存区
git add
	# 添加全部更改
	git add .
	git add *
# 提交暂存区到本地仓库
git commit -m "文件更改的描述"
# 提交本地仓库到远程仓库
git push <远程名称>(git remote -v) <本地分支>
	# 强制推送(慎用！！！)
	git push <远程名称> <本地分支> --force
# 拉取远程仓库到本地仓库
git pull <远程名称> <本地分支>
# 查看提交记录
git log
# 命令的合并使用
git add . && git commit -m "修改标记" && git push <远程仓库> <本地仓库分支>
```


**Git分支**

```bash
# 创建分支
git branch branch_name
# 切换分支
git checkout branch_name
# 创建并切换新分支
git checkout -b new_branch_name
# 查看所有分支
git branch
# 查看 本地分支 和 远程分支
git branch -a
# 合并分支
git merge branch_name
# 删除分支(-d 改为 -D 强制删除)
git branch -d branch_name

```


**Git回退**

```bash
# 软重置（保留更改） 
# 软重置会将 提交记录 移回到指定的提交，但是 保留 工作目录 中的更改：
# HEAD~1 表示上一个提交。你也可以使用 HEAD~2、HEAD~3 等来撤销更早的提交
git reset --soft HEAD~1
# 硬重置（丢弃更改）
# 硬重置会将 提交记录 和 工作目录 都回滚到指定的提交，这将丢弃所有未提交的更改：
git reset --hard HEAD~1

# 如果你需要保留提交记录但 撤销某次提交 的更改，可以使用 git revert
git revert <commit-hash>
```


**git push**

[菜鸟教程 git push命令](https://www.runoob.com/git/git-push.html)

```bash
git push <远程主机名> <本地分支名>:<远程分支名>
# 如果本地分支名与远程分支名相同，则可以省略冒号
git push <远程主机名> <本地分支名>
```

-u

```bash
# -u 或 --set-upstream: 这个选项用于告诉 Git 将本地分支与远程分支关联起来。这意味着在以后的推送和拉取操作中，您可以仅使用 git push 或 git pull，而不需要每次都指定远程和分支名
git push -u
# 解除用 git push -u 建立的关联
# 在该分支上，可以省略 branch_name
git branch --unset-upstream branch_name
```

**git clone**

```bash
# 基本使用
git clone <远程仓库URL>
# 克隆整个仓库，包括所有分支，克隆后，工作目录会处于指定的分支
git clone -b <分支名> <远程仓库URL>
# 只获取指定的分支
git clone -b <分支名> --single-branch <远程仓库URL>
# 仅克隆最近的提交
git clone --depth 1 <远程仓库URL>

# 指定远程名称，git clone的远程名称默认为 origin
git clone <远程仓库URL> --origin <远程名称>
# 指定要创建的本地仓库名称
git clone <远程仓库URL> <本地仓库名称>
```



**注意点**

* Git只能跟踪文件，而不能跟踪空目录
