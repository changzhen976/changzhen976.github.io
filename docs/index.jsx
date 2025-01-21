---
banner:
  name: 'Simulink代码生成及集成'
  desc: '使用Simulink, 从模型搭建到生成c代码并集成到控制器中运行,全流程文档(基于Matlab R2021b) (作者没有前端基础, 正在摸索)'
  btns: 
    - { name: '官方文档', href: 'https://ww2.mathworks.cn/help/simulink/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/changzhen976/Simulink-Demo.git' }
  caption: '当前版本: v0.0.2'
features: 
  - { name: '博客精选', desc: '博客中比较关键的篇章', href: './blogs/index.html' }
  - { name: '博客精选', desc: '经常遇到的问题解答', href: './blogs/index.html' }
  - { name: '博客精选', desc: '或者正在编写的, 可能存在遗漏的篇幅', href: './blogs/index.html' }
footer:
  copyRight:
    name: 'Changzhen Liu'
    href: 'https://github.com/changzhen976'
  links:
    邮箱:
      - { name: 'Email: changzhen976@gmail.com', href: 'mailto:changzhen976@gmail.com'}
    Git仓库:
      - { name: 'Github', href: 'https://github.com/changzhen976/changzhen976.github.io.git' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />