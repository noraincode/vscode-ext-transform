> [VS Code 编辑器插件离线下载地址转换工具  (戳这里)](http://xocode.coding.me/vscode-ext-downlink/)

## 如何下载插件
### 1、进入vscode插件官网 <https://marketplace.visualstudio.com/>
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/1568700.jpg)
### 2、找到需要安装的插件，以 ESLint 为例，打开主页，可以看到页面上没有下载链接
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/86705956.jpg)
复制浏览器访问链接，同时记住该主页右下方 version 对应的版本号
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/77279175.jpg)
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/62151297.jpg)

### 3、打开VS Code 离线下载地址转换工具
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/48652618.jpg)
### 4、将 ESLint 主页的访问链接和版本号复制到对应的输入框中，点击转换，
### 5、点击右侧的下载按钮，将会自动把下载链接复制到剪切板中，在新标签页打开下载链接就会启动下载
### 6、将下载后的文件名为：Microsoft.VisualStudio.Services.VSIXPackage
### 7、工具会先检测访问链接是否有效，若有效，则会转换为下载链接，并在下载链接的输入框中显示，该链接即为 Eslint 插件的下载链接

## 如何安装插件
### 1、重命名
将下载的文件Microsoft.VisualStudio.Services.VSIXPackage进行重命名为eslint.vsix ;文件名可以随意取
### 2、打开VS Code，切换到扩展管理面板，点击右上角的...，选择从 VSIX 安装
![](http://or60gmbpq.bkt.clouddn.com/17-7-27/51018607.jpg)
### 3、选择重命名后的 eslint.vsix 文件，安装后重启编辑器即可使用
## 注意事项
### 1、确保输入的原始链接、版本号和插件主页上的完全相同
### 2、如果转换失败，有以下几种可能
>#### 1. 检测原始链接时网络请求超时
>#### 2. 原始地址和版本号输入有误
>#### 3. 转换工具挂了
### 3、如果转换失败、或长时间无响应，请刷新页面重试
### 4、如有疑问，可与我联系，norain4u@yeah.net，或在issue中提出

## 关于
<https://code.visualstudio.com/docs/editor/extension-gallery?pub=HookyQR&ext=beautify#_common-questions>
感谢该网站为本工具提供了插件下载地址的拼接方式
