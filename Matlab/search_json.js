window.ydoc_plugin_search_json = {
  "基本知识": [
    {
      "title": "title",
      "content": "",
      "url": "\\introduct\\index.html",
      "children": []
    },
    {
      "title": "Matlab使用基础操作",
      "content": "",
      "url": "\\introduct\\matlabintro.html",
      "children": [
        {
          "title": "应用界面",
          "url": "\\introduct\\matlabintro.html#应用界面",
          "content": "应用界面"
        },
        {
          "title": "菜单栏",
          "url": "\\introduct\\matlabintro.html#应用界面-菜单栏",
          "content": "菜单栏略(和Simulink没太大关系)\n"
        },
        {
          "title": "文件浏览器",
          "url": "\\introduct\\matlabintro.html#应用界面-文件浏览器",
          "content": "文件浏览器浏览文件文件夹, 可导航到任意想要操作的文件夹默认打开时为Matlab安装目录, 如需更改, 可编辑Matlab快捷方式 \"起始位置\" 属性, 例如 E:\\MatlabWorkspace打开后文件夹与文件为灰色, 右键有选项添加到路径 -> 选定的文件夹 | 选定的文件夹与子文件夹, 详细说明见设置路径"
        },
        {
          "title": "命令行窗口",
          "url": "\\introduct\\matlabintro.html#应用界面-命令行窗口",
          "content": "命令行窗口数值计算>> 1 + 1\nans =\n\n     2\n\n>> \n调用函数命令行依次输入以下命令, 调用绘图函数命令行末尾添加分号\";\"不会立即输出当前变量值\nx = -2 : 0.02 : 2;y = x .^ 2;\nplot(x, y);\n运行脚本脚本为一串命令的集合将以上命令添加到m文件中, 点击运行, 输出与上面同样"
        },
        {
          "title": "基础工作区(Base WorkSpace)",
          "url": "\\introduct\\matlabintro.html#应用界面-基础工作区base-workspace",
          "content": "基础工作区(Base WorkSpace)基础工作区用于缓存命令行中定义的变量, 可直接双击查看编辑属性脚本与Simulink模型均能直接获取工作区中的变量"
        },
        {
          "title": "设置路径",
          "url": "\\introduct\\matlabintro.html#设置路径",
          "content": "设置路径路径中包含的脚本与模型可以理解成Matlab可直接获取的, 否则可能需要使用绝对路径才能获取(函数必须包含路径才能正常调用)菜单栏 -> 环境 -> 设置路径中可以查看当前包含的路径, Matlab有默认包含的文件夹, 根据工程需要按需包含, 自定义脚本可放在统一文件夹设置默认包含, 方便直接调用"
        }
      ]
    },
    {
      "title": "Simulink使用基础操作",
      "content": "",
      "url": "\\introduct\\simulinkintro.html",
      "children": [
        {
          "title": "新建Simulink模型",
          "url": "\\introduct\\simulinkintro.html#新建simulink模型",
          "content": "新建Simulink模型点击Simulink图标打开Simulink功能点击空白模型新建模型上述为新建单个模型, 如需新建工程, 可按需求新建不同工程\n在Simulink工程中, 可管理多个模型, 设置特定的包含路径, 设置打开工程关闭工程时自动运行的脚本\n后续有专题博客讲解\n"
        },
        {
          "title": "添加模块",
          "url": "\\introduct\\simulinkintro.html#添加模块",
          "content": "添加模块"
        },
        {
          "title": "从库浏览器新增",
          "url": "\\introduct\\simulinkintro.html#添加模块-从库浏览器新增",
          "content": "从库浏览器新增打开库浏览器, 选中需要的模块, 按住拖动只模型空白区域, 新增完成"
        },
        {
          "title": "搜索新增",
          "url": "\\introduct\\simulinkintro.html#添加模块-搜索新增",
          "content": "搜索新增点击模型空白处, 使光标聚焦在模型编辑区域, 直接在键盘中输入模块名, 可触发模块搜索框, 选中所需模块, 新增完成"
        },
        {
          "title": "模型搭建",
          "url": "\\introduct\\simulinkintro.html#模型搭建",
          "content": "模型搭建通过确认输入输出, 确认计算过程, 可搭建所需要的模型例, 搭建加1模型, 将输入加1输出"
        },
        {
          "title": "调试",
          "url": "\\introduct\\simulinkintro.html#调试",
          "content": "调试Simulink提供全面的调试工具, 可设置调试时间, 暂停时间, 设置断点, 查看信号当前值等等叠加信息: 运行时将模块或信号的数据显示出来, 例如运行顺序, 模块类型, 信号属性等等\n工具: 可向前向后追溯选中信号, 注释模块, 显示信号当前值等等\n断点:\n\n信号条件断点, 当信号条件满足特定情况时暂停\n时间断点, 运行到暂停时间时自动暂停\n\n\n编译\n\n更新模型: 检测整个模型内是否缺少必要量(例如模型中用到的变量缺少定义)\n更新模块: 更新所在模块\n更新图: 更新当前所在StateFlow\n\n\n仿真 设置仿真时间, 开始运行, 步进步退等\n"
        },
        {
          "title": "仿真",
          "url": "\\introduct\\simulinkintro.html#仿真",
          "content": "仿真"
        },
        {
          "title": "新建测试框架",
          "url": "\\introduct\\simulinkintro.html#仿真-新建测试框架",
          "content": "新建测试框架创建测试框架为当前模块添加仿真测试框架 模块右键 -> 测试框架 -> 新建测试框架创建仿真测试框架前需保证当前模型运行无报错, 因为创建测试框架时, Simulink会尝试运行该模型\n2021版本Matlab测试框架会保存在模型文件中, 不会另外生成单独测试模型\n管理框架新建测试框架的模块有下角有特定图标, 点击可显示为该模块添加的测试框架(也可通过模块右键 -> 测试框架 -> 管理测试框架用来打开删除框架)编辑测试框架新建框架时, 可选择基础的输出与输出(普通输入输出端口, 使用SignalBuilder作为输入, Scope作为输出等等), 测试框架本质上仍是一个普通的模型, 可对其做任何对模型可做的更改"
        },
        {
          "title": "仿真",
          "url": "\\introduct\\simulinkintro.html#仿真-仿真",
          "content": "仿真激活仿真将以上框架修改, 将上个周期的输出作为输入再次计算, 添加Scope观测窗口, 设置仿真时间为2s, 点击运行Scope像示波器一样记录仿真过程中其输入端口的输入值信号观测Scope示波器Scope模块记录仿真时输入端口输入的信号值的变化输入端口的信号线上需要命名, 该命名会体现在Scope显示框上用于区分不同信号\nDisplay显示模块Display显示当前值, 不可回放(不建议用)数据查看器使用数据查看器回放数据前, 必须记录该信号(记录后, 信号接口处会出现一个类似Wifi信号强度的图标)运行完毕后, 点击数据查看器可回放数据. 当模型比较复杂需要记录多个模块, 多层信号时, 使用数据查看器比较方便快捷, 同时数据查看器还支持数据对比, 可以对比本次与上次之间的差别"
        }
      ]
    },
    {
      "title": "运行命令行",
      "content": "Introduction",
      "url": "\\introduct\\runcmd.html",
      "children": [
        {
          "title": "title",
          "url": "\\introduct\\runcmd.html#title",
          "content": "titlecontent"
        }
      ]
    },
    {
      "title": "运行脚本",
      "content": "This is home page of documents book.",
      "url": "\\introduct\\runscript.html",
      "children": []
    },
    {
      "title": "运行模型",
      "content": "Introduction",
      "url": "\\introduct\\runmodle.html",
      "children": [
        {
          "title": "title",
          "url": "\\introduct\\runmodle.html#title",
          "content": "titlecontent"
        }
      ]
    }
  ],
  "模型搭建": [
    {
      "title": "模型搭建规则及技巧",
      "content": "用于存放模型搭建规则和技巧",
      "url": "\\model\\index.html",
      "children": []
    },
    {
      "title": "HA 本地服务器的安装",
      "content": "...",
      "url": "\\model\\installation.html",
      "children": []
    },
    {
      "title": "Introduction",
      "content": "Introduction",
      "url": "\\model\\intro.html",
      "children": [
        {
          "title": "title",
          "url": "\\model\\intro.html#title",
          "content": "titlecontent"
        }
      ]
    },
    {
      "title": "env",
      "content": "env",
      "url": "\\model\\env.html",
      "children": [
        {
          "title": "title",
          "url": "\\model\\env.html#title",
          "content": "titlecontent"
        },
        {
          "title": "sub-title",
          "url": "\\model\\env.html#title-sub-title",
          "content": "sub-titlecontent"
        }
      ]
    }
  ],
  "代码生成与集成": [
    {
      "title": "代码生成",
      "content": "该目录下放置代码生成中的一些知识与技巧",
      "url": "\\codegenerate\\index.html",
      "children": []
    }
  ],
  "m脚本": [
    {
      "title": "HA",
      "content": "This is home page of documents book.",
      "url": "\\script\\index.html",
      "children": []
    }
  ],
  "博客": [
    {
      "title": "Blogs",
      "content": "该页面用于存放专题博客",
      "url": "\\blogs\\index.html",
      "children": []
    }
  ]
}