---
banner:
  name: 'HomeAssistant 配置文档'
  desc: '基于HomeAssistant平台, 集成相关组件及配置'
  btns: 
    - { name: '登录本地HA', href: 'http://homeassistant:8123', primary: true }
    - { name: 'HA官网 >', href: 'https://www.home-assistant.io/' }
  caption: '当前版本: v0.0.2'
features: 
  - { name: 'HA基础配置', desc: 'HomeAssitant的基础配置' }
  - { name: 'Node Red', desc: '图形化编程脚本工具, 与HA搭配完成复杂自动化' }
  - { name: 'ESPHome', desc: '使用Yaml执行为ESP控制器编程' }
  - { name: 'MQTT Server', desc: 'MQTT物联网常用协议, DIY的控制器可用过该统一协议完成通信' }

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