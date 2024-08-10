# Hugo使用学习



## 图片引用

先明确文件目录结构为

![image-20240809174946863](./assets/image-20240809174946863.png)

|—content

|	|—posts

|	|	|—test

|	|	|	|—test.md

|	|	|	|	|assets

|	|	|	|	|	|—image.png

现在test.md中需要引用image.png

正确语法为

```markdown
![image](./assets/image-20240809165309184.png)
```

原先Typora使用的引用方式为

```markdown
![image](.assets/image-20240809165309184.png)
```

省略了 `./`，且文件夹名为 `.asserts`，导致图片加载异常



## 文章分类

```
# 文章所属的类别
categories: 
- test
```

![image-20240809180533182](./assets/image-20240809180533182.png)

![image-20240809180544876](./assets/image-20240809180544876.png)



## 草稿（xxx.md）

设置文章为草稿版本

```markdown
---
draft: true
---
```

