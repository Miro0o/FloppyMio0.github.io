# Troubleshootings

#### 👉 [ability to import standalone qemu instances to lima to manage ](https://github.com/lima-vm/lima/issues/881)

##### Decription: 

I need to use lima to manage VM instance. And the problem is when i was to create an `mininet` vm (for SDN Lab) the only tutorial i found is how to run `mininet` vm on emu. 

So i need to know how to create instance on lima with equal specs on QEMU.

##### Solusions:

Not exactly what i was looking for...

```shell
images:
- location: ~/some/path/my-vm.qcow2
  arch: "x86_64"
```

TBD.... 