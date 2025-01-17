---
banner:
  name: 'Simulink代码生成及集成文档'
  desc: '基于Simulink平台, 生成c代码并集成到控制器中运行 (作者没有前端基础, 正在摸索)'
  btns: 
    - { name: '官方文档', href: 'http://homeassistant:8123', primary: true }
    - { name: 'HA官网 >', href: 'https://www.home-assistant.io/' }
  caption: '当前版本: v0.0.2'
features: 
  - { name: '图形化编程', desc: '低代码搭建模型' }
  - { name: '高度自定义仿真', desc: '既可为最小单元搭建仿真模型, 也可将各模型集合联合仿真' }
  - { name: '离线Debug', desc: '采集到控制器内部数据, 可便利搭建仿真模型复原模型内部每个时刻的状态' }
  - { name: '强大的自动化脚本', desc: '与m语言高度适配, 大幅度辅助模型搭建与仿真, 减少重复工作' }

footer:
  copyRight:
    name: 'Changzhen Liu'
    href: 'https://github.com/changzhen976'
  links:
    邮箱:
      - { name: 'Email: changzhen976@gmail.com', href: 'mailto:changzhen976@gmail.com'}
    Git仓库:
      - { name: 'Github', href: 'https://changzhen976.github.io/' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />