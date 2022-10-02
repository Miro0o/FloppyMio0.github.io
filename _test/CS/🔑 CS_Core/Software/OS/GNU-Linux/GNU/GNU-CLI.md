# GNU CLI

## /usr/bin/

### `INFO`

`info` is a program (info reader) akin `man` . it is for on-line docs reading.

each entry is noted as `node`, and the whole documentation is organized as such nodes. 



#### `INFO` basics

-  `d`  --- to go to directory node (Info main menu)

	```shell
	
	This is the Info main menu (aka directory node).
	A few useful Info commands:
	
	  'q' quits;
	  'H' lists all Info commands;
	  'h' starts the Info tutorial;
	  'mTexinfo RET' visits the Texinfo manual, etc.
	
	* Menu:
	```
-  `b` --- to go to the top of the node
-  `t` --- go to the top node _(default entrance node)_ of the documentation
- `n` / `p` --- next/previous node on _parent level_
- `[` / `]` --- next/previous node on _same level_
- `[SPC]` / `[DEL]` --- next/previous page 
- `l` --- retrace to last node
- `u` --- move up to parent node 
- `m`--- menu 
- `f` --- find the cross-reference on the page
- `[TAB]` --- toggle between the cross-reference on the page
	+ --- text auto-completion



#### `INFO` advanced #unsolved

tbd...



### tar & compression

[Quick Benchmark: Gzip vs Bzip2 vs LZMA vs XZ vs LZ4 vs LZO](https://catchchallenger.first-world.info/wiki/Quick_Benchmark:_Gzip_vs_Bzip2_vs_LZMA_vs_XZ_vs_LZ4_vs_LZO)

 [tar压缩解压缩命令详解](https://www.cnblogs.com/jyaray/archive/2011/04/30/2033362.html) 





## /sbin/

### ping

> [📜 ping host:port 使用ping命令对特定端口访问](https://blog.csdn.net/allway2/article/details/106961916)



### [telent](https://www.cnblogs.com/peida/archive/2013/03/13/2956992.html)

telent $\subset$ TELENT $\subset$ TCP/IP
```shell
$ telnet <ip_address> <port_number>

$ telnet <domain_name> <port_number>
```

### [nc]()

```shell
$ nc -vz <host> <port_number>

$ nc -vz <domain> <port_number>
```

### [nmap]()

```shell
$ nmap -p 1-100 <ip_address>

$ nmap -p 1-100 <hostname>
```

### [powershell]()

```shell
$ Test-NetConnection <ip_address> -p <port_number>

$ Test-NetConnection 192.168.178.35 -p 389
```



## /usr/local/bin

### automake & autoconf

> [automake, autoconf 使用详解](https://www.laruence.com/2009/11/18/1154.html)

TBD... 



### 👍 [BAT](https://github.com/sharkdp/bat#configuration-file)

BAT is a substitude of `cat`  in Linux. It supports loads of text highlighting, git Integratedtion, auto-paging ... and so on many fansy functiones. 

BAT can also be integrated with other tools. 

BAT is configured by configure file. The location of configure file is as `bat --config-file` shows. 

```shell
# an example of configure file look. 
# Set the theme to "TwoDark"
--theme="TwoDark"

# Show line numbers, Git modifications and file header (but no grid)
--style="numbers,changes,header"

# Use italic text on the terminal (not supported on all terminals)
--italic-text=always

# Use C++ syntax for Arduino .ino files
--map-syntax "*.ino:C++"
```

For further detail, check through its official docs. 



### 👍 [Lynx](https://lynx.browser.org)

[Lynx colours? How can I do that?](https://www.linuxquestions.org/questions/linux-general-1/lynx-colours-how-can-i-do-that-582681/)
