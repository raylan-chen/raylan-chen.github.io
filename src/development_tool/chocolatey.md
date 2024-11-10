# Chocolatey



## 参考链接

https://javabetter.cn/gongju/choco.html

https://blog.csdn.net/yihuajack/article/details/123852060

https://blog.csdn.net/Kaia_sv/article/details/135046005



## Chocolatey

Windows系统下的开源包管理器



Windows PowerShell（管理员）安装Chocolatey，并指定安装路径

```shell
#创建环境路径
$env:ChocolateyInstall='G:\Chocolatey'
[Environment]::SetEnvironmentVariable('ChocolateyInstall',$env:ChocolateyInstall,'Machine')
#安装Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```



> 避坑：
>
> 不需要提前创建 例如G:\Chocolatey文件夹
>
> 由于自己提前创建，导致报错

```
警告: An existing Chocolatey installation was detected. Installation will not continue. This script will not overwrite  existing installations. 

If there is no Chocolatey installation at 'G:\Chocolatey', delete the folder and attempt the installation again.
```



检测安装是否成功

```
PS C:\Users\WIN11> choco
Chocolatey v2.3.0
Please run 'choco -?' or 'choco <command> -?' for help menu.
```



检测安装目录

```shell
PS C:\Users\WIN11> choco install hugo-extended
Chocolatey v2.3.0
Installing the following packages:
hugo-extended
By installing, you accept licenses for the packages.
Downloading package from source 'https://community.chocolatey.org/api/v2/'
Progress: Downloading hugo-extended 0.131.0... 100%

hugo-extended v0.131.0 [Approved]
hugo-extended package files install completed. Performing other installation steps.
The package hugo-extended wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): yes

Extracting 64-bit G:\Chocolatey\lib\hugo-extended\tools\hugo_extended_0.131.0_windows-amd64.zip to G:\Chocolatey\lib\hugo-extended\tools...
G:\Chocolatey\lib\hugo-extended\tools
 ShimGen has successfully created a shim for hugo.exe
 The install of hugo-extended was successful.
  Deployed to 'G:\Chocolatey\lib\hugo-extended\tools'

Chocolatey installed 1/1 packages.
 See the log for details (G:\Chocolatey\logs\chocolatey.log).
```



