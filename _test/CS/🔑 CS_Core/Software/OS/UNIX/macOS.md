# 🍏 OS X

## ⛲️ Resources

⭐️ [macOS Dev Setup](https://github.com/nicolashery/mac-dev-setup)

[Switchingtomac](https://www.switchingtomac.com)



## command line

[常用汇编命令](https://baijiahao.baidu.com/s?id=1607834244588924669&wfr=spider&for=pc)

[查看网络状态](https://www.cnblogs.com/Pagenny/p/9800123.html)



## Logs

###### 1.6.2022
https://superuser.com/questions/665274/how-to-make-ls-color-its-output-by-default-without-setting-up-an-alias/665285#665285?newreg=d21c6748c5fd426fa10eb20421698dcb
```shell
## Colorize the ls output ##
alias ls='ls --color=auto'

## Use a long listing format ##
alias ll='ls -la'

## Show hidden files ##
alias l.='ls -d .* --color=auto'

```



## 🛠 Troubleshooting :

###### 👉 [WindowServer taking up to much memory](https://macsecurity.net/view/393-windowserver-mac)

+ [to reduce windowserver memory&cpu](https://blog.mynook.info/post/macos-windowserver-calm-down/)
+ 

[sharing files](https://support.apple.com/zh-cn/guide/mac-help/mh17131/mac)

[check IPv6 on local host](https://www.cnblogs.com/cuihongyu3503319/p/7422877.html)

[compress file + .DS_Store](https://blog.csdn.net/doublebaidu/article/details/121417602)



###### 👉 [to Quick-look/preview any source file on mac](https://paaatrick.com/2020-04-05-make-mac-quicklook-any-code-source-file/) #unsolved

+ brew 
	+ qlcolorcode
		+ support high-light code
	+ qlstephen
		+ support customized source-file preview

+ config
	+ `~/Library/QuickLook/QLColorCode.qlgenerator/Contents/Info.plist`
	+ `Document types > Item 0 > Document Content Type UTIs (CFBundleDocumentTypes > Item 0 > LSItemContentTypes`
	+ use command line `mdls -name kMDItemContentType ./main.dart ` to check out a file's type name. example here look into the file './main.dart' and it returns as `kMDItemContentType = "com.apple.disk-image-dart"`. in real case change the file name to the real one. 



###### 👉 [Garbled on macOS](https://www.jianshu.com/p/8b3de75f2658)  #unsolved

**第一种乱码类型**

在网络上查了一圈，找到三个相关答案：

1.  下载的文件名总是「乱码」？这里有各平台的解决方法 ：  
    [https://sspai.com/post/44360](https://links.jianshu.com/go?to=https%3A%2F%2Fsspai.com%2Fpost%2F44360)  
    Automator 流程:  
    [https://cl.ly/2v1E3n3f1q2M](https://links.jianshu.com/go?to=https%3A%2F%2Fcl.ly%2F2v1E3n3f1q2M)
2.  Mac OS X 下文件名乱码出现的原因和解决方法：  
    [https://zzi.io/?p=275](https://links.jianshu.com/go?to=https%3A%2F%2Fzzi.io%2F%3Fp%3D275)
3.  预组字符：  
    [https://zh.wikipedia.org/wiki/预组字符](https://links.jianshu.com/go?to=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E9%25A2%2584%25E7%25BB%2584%25E5%25AD%2597%25E7%25AC%25A6)



###### 👉 macOS Mail

- [config mail](https://blog.csdn.net/houseq/article/details/39297111)

  

###### 👉 [Mac 配置本地https 服务](https://www.jianshu.com/p/d22baeae50ea) #unsolved

1. built-in [apache http server](https://httpd.apache.org/#essentials)



###### 👉 开机启动

https://www.jianshu.com/p/eee8a7de179c



###### 👉 [Mac上的欧路词典单词本迁移到有道词典 #node.js](https://www.cnblogs.com/howmacist/p/6240863.html)



## FAQ

+ [mac自带数据库？](https://segmentfault.com/q/1010000008968721) 

+ [Difference between ulimit, launchctl, sysctl?](https://serverfault.com/questions/502053/difference-between-ulimit-launchctl-sysctl)

+ [Mac下查看端口占用情况](http://jartto.wang/2016/09/28/check-the-system-port-of-mac/)
  + netstat
  + lsof
  + ps
  + kill

