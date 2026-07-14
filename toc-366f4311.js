// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html"><strong aria-hidden="true">1.</strong> 关于本系列</a></span></li><li class="chapter-item expanded "><li class="part-title">分册</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/index.html"><strong aria-hidden="true">2.</strong> 从沙子到车辙——技术总纲</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/扉页.html"><strong aria-hidden="true">2.1.</strong> 扉页</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/序言.html"><strong aria-hidden="true">2.2.</strong> 序言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.3.</strong> 第一部分 · 计算的本质</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/1.1-什么是计算.html"><strong aria-hidden="true">2.3.1.</strong> 什么是计算</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/1.2-计算的梦想与破灭.html"><strong aria-hidden="true">2.3.2.</strong> 计算的梦想与破灭</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/1.3-图灵的答案.html"><strong aria-hidden="true">2.3.3.</strong> 图灵的答案</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/1.4-计算的边界.html"><strong aria-hidden="true">2.3.4.</strong> 计算的边界</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/1.5-从图灵机到ECU.html"><strong aria-hidden="true">2.3.5.</strong> 从图灵机到ECU</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.4.</strong> 第二部分 · 计算的物质基础</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.1-思想实验-在原始森林里造芯片.html"><strong aria-hidden="true">2.4.1.</strong> 思想实验 · 在原始森林里造芯片</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.2-半导体物理极简史.html"><strong aria-hidden="true">2.4.2.</strong> 半导体物理极简史</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.3-MOSFET-现代文明的原子.html"><strong aria-hidden="true">2.4.3.</strong> MOSFET · 现代文明的原子</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.4-CMOS-互补的智慧.html"><strong aria-hidden="true">2.4.4.</strong> CMOS · 互补的智慧</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.5-半导体制造工艺.html"><strong aria-hidden="true">2.4.5.</strong> 半导体制造工艺</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/2.6-从晶圆到ECU核心.html"><strong aria-hidden="true">2.4.6.</strong> 从晶圆到ECU核心</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.5.</strong> 第三部分 · 计算的骨架</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/3.1-组合逻辑-没有记忆的计算.html"><strong aria-hidden="true">2.5.1.</strong> 组合逻辑 · 没有记忆的计算</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/3.2-时序逻辑-有记忆的计算.html"><strong aria-hidden="true">2.5.2.</strong> 时序逻辑 · 有记忆的计算</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/3.3-数据通路与控制器的双人舞.html"><strong aria-hidden="true">2.5.3.</strong> 数据通路与控制器的双人舞</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/3.4-流水线-指令级并行的艺术.html"><strong aria-hidden="true">2.5.4.</strong> 流水线 · 指令级并行的艺术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/3.5-存储层次.html"><strong aria-hidden="true">2.5.5.</strong> 存储层次</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.6.</strong> 第四部分 · 计算的连接</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.1-芯片内部的悄悄话.html"><strong aria-hidden="true">2.6.1.</strong> 芯片内部的悄悄话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.2-从片内到片间-SPI-I2C.html"><strong aria-hidden="true">2.6.2.</strong> 从片内到片间 · SPI · I2C</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.3-板级通信-CAN-CAN-FD.html"><strong aria-hidden="true">2.6.3.</strong> 板级通信 · CAN · CAN · FD</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.4-车载以太网与DoIP.html"><strong aria-hidden="true">2.6.4.</strong> 车载以太网与DoIP</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.5-时间同步与PTP.html"><strong aria-hidden="true">2.6.5.</strong> 时间同步与PTP</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/4.6-传感器与执行器接口.html"><strong aria-hidden="true">2.6.6.</strong> 传感器与执行器接口</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.7.</strong> 第五部分 · 计算的灵魂</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/5.1-裸机编程-一人独掌天下.html"><strong aria-hidden="true">2.7.1.</strong> 裸机编程 · 一人独掌天下</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/5.2-实时操作系统.html"><strong aria-hidden="true">2.7.2.</strong> 实时操作系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/5.3-AUTOSAR-CP-AP.html"><strong aria-hidden="true">2.7.3.</strong> AUTOSAR · CP · AP</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.8.</strong> 第六部分 · 诊断、安全与存储</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/6.1-诊断的世界-UDS.html"><strong aria-hidden="true">2.8.1.</strong> 诊断的世界 · UDS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/6.2-硬件安全-HSM.html"><strong aria-hidden="true">2.8.2.</strong> 硬件安全 · HSM</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/6.3-软件升级与存储.html"><strong aria-hidden="true">2.8.3.</strong> 软件升级与存储</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.9.</strong> 第七部分 · 全书总结</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/7.1-思想实验-低精度传感器测出精确值.html"><strong aria-hidden="true">2.9.1.</strong> 思想实验 · 低精度传感器测出精确值</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/7.2-两弹一星的精神内核.html"><strong aria-hidden="true">2.9.2.</strong> 两弹一星的精神内核</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/7.3-资源的匮乏是永恒的.html"><strong aria-hidden="true">2.9.3.</strong> 资源的匮乏是永恒的</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/7.4-兰亭集序的启示.html"><strong aria-hidden="true">2.9.4.</strong> 兰亭集序的启示</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="from-sand-to-ruts/chapters/7.5-全书结语.html"><strong aria-hidden="true">2.9.5.</strong> 全书结语</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ptp-book/index.html"><strong aria-hidden="true">3.</strong> PTP 技术书 · 从思想实验到协议实现</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.1.</strong> 第一章 · 时间的本质与同步的意义</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/1.1-如果你周围的一切都静止了.html"><strong aria-hidden="true">3.1.1.</strong> 如果你周围的一切都静止了</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/1.2-人类为时间画下的刻度.html"><strong aria-hidden="true">3.1.2.</strong> 人类为时间画下的刻度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/1.3-为什么你手机上的时间和我不一样？.html"><strong aria-hidden="true">3.1.3.</strong> 为什么你手机上的时间和我不一样？</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/1.4-那个按电子表的小学生，已经懂了PTP的核心.html"><strong aria-hidden="true">3.1.4.</strong> 那个按电子表的小学生，已经懂了PTP的核心</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.2.</strong> 第二章 · PTP 协议逐机制拆解</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.1-当指挥家走进音乐厅-认识PTP网络中的四种角色.html"><strong aria-hidden="true">3.2.1.</strong> 当指挥家走进音乐厅 · 认识PTP网络中的四种角色</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.2-让指挥家诞生-BMCA算法详解.html"><strong aria-hidden="true">3.2.2.</strong> 让指挥家诞生 · BMCA算法详解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.3-时间护照与签证-PTP域和时间尺度.html"><strong aria-hidden="true">3.2.3.</strong> 时间护照与签证 · PTP域和时间尺度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.4-时间机器的记忆-PTP数据集全解析.html"><strong aria-hidden="true">3.2.4.</strong> 时间机器的记忆 · PTP数据集全解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.5-时钟的九种生命-端口状态机详解.html"><strong aria-hidden="true">3.2.5.</strong> 时钟的九种生命 · 端口状态机详解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.6-不说谎的中继站-透明时钟如何工作.html"><strong aria-hidden="true">3.2.6.</strong> 不说谎的中继站 · 透明时钟如何工作</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.7-四个时间戳的魔法-E2E延迟测量机制.html"><strong aria-hidden="true">3.2.7.</strong> 四个时间戳的魔法 · E2E延迟测量机制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.8-逐链路精准测量-P2P延迟测量机制.html"><strong aria-hidden="true">3.2.8.</strong> 逐链路精准测量 · P2P延迟测量机制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.9-偏移计算的数学-从时间戳到时钟调整.html"><strong aria-hidden="true">3.2.9.</strong> 偏移计算的数学 · 从时间戳到时钟调整</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.10-不仅是相位对齐-频率同步的秘密.html"><strong aria-hidden="true">3.2.10.</strong> 不仅是相位对齐 · 频率同步的秘密</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.11-纳秒从何而来-硬件时间戳的奥秘.html"><strong aria-hidden="true">3.2.11.</strong> 纳秒从何而来 · 硬件时间戳的奥秘</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.12-PTP的十种语言-报文格式全解析.html"><strong aria-hidden="true">3.2.12.</strong> PTP的十种语言 · 报文格式全解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.13-PTP的万能插件-TLV扩展机制深度解析.html"><strong aria-hidden="true">3.2.13.</strong> PTP的万能插件 · TLV扩展机制深度解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.14-网络的遥控器-PTP管理协议深度解析.html"><strong aria-hidden="true">3.2.14.</strong> 网络的遥控器 · PTP管理协议深度解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.15-当组播成为奢侈品-单播协商与路径追踪.html"><strong aria-hidden="true">3.2.15.</strong> 当组播成为奢侈品 · 单播协商与路径追踪</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.16-守护时间的金库-PTP安全机制深度解析.html"><strong aria-hidden="true">3.2.16.</strong> 守护时间的金库 · PTP安全机制深度解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.17-追踪光速的脚步-White-Rabbit与亚纳秒同步.html"><strong aria-hidden="true">3.2.17.</strong> 追踪光速的脚步 · White Rabbit与亚纳秒同步</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/2.18-遵循规则的艺术-Profile与一致性要求深度解析.html"><strong aria-hidden="true">3.2.18.</strong> 遵循规则的艺术 · Profile与一致性要求深度解析</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.3.</strong> 第三章 · LinuxPTP 源码解析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.1-走进开源PTP世界-LinuxPTP项目全景.html"><strong aria-hidden="true">3.3.1.</strong> 走进开源PTP世界 · LinuxPTP项目全景</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.2-数据集与消息结构-PTP数据的编码艺术.html"><strong aria-hidden="true">3.3.2.</strong> 数据集与消息结构 · PTP数据的编码艺术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.3-端口状态机-200行代码驾驭9种状态.html"><strong aria-hidden="true">3.3.3.</strong> 端口状态机 · 200行代码驾驭9种状态</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.4-BMCA算法实现-民主选举的代码艺术.html"><strong aria-hidden="true">3.3.4.</strong> BMCA算法实现 · 民主选举的代码艺术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.5-伺服控制器-让时钟追上主人的艺术.html"><strong aria-hidden="true">3.3.5.</strong> 伺服控制器 · 让时钟追上主人的艺术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.6-PHC操作与时钟调整-与硬件时钟对话.html"><strong aria-hidden="true">3.3.6.</strong> PHC操作与时钟调整 · 与硬件时钟对话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.7-传输层实现-PTP报文的-高速公路-.html"><strong aria-hidden="true">3.3.7.</strong> 传输层实现 · PTP报文的 · 高速公路 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.8-硬件时间戳详解-纳秒级精度的魔法.html"><strong aria-hidden="true">3.3.8.</strong> 硬件时间戳详解 · 纳秒级精度的魔法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.9-TLV处理实现-扩展信息的-瑞士军刀-.html"><strong aria-hidden="true">3.3.9.</strong> TLV处理实现 · 扩展信息的 · 瑞士军刀 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.10-管理协议与pmc-PTP的-远程控制台-.html"><strong aria-hidden="true">3.3.10.</strong> 管理协议与pmc · PTP的 · 远程控制台 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.11-phc2sys工具分析-PHC与系统时钟的-桥梁-.html"><strong aria-hidden="true">3.3.11.</strong> phc2sys工具分析 · PHC与系统时钟的 · 桥梁 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.12-单播协商实现-PTP的-专线服务-.html"><strong aria-hidden="true">3.3.12.</strong> 单播协商实现 · PTP的 · 专线服务 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/3.13-故障处理与诊断-PTP的-健康卫士-.html"><strong aria-hidden="true">3.3.13.</strong> 故障处理与诊断 · PTP的 · 健康卫士 · </a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.4.</strong> 第四章 · 亲手实现 ptp-lite</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.1-轻量PTP项目概述-从零开始的时间同步之旅.html"><strong aria-hidden="true">3.4.1.</strong> 轻量PTP项目概述 · 从零开始的时间同步之旅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.2-消息结构与编码-PTP报文的-DNA-.html"><strong aria-hidden="true">3.4.2.</strong> 消息结构与编码 · PTP报文的 · DNA · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.3-主时钟程序实现-时间的-发布者-.html"><strong aria-hidden="true">3.4.3.</strong> 主时钟程序实现 · 时间的 · 发布者 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.4-从时钟程序实现-时间的-追随者-.html"><strong aria-hidden="true">3.4.4.</strong> 从时钟程序实现 · 时间的 · 追随者 · </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.5-编译运行与测试.html"><strong aria-hidden="true">3.4.5.</strong> 编译运行与测试</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ptp-book/chapters/4.6-问题排查与优化.html"><strong aria-hidden="true">3.4.6.</strong> 问题排查与优化</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hsm-book/index.html"><strong aria-hidden="true">4.</strong> HSM 技术书 · 从思想实验到安全基石</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.1.</strong> 第一章 · 安全通信的起源</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/1.1-岩壁上的第一条信息.html"><strong aria-hidden="true">4.1.1.</strong> 岩壁上的第一条信息</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/1.2-信道的原罪.html"><strong aria-hidden="true">4.1.2.</strong> 信道的原罪</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/1.3-从符号到文字-协议的标准化.html"><strong aria-hidden="true">4.1.3.</strong> 从符号到文字 · 协议的标准化</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/1.4-当信道不再可信-密码学的诞生.html"><strong aria-hidden="true">4.1.4.</strong> 当信道不再可信 · 密码学的诞生</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/1.5-信任的终极锚点-从软件到硬件.html"><strong aria-hidden="true">4.1.5.</strong> 信任的终极锚点 · 从软件到硬件</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.2.</strong> 第二章 · 认识 HSM</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/2.1-HSM是什么-从数字保险箱说起.html"><strong aria-hidden="true">4.2.1.</strong> HSM是什么 · 从数字保险箱说起</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/2.2-HSM的两种物理形态.html"><strong aria-hidden="true">4.2.2.</strong> HSM的两种物理形态</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/2.3-HSM标准生态全景.html"><strong aria-hidden="true">4.2.3.</strong> HSM标准生态全景</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/2.4-HSM通信全景.html"><strong aria-hidden="true">4.2.4.</strong> HSM通信全景</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.3.</strong> 第三章 · PKCS#11 v3.1 规范深度解析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.1-PKCS11的设计哲学.html"><strong aria-hidden="true">4.3.1.</strong> PKCS#11的设计哲学</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.2-核心对象模型.html"><strong aria-hidden="true">4.3.2.</strong> 核心对象模型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.3-PKCS11的安全哲学.html"><strong aria-hidden="true">4.3.3.</strong> PKCS#11的安全哲学</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.4-Session状态与并发管理.html"><strong aria-hidden="true">4.3.4.</strong> Session状态与并发管理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.5-Object与属性.html"><strong aria-hidden="true">4.3.5.</strong> Object与属性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.6-通用属性详解.html"><strong aria-hidden="true">4.3.6.</strong> 通用属性详解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.7-密钥对象与安全属性.html"><strong aria-hidden="true">4.3.7.</strong> 密钥对象与安全属性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.8-证书对象.html"><strong aria-hidden="true">4.3.8.</strong> 证书对象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.9-硬件特征对象.html"><strong aria-hidden="true">4.3.9.</strong> 硬件特征对象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.10-初始化与Slot管理函数.html"><strong aria-hidden="true">4.3.10.</strong> 初始化与Slot管理函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.11-Session管理函数.html"><strong aria-hidden="true">4.3.11.</strong> Session管理函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.12-Object管理函数.html"><strong aria-hidden="true">4.3.12.</strong> Object管理函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.13-加密解密函数.html"><strong aria-hidden="true">4.3.13.</strong> 加密解密函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.14-签名验证函数.html"><strong aria-hidden="true">4.3.14.</strong> 签名验证函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.15-哈希与MAC函数.html"><strong aria-hidden="true">4.3.15.</strong> 哈希与MAC函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.16-密钥管理函数.html"><strong aria-hidden="true">4.3.16.</strong> 密钥管理函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.17-Mechanism系统.html"><strong aria-hidden="true">4.3.17.</strong> Mechanism系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.18-AES机制详解.html"><strong aria-hidden="true">4.3.18.</strong> AES机制详解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.19-RSA机制详解.html"><strong aria-hidden="true">4.3.19.</strong> RSA机制详解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.20-ECC与哈希机制.html"><strong aria-hidden="true">4.3.20.</strong> ECC与哈希机制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/3.21-安全属性组合实战.html"><strong aria-hidden="true">4.3.21.</strong> 安全属性组合实战</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.4.</strong> 第四章 · SoftHSM2 源码解析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.1-SoftHSM2项目概述.html"><strong aria-hidden="true">4.4.1.</strong> SoftHSM2项目概述</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.2-从PKCS11头文件到实现.html"><strong aria-hidden="true">4.4.2.</strong> 从PKCS11头文件到实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.3-SoftHSMcpp深度解析.html"><strong aria-hidden="true">4.4.3.</strong> SoftHSMcpp深度解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.4-P11Objects与P11Attributes.html"><strong aria-hidden="true">4.4.4.</strong> P11Objects与P11Attributes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.5-Slot管理模块.html"><strong aria-hidden="true">4.4.5.</strong> Slot管理模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.6-Session管理模块.html"><strong aria-hidden="true">4.4.6.</strong> Session管理模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.7-Handle管理模块.html"><strong aria-hidden="true">4.4.7.</strong> Handle管理模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.8-Object存储架构.html"><strong aria-hidden="true">4.4.8.</strong> Object存储架构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.9-Token存储实现.html"><strong aria-hidden="true">4.4.9.</strong> Token存储实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.10-CryptoFactory架构.html"><strong aria-hidden="true">4.4.10.</strong> CryptoFactory架构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.11-对称算法实现.html"><strong aria-hidden="true">4.4.11.</strong> 对称算法实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.12-非对称算法实现.html"><strong aria-hidden="true">4.4.12.</strong> 非对称算法实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.13-哈希与MAC实现.html"><strong aria-hidden="true">4.4.13.</strong> 哈希与MAC实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.14-RNG与密钥派生.html"><strong aria-hidden="true">4.4.14.</strong> RNG与密钥派生</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/4.15-从开源到闭源.html"><strong aria-hidden="true">4.4.15.</strong> 从开源到闭源</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.5.</strong> 第五章 · 亲手实现 hsm-lite</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/5.1-hsm-lite项目概述.html"><strong aria-hidden="true">4.5.1.</strong> hsm · lite项目概述</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/5.2-PKCS11核心接口实现.html"><strong aria-hidden="true">4.5.2.</strong> PKCS11核心接口实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/5.3-安全存储与密钥管理.html"><strong aria-hidden="true">4.5.3.</strong> 安全存储与密钥管理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/5.4-测试程序与编译.html"><strong aria-hidden="true">4.5.4.</strong> 测试程序与编译</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.6.</strong> 第六章 · 真实 SDK 集成经验</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.1-SDK集成概述.html"><strong aria-hidden="true">4.6.1.</strong> SDK集成概述</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.2-驱动架构设计.html"><strong aria-hidden="true">4.6.2.</strong> 驱动架构设计</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.3-通信协议实战.html"><strong aria-hidden="true">4.6.3.</strong> 通信协议实战</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.4-踩坑与修复.html"><strong aria-hidden="true">4.6.4.</strong> 踩坑与修复</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.5-安全机制实现.html"><strong aria-hidden="true">4.6.5.</strong> 安全机制实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.6-AUTOSAR集成实战.html"><strong aria-hidden="true">4.6.6.</strong> AUTOSAR集成实战</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.7-TCP命令接口.html"><strong aria-hidden="true">4.6.7.</strong> TCP命令接口</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hsm-book/chapters/6.8-集成经验总结.html"><strong aria-hidden="true">4.6.8.</strong> 集成经验总结</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="storage-book/index.html"><strong aria-hidden="true">5.</strong> 存储技术书 · 在不可靠的硬件上构建可靠的数据家园</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.1.</strong> 第一章 · 存储的本质</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/1.1-结绳记事——人类第一条存储记录.html"><strong aria-hidden="true">5.1.1.</strong> 结绳记事——人类第一条存储记录</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/1.2-从泥板到纸张——存储介质的万年进化.html"><strong aria-hidden="true">5.1.2.</strong> 从泥板到纸张——存储介质的万年进化</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/1.3-从磁芯到半导体——存储的两次革命.html"><strong aria-hidden="true">5.1.3.</strong> 从磁芯到半导体——存储的两次革命</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/1.4-存储的原罪——物理世界的不确定性.html"><strong aria-hidden="true">5.1.4.</strong> 存储的原罪——物理世界的不确定性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/1.5-文件系统——与不可靠介质的和解协议.html"><strong aria-hidden="true">5.1.5.</strong> 文件系统——与不可靠介质的和解协议</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.2.</strong> 第二章 · Flash 物理世界</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/2.1-浮栅晶体管——一盏不会灭的灯.html"><strong aria-hidden="true">5.2.1.</strong> 浮栅晶体管——一盏不会灭的灯</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/2.2-NOR与NAND——存储世界的两条路.html"><strong aria-hidden="true">5.2.2.</strong> NOR与NAND——存储世界的两条路</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/2.3-SLC-MLC-TLC——越多越不靠谱.html"><strong aria-hidden="true">5.2.3.</strong> SLC · MLC · TLC——越多越不靠谱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/2.4-Flash的三原罪——写前擦除-单向编程-有限寿命.html"><strong aria-hidden="true">5.2.4.</strong> Flash的三原罪——写前擦除 · 单向编程 · 有限寿命</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/2.5-从封装到引擎舱——Flash芯片的最后旅程.html"><strong aria-hidden="true">5.2.5.</strong> 从封装到引擎舱——Flash芯片的最后旅程</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.3.</strong> 第三章 · 文件系统理论</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.1-思想实验-100张纸如何管理.html"><strong aria-hidden="true">5.3.1.</strong> 思想实验 · 100张纸如何管理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.2-块设备抽象——文件系统的第一层谎言.html"><strong aria-hidden="true">5.3.2.</strong> 块设备抽象——文件系统的第一层谎言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.3-FAT文件系统——最简单的方案-最致命的缺陷.html"><strong aria-hidden="true">5.3.3.</strong> FAT文件系统——最简单的方案 · 最致命的缺陷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.4-日志结构化文件系统——只追加-不覆盖.html"><strong aria-hidden="true">5.3.4.</strong> 日志结构化文件系统——只追加 · 不覆盖</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.5-嵌入式Flash文件系统图谱.html"><strong aria-hidden="true">5.3.5.</strong> 嵌入式Flash文件系统图谱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.6-元数据的困境——管理数据的数据最难管.html"><strong aria-hidden="true">5.3.6.</strong> 元数据的困境——管理数据的数据最难管</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.7-磨损均衡——让每一个书架都均匀老化.html"><strong aria-hidden="true">5.3.7.</strong> 磨损均衡——让每一个书架都均匀老化</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/3.8-掉电安全——在黑暗中重建秩序.html"><strong aria-hidden="true">5.3.8.</strong> 掉电安全——在黑暗中重建秩序</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.4.</strong> 第四章 · LittleFS 源码解析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.1-LittleFS设计哲学——最小的元数据-最大的可靠性.html"><strong aria-hidden="true">5.4.1.</strong> LittleFS设计哲学——最小的元数据 · 最大的可靠性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.2-lfs.c全貌——单文件设计的工程智慧.html"><strong aria-hidden="true">5.4.2.</strong> lfs.c全貌——单文件设计的工程智慧</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.3-Metadata-Pair——两页互为备份的原子提交.html"><strong aria-hidden="true">5.4.3.</strong> Metadata · Pair——两页互为备份的原子提交</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.4-CTZ-Skip-List——文件数据的COW结构.html"><strong aria-hidden="true">5.4.4.</strong> CTZ · Skip · List——文件数据的COW结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.5-Block-Allocator——lookahead与磨损均衡.html"><strong aria-hidden="true">5.4.5.</strong> Block · Allocator——lookahead与磨损均衡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/4.6-Directory——目录即文件.html"><strong aria-hidden="true">5.4.6.</strong> Directory——目录即文件</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.5.</strong> 第五章 · 从零构建 KnotFS</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.1-KnotFS项目概述——教学级异步日志结构化文件系统.html"><strong aria-hidden="true">5.5.1.</strong> KnotFS项目概述——教学级异步日志结构化文件系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.2-Flash布局——16块×4KB的棋盘.html"><strong aria-hidden="true">5.5.2.</strong> Flash布局——16块×4KB的棋盘</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.3-用RAM骗过文件系统——flash数组与异步延迟模拟.html"><strong aria-hidden="true">5.5.3.</strong> 用RAM骗过文件系统——flash数组与异步延迟模拟</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.4-超级块双副本——馆藏总目录一式两份.html"><strong aria-hidden="true">5.5.4.</strong> 超级块双副本——馆藏总目录一式两份</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.5-SB-Log——只追加的借阅记录簿.html"><strong aria-hidden="true">5.5.5.</strong> SB · Log——只追加的借阅记录簿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.6-块管理与磨损均衡——选最年轻的书架.html"><strong aria-hidden="true">5.5.6.</strong> 块管理与磨损均衡——选最年轻的书架</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.7-Compact——重新誊写目录.html"><strong aria-hidden="true">5.5.7.</strong> Compact——重新誊写目录</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.8-Copy-on-Write——没确认就不撤旧书.html"><strong aria-hidden="true">5.5.8.</strong> Copy · on · Write——没确认就不撤旧书</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.9-写入流程——全链路状态机走读.html"><strong aria-hidden="true">5.5.9.</strong> 写入流程——全链路状态机走读</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.10-读取流程——按块寻址与偏移计算.html"><strong aria-hidden="true">5.5.10.</strong> 读取流程——按块寻址与偏移计算</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.11-追加与删除——文件的变与灭.html"><strong aria-hidden="true">5.5.11.</strong> 追加与删除——文件的变与灭</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.12-CRC32——信任但要验证.html"><strong aria-hidden="true">5.5.12.</strong> CRC32——信任但要验证</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.13-请求队列与事件循环——协作式非阻塞调度.html"><strong aria-hidden="true">5.5.13.</strong> 请求队列与事件循环——协作式非阻塞调度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.14-自测试程序——跑一遍全部操作.html"><strong aria-hidden="true">5.5.14.</strong> 自测试程序——跑一遍全部操作</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="storage-book/chapters/5.15-从教学到生产——传递人的最后一课.html"><strong aria-hidden="true">5.5.15.</strong> 从教学到生产——传递人的最后一课</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uds-book/index.html"><strong aria-hidden="true">6.</strong> UDS 技术书 · 从望闻问切到 UDS 协议实现</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.1.</strong> 第一章 · 诊断的本质</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/1.1-望闻问切——人类诊断的原型.html"><strong aria-hidden="true">6.1.1.</strong> 望闻问切——人类诊断的原型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/1.2-听诊器到故障灯——汽车诊断的第一次哭喊.html"><strong aria-hidden="true">6.1.2.</strong> 听诊器到故障灯——汽车诊断的第一次哭喊</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/1.3-OBD-I到OBD-II——语言的第一次统一.html"><strong aria-hidden="true">6.1.3.</strong> OBD · I到OBD · II——语言的第一次统一</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/1.4-KWP2000与UDS——从专有到统一.html"><strong aria-hidden="true">6.1.4.</strong> KWP2000与UDS——从专有到统一</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/1.5-思想实验-给一个ECU挂一次号.html"><strong aria-hidden="true">6.1.5.</strong> 思想实验 · 给一个ECU挂一次号</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.2.</strong> 第二章 · UDS 协议逐服务拆解</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.1-UDS服务全景——26个SID的地图.html"><strong aria-hidden="true">6.2.1.</strong> UDS服务全景——26个SID的地图</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.2-UDS报文格式——请求与响应的语法树.html"><strong aria-hidden="true">6.2.2.</strong> UDS报文格式——请求与响应的语法树</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.3-诊断会话控制0x10——挂哪个科的号.html"><strong aria-hidden="true">6.2.3.</strong> 诊断会话控制0x10——挂哪个科的号</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.4-TesterPresent-0x3E——医生还在吗.html"><strong aria-hidden="true">6.2.4.</strong> TesterPresent · 0x3E——医生还在吗</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.5-ECU复位0x11——请病人重启一下.html"><strong aria-hidden="true">6.2.5.</strong> ECU复位0x11——请病人重启一下</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.6-安全访问0x27——获取病历权限.html"><strong aria-hidden="true">6.2.6.</strong> 安全访问0x27——获取病历权限</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.7-读取数据0x22——开化验单.html"><strong aria-hidden="true">6.2.7.</strong> 读取数据0x22——开化验单</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.8-写入数据0x2E——调整参数.html"><strong aria-hidden="true">6.2.8.</strong> 写入数据0x2E——调整参数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.9-读取DTC信息0x19——查看症状清单.html"><strong aria-hidden="true">6.2.9.</strong> 读取DTC信息0x19——查看症状清单</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.10-DTC状态字节——症状的八种状态.html"><strong aria-hidden="true">6.2.10.</strong> DTC状态字节——症状的八种状态</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.11-清除诊断信息0x14——消除症状.html"><strong aria-hidden="true">6.2.11.</strong> 清除诊断信息0x14——消除症状</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.12-控制DTC设置0x85——暂停症状记录.html"><strong aria-hidden="true">6.2.12.</strong> 控制DTC设置0x85——暂停症状记录</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.13-例行控制0x31——执行治疗.html"><strong aria-hidden="true">6.2.13.</strong> 例行控制0x31——执行治疗</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.14-输入输出控制0x2F——触诊.html"><strong aria-hidden="true">6.2.14.</strong> 输入输出控制0x2F——触诊</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.15-通信控制0x28——屏蔽打扰.html"><strong aria-hidden="true">6.2.15.</strong> 通信控制0x28——屏蔽打扰</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.16-上传下载0x34-35-36-37——手术四步曲.html"><strong aria-hidden="true">6.2.16.</strong> 上传下载0x34 · 35 · 36 · 37——手术四步曲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.17-按地址写内存0x3D——直接注射.html"><strong aria-hidden="true">6.2.17.</strong> 按地址写内存0x3D——直接注射</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.18-负响应码NRC——当ECU说不.html"><strong aria-hidden="true">6.2.18.</strong> 负响应码NRC——当ECU说不</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.19-周期读取0x2A——24小时心电图.html"><strong aria-hidden="true">6.2.19.</strong> 周期读取0x2A——24小时心电图</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.20-动态定义DID-0x2C——自定义化验单.html"><strong aria-hidden="true">6.2.20.</strong> 动态定义DID · 0x2C——自定义化验单</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.21-事件响应0x86——护士按铃.html"><strong aria-hidden="true">6.2.21.</strong> 事件响应0x86——护士按铃</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.22-文件传输0x38——病历归档.html"><strong aria-hidden="true">6.2.22.</strong> 文件传输0x38——病历归档</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/2.23-认证服务0x29——刷脸验证.html"><strong aria-hidden="true">6.2.23.</strong> 认证服务0x29——刷脸验证</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.3.</strong> 第三章 · 传输层</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/3.1-ISO-15765-2-CAN上的UDS.html"><strong aria-hidden="true">6.3.1.</strong> ISO · 15765 · 2 · CAN上的UDS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/3.2-多帧传输实战-CAN上的完整对话.html"><strong aria-hidden="true">6.3.2.</strong> 多帧传输实战 · CAN上的完整对话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/3.3-ISO-13400-DoIP协议.html"><strong aria-hidden="true">6.3.3.</strong> ISO · 13400 · DoIP协议</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/3.4-传输层对决-CAN与DoIP的共存.html"><strong aria-hidden="true">6.3.4.</strong> 传输层对决 · CAN与DoIP的共存</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.4.</strong> 第四章 · AUTOSAR DCM 源码解析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.1-DCM全景-AUTOSAR诊断栈的透明大厦.html"><strong aria-hidden="true">6.4.1.</strong> DCM全景 · AUTOSAR诊断栈的透明大厦</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.2-顶层调度器-Dcm-MainFunction任务编排.html"><strong aria-hidden="true">6.4.2.</strong> 顶层调度器 · Dcm · MainFunction任务编排</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.3-DSL-会话层的缓冲区管理与时序状态机.html"><strong aria-hidden="true">6.4.3.</strong> DSL · 会话层的缓冲区管理与时序状态机</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.4-DSD-SID分发路由与鉴权.html"><strong aria-hidden="true">6.4.4.</strong> DSD · SID分发路由与鉴权</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.5-DSP-UDS服务实现全景.html"><strong aria-hidden="true">6.4.5.</strong> DSP · UDS服务实现全景</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.6-DSP-会话与安全0x10与0x27的完整实现.html"><strong aria-hidden="true">6.4.6.</strong> DSP · 会话与安全0x10与0x27的完整实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.7-DSP-数据读取0x22与0x2E的DID查找与信号读写.html"><strong aria-hidden="true">6.4.7.</strong> DSP · 数据读取0x22与0x2E的DID查找与信号读写</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.8-DSP-DTC与上传下载0x19与0x34-37.html"><strong aria-hidden="true">6.4.8.</strong> DSP · DTC与上传下载0x19与0x34 · 37</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.9-CAN传输层CanTp实现.html"><strong aria-hidden="true">6.4.9.</strong> CAN传输层CanTp实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/4.10-配置系统Dcm_Lcfg.html"><strong aria-hidden="true">6.4.10.</strong> 配置系统Dcm_Lcfg</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.5.</strong> 第五章 · 亲手实现 uds-lite</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.1-uds-lite项目概述——教学级UDS实现.html"><strong aria-hidden="true">6.5.1.</strong> uds · lite项目概述——教学级UDS实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.2-报文编解码——SID与正响应位的消息引擎.html"><strong aria-hidden="true">6.5.2.</strong> 报文编解码——SID与正响应位的消息引擎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.3-ECU端——会话管理-SID分发与DID存储.html"><strong aria-hidden="true">6.5.3.</strong> ECU端——会话管理 · SID分发与DID存储</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.4-诊断仪端——逐服务发送与响应解析.html"><strong aria-hidden="true">6.5.4.</strong> 诊断仪端——逐服务发送与响应解析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.5-交互式诊断终端——命令行上的UDS控制台.html"><strong aria-hidden="true">6.5.5.</strong> 交互式诊断终端——命令行上的UDS控制台</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="uds-book/chapters/5.6-全线测试——一次完整的诊断闭环.html"><strong aria-hidden="true">6.5.6.</strong> 全线测试——一次完整的诊断闭环</a></span></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

