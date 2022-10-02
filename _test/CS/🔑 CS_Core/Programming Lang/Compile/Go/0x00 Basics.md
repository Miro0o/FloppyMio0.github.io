# 0x00 Bsics

> [Go 基础](https://www.topgoer.com)
>
> [Tutorial: Get started with Go](https://go.dev/doc/tutorial/getting-started)



## Installation & Build & Run



![Screen Shot 2022-09-05 at 12.27.15 AM](../../../../../Assets/Pics/Screen Shot 2022-09-05 at 12.27.15 AM-2308842-2308845.png)



#### Dir arch:

```shell
/Users/mir0/Desktop/Coding/Lang/go/
▾  go_workspace_test/
  ▾  bin/
       Hello *
  ▾  pkg/mod/cache/
       lock
  ▾  src/github.com/Mir0/test_proj_golang/
    ▾  greet/
         go.mod
         greet.go
         greet_test.go
    ▾  hello/
         go.mod
         main.go
```



- `go.mod` tracks every module's (or package's ) own updates & other dependencies . In each module there is one `go.mod` file. Within one module every file share the same namespace in practice. 

- The `GOPATH` points to the sole workspace, under which there are `bin`, `src` and `pkg` folders, while `GOBIN` points to the sole install location of the workspace. Every proj is done under the workspace and every application is installed to the bin folder. 

- Within one module there can be a test file for every other file. Test file ends with `_test.go` and the test  function in the test file begins with `TEST`



## Basic Syntex 

> [Go 基础](https://www.topgoer.com/go基础/)