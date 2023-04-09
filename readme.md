# 大学评教系统

这是一个用于评价大学课程和教师的在线系统。该系统允许已注册学生登录、维护个人信息、打卡和对课程进行评价。后台管理员可以管理课程、学生选课、课程评价和学生信息。项目使用 Nest.js、MySQL、React 和 React Query 构建。

## 功能

### 学生
* 登录
* 维护个人信息
* 打卡（包括课程标题、授课老师、打卡信息）
* 课程评价（包括课程标题、授课老师、学生评价、评价内容、审核状态）
### 后台管理员
* 修改密码
* 课程管理（添加、删除、修改）
* 学生选课管理（添加、删除、修改）
* 课程评价管理
* 学生管理

## 技术栈

* 服务端：Nest.js
* 数据库：MySQL
* 前端：React、React Query
目录结构

```bash
university-evaluation-system
|- packages
|  |- backend
|  |  |- src
|  |  |- ...
|  |- frontend
|  |  |- src
|  |  |- ...
|- lerna.json
```

## 本地开发

### 安装依赖
在项目根目录下运行以下命令以使用 pnpm 安装依赖：

```bash
pnpm install
```
### 启动后端服务
进入后端项目文件夹：

```bash
cd packages/backend
```

运行以下命令以启动后端服务：

```bash
pnpm run start:dev
```
### 启动前端服务
进入前端项目文件夹：

```bash
cd packages/frontend
```
运行以下命令以启动前端服务：

```bash
pnpm start
```
### 访问
在浏览器中访问 http://localhost:3000 以查看前端应用。

## 生产环境

请参考 Nest.js 和 Create React App 的官方文档，了解如何部署生产环境。

