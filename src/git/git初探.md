# Git初探

---

**下载 Git**

**全局设置**

```bash
git config --global user.name
git config --global user.email
```

**生成密钥**

```bash
#检查
ls -al ~/.ssh
#生成，-t 密钥类型，-C 添加一个标签 通常为邮箱
ssh-keygen -t ed25519 -C "your_email@example.com"

```

**启动ssh agent，并添加密钥**

```bash
#启动
eval "$(ssh-agent -s)"
#添加密钥
ssh-add ~/.ssh/私钥名字
```

**查看公钥，将公钥添加到 gitee.com / github.com**

**测试连接**

```bash
ssh -T git@gitee.com
(记得输入'yes')
```

**创建远程仓库**

**关联本地仓库**

``` bash
#查看已关联信息
git remote -v
#关联
git remote add 标签名 git@gitee.com:用户名/仓库
#删除
git remote rm 标签名
```

**Git基本使用**

``` bash
#将工作区文件添加到暂存区
git add
	#添加全部更改
	git add .
	git add *
#提交暂存区到本地仓库
git commit -m "文件更改的描述"
#提交本地仓库到远程仓库
git push 远程标记(git remote -v) 本地主分支
	#强制推送(慎用！！！)
	git push 远程标记 本地主分支 --force
#拉取远程仓库到本地仓库
git pull 远程标记 本地主分支
#查看提交记录
git log
#命令的合并使用
git add . && git commit -m "修改标记" && git push 远程仓库 本地仓库分支
```

**Git回退**

```bash
# 软重置（保留更改）
# 软重置会将提交记录移回到指定的提交，但是保留工作目录中的更改：
# HEAD~1 表示上一个提交。你也可以使用 HEAD~2、HEAD~3 等来撤销更早的提交
git reset --soft HEAD~1
# 硬重置（丢弃更改）
# 硬重置会将提交记录和工作目录都回滚到指定的提交，这将丢弃所有未提交的更改：
git reset --hard HEAD~1

# 如果你需要保留提交记录但撤销某次提交的更改，可以使用 git revert
git revert <commit-hash>
```

**注意点**

* Git只能跟踪文件，而不能跟踪空目录
