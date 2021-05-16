---
title: Socket Notes
date: 2021-05-16 14:17:26
categories: 笔记
description: Some notes about the usage of socket
---

![socket overview](socket1.png)

# Python实现

TCP服务端程序 server.py

```python
#  === TCP 服务端程序 server.py ===

# 导入socket 库
from socket import *

# 主机地址为空字符串，表示绑定本机所有网络接口ip地址
# 等待客户端来连接
IP = ''
# 端口号
PORT = 50000
# 定义一次从socket缓冲区最多读入512个字节数据
BUFLEN = 512

# 实例化一个socket对象
# 参数 AF_INET 表示该socket网络层使用IP协议
# 参数 SOCK_STREAM 表示该socket传输层使用tcp协议
listenSocket = socket(AF_INET, SOCK_STREAM)

# socket绑定地址和端口
listenSocket.bind((IP, PORT))


# 使socket处于监听状态，等待客户端的连接请求
# 参数 8 表示 最多接受多少个等待连接的客户端
listenSocket.listen(8)
print(f'Server starts successfully, waiting for client to connect on port {PORT}...')

dataSocket, addr = listenSocket.accept() #dataSocket是新建的一个用于数据处理的socket
print('Accept a client:', addr)

while True:
    # 尝试读取对方发送的消息
    # BUFLEN 指定从接收缓冲里最多读取多少字节
    recved = dataSocket.recv(BUFLEN)

    # 如果返回空bytes，表示对方关闭了连接
    # 退出循环，结束消息收发
    if not recved:
        break

    # 读取的字节数据是bytes类型，需要解码为字符串
    info = recved.decode()
    print(f'Received： {info}')

    # 发送的数据类型必须是bytes，所以要编码
    dataSocket.send(f'Server received {info}'.encode())

# 服务端也调用close()关闭socket
dataSocket.close()
listenSocket.close()
```



TCP客户端程序 client.py

```python
#  === TCP 客户端程序 client.py ===

from socket import *

IP = '127.0.0.1'
SERVER_PORT = 50000
BUFLEN = 1024

# 实例化一个socket对象，指明协议
dataSocket = socket(AF_INET, SOCK_STREAM)

# 连接服务端socket
dataSocket.connect((IP, SERVER_PORT))

while True:
    # 从终端读入用户输入的字符串
    toSend = input('>>> ')
    if  toSend =='exit':
        break
    # 发送消息，也要编码为 bytes
    dataSocket.send(toSend.encode())

    # 等待接收服务端的消息
    recved = dataSocket.recv(BUFLEN)
    # 如果返回空bytes，表示对方关闭了连接
    if not recved:
        break
    # 打印读取的信息
    print(recved.decode())

dataSocket.close()
```



先运行server.py，再运行client.py（client需要连接SERVER_PORT）

成功建立连接后，使用 `netstat -amp |grep "50000"` 查看当前socket

![demo](1.png)

1. 服务端监听socket：listenSocket
2. 服务端数据socket：dataSocket。自身端口50000；对方端口51276
3. 客户端socket：dataSocket。自身端口51276；对方端口50000



# 消息格式定义

消息的格式定义可以归入 OSI网络模型的 `表示层` 。比如: 定义的消息包括**消息头**和**消息体**。**消息头**存放消息的格式数据， 比如消息的**长度**、**类型**、**状态**等等，而**消息体**存放具体的传送**数据**。

对于使用TCP协议传输信息的程序来说，格式定义一定要明确规定**消息的边界** 。因为TCP协议传输的是 `字节流（bytes stream）`， 如果消息中没有指定**边界**或者**长度**接收方就不知道一个完整的消息从字节流的哪里开始，到哪里结束。

指定**消息的边界**有两种方式：

1. 用特殊字节作为消息的结尾符号

   可以用消息内容中不可能出现的字节串 （比如 `FFFFFF`） 作为消息的结尾字符。

2. 在消息开头某个位置，直接指定消息的长度

   比如在一个消息的最前面用2个字节表示本消息的长度。





# 引用

http://www.python3.vip/tut/py/etc/socket/



# 拓展阅读

建立tcp虚拟连接是通过著名的 `三次握手` 进行的。

具体三次握手的细节大家可以参考这篇文章 https://zhuanlan.zhihu.com/p/40499563