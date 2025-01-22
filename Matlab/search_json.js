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
      "title": "脚本与函数",
      "content": "",
      "url": "\\introduct\\scriptfunction.html",
      "children": []
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
        }
      ]
    },
    {
      "title": "仿真",
      "content": "",
      "url": "\\introduct\\debug.html",
      "children": [
        {
          "title": "调试",
          "url": "\\introduct\\debug.html#调试",
          "content": "调试Simulink提供全面的调试工具, 可设置调试时间, 暂停时间, 设置断点, 查看信号当前值等等叠加信息: 运行时将模块或信号的数据显示出来, 例如运行顺序, 模块类型, 信号属性等等\n工具: 可向前向后追溯选中信号, 注释模块, 显示信号当前值等等\n断点:\n\n信号条件断点, 当信号条件满足特定情况时暂停\n时间断点, 运行到暂停时间时自动暂停\n\n\n编译\n\n更新模型: 检测整个模型内是否缺少必要量(例如模型中用到的变量缺少定义)\n更新模块: 更新所在模块\n更新图: 更新当前所在StateFlow\n\n\n仿真 设置仿真时间, 开始运行, 步进步退等\n"
        },
        {
          "title": "新建测试框架",
          "url": "\\introduct\\debug.html#新建测试框架",
          "content": "新建测试框架"
        },
        {
          "title": "创建测试框架",
          "url": "\\introduct\\debug.html#新建测试框架-创建测试框架",
          "content": "创建测试框架为当前模块添加仿真测试框架 模块右键 -> 测试框架 -> 新建测试框架创建仿真测试框架前需保证当前模型运行无报错, 因为创建测试框架时, Simulink会尝试运行该模型\n2021版本Matlab测试框架会保存在模型文件中, 不会另外生成单独测试模型\n"
        },
        {
          "title": "管理框架",
          "url": "\\introduct\\debug.html#新建测试框架-管理框架",
          "content": "管理框架新建测试框架的模块有下角有特定图标, 点击可显示为该模块添加的测试框架(也可通过模块右键 -> 测试框架 -> 管理测试框架用来打开删除框架)"
        },
        {
          "title": "编辑测试框架",
          "url": "\\introduct\\debug.html#新建测试框架-编辑测试框架",
          "content": "编辑测试框架新建框架时, 可选择基础的输出与输出(普通输入输出端口, 使用SignalBuilder作为输入, Scope作为输出等等), 测试框架本质上仍是一个普通的模型, 可对其做任何对模型可做的更改"
        },
        {
          "title": "仿真",
          "url": "\\introduct\\debug.html#仿真",
          "content": "仿真"
        },
        {
          "title": "激活仿真",
          "url": "\\introduct\\debug.html#仿真-激活仿真",
          "content": "激活仿真将以上框架修改, 将上个周期的输出作为输入再次计算, 添加Scope观测窗口, 设置仿真时间为2s, 点击运行Scope像示波器一样记录仿真过程中其输入端口的输入值"
        },
        {
          "title": "信号观测",
          "url": "\\introduct\\debug.html#仿真-信号观测",
          "content": "信号观测Scope示波器Scope模块记录仿真时输入端口输入的信号值的变化输入端口的信号线上需要命名, 该命名会体现在Scope显示框上用于区分不同信号\nDisplay显示模块Display显示当前值, 不可回放(不建议用)数据查看器使用数据查看器回放数据前, 必须记录该信号(记录后, 信号接口处会出现一个类似Wifi信号强度的图标)运行完毕后, 点击数据查看器可回放数据. 当模型比较复杂需要记录多个模块, 多层信号时, 使用数据查看器比较方便快捷, 同时数据查看器还支持数据对比, 可以对比本次与上次之间的差别"
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
  "m语言": [
    {
      "title": "m语言",
      "content": "m语言为Matlab使用的编程语言, 提供了......\n",
      "url": "\\mlanguage\\index.html",
      "children": []
    },
    {
      "title": "基础指令",
      "content": "",
      "url": "\\mlanguage\\basecmd.html",
      "children": []
    },
    {
      "title": "variable",
      "content": "",
      "url": "\\mlanguage\\variable.html",
      "children": []
    },
    {
      "title": "程序流控制指令",
      "content": "",
      "url": "\\mlanguage\\controlflow.html",
      "children": [
        {
          "title": "条件判断",
          "url": "\\mlanguage\\controlflow.html#条件判断",
          "content": "条件判断"
        },
        {
          "title": "if-else",
          "url": "\\mlanguage\\controlflow.html#条件判断-if-else",
          "content": "if-else"
        },
        {
          "title": "switch-case",
          "url": "\\mlanguage\\controlflow.html#条件判断-switch-case",
          "content": "switch-case"
        },
        {
          "title": "for循环",
          "url": "\\mlanguage\\controlflow.html#for循环",
          "content": "for循环"
        },
        {
          "title": "while循环",
          "url": "\\mlanguage\\controlflow.html#while循环",
          "content": "while循环"
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
  "博客": [
    {
      "title": "Blogs",
      "content": "该页面用于存放专题博客",
      "url": "\\blogs\\index.html",
      "children": []
    },
    {
      "title": "数据的存储常见的数据存储方式",
      "content": "在模型搭建中, 我们会使用到各种各样的数据, 输入 输出 参数 自定义信号等\n对于一个数据来讲, 又包含其数据类型的指定, 数值设定. 如果涉及到代码生成, 还要关注其在代码中声明和定义的方式\nSimulink模型搭建模型仿真时可以比较随意地设置, 很少影响仿真结果. 但当需要代码生成时, 相关变量的定义与使用要求就会比较严格, 避免代码集成时造成编译错误\n",
      "url": "\\blogs\\datastorage.html",
      "children": [
        {
          "title": "存放在m脚本中",
          "url": "\\blogs\\datastorage.html#存放在m脚本中",
          "content": "存放在m脚本中在m脚本中依次定义数值\n"
        },
        {
          "title": "定义参数(Parameter)",
          "url": "\\blogs\\datastorage.html#存放在m脚本中-定义参数parameter",
          "content": "定义参数(Parameter)% define `Param01` as a ParamenterParam01 = Simulink.Parameter;\n% set default value as 1\nParam01.Value = 1;\nParam01.Complexity = 'real';\n% `CodeInfo` define properties which influence how code generate\nParam01.CoderInfo.StorageClass = 'Custom';\nParam01.CoderInfo.Identifier = '';\nParam01.CoderInfo.Alignment = -1;\n% when generate, Model whill include  which defined Param01\nParam01.CoderInfo.CustomStorageClass = 'ImportFromFile';\nParam01.CoderInfo.CustomAttributes.HeaderFile = 'demo.h';\nParam01.CoderInfo.CustomAttributes.PreserveDimensions = false;\nParam01.Description = 'Parameter export Demo for blog';\nParam01.DataType = 'uint8';\nParam01.Min = 0;\nParam01.Max = 15;\nParam01.DocUnits = 'm';\n将上述命令保存为一个m文件并运行, 此时工作区能生成一个Parameter变量, 其属性与命令行定义一致生成c代码:#include \"demo.h\""
        },
        {
          "title": "定义数据类型(AliasType)",
          "url": "\\blogs\\datastorage.html#存放在m脚本中-定义数据类型aliastype",
          "content": "定义数据类型(AliasType)m命令定义Demo_U8 = Simulink.AliasType;Demo_U8.Description = '';\nDemo_U8.DataScope = 'Auto';\nDemo_U8.HeaderFile = '';\nDemo_U8.BaseType = 'uint8';\n生成c代码:typedef uint8_T Demo_U8;"
        },
        {
          "title": "其他注意事项",
          "url": "\\blogs\\datastorage.html#存放在m脚本中-其他注意事项",
          "content": "其他注意事项除以上外, 常用的 还可以定义枚举, 总线(bus 对应代码中的结构体类型)等等\n可以将各种各样的定义全部汇集到一个m文件中, 模型需要运行时运行该文件, 可依次在工作区内新建各种类型与变量\nm文件执行时按照从上至下的顺序执行, 因此, 数据类型的定义一定要先于用到该类型变量的定义, 否则运行时会报错\nm脚本基础结构base data type define(Alias Enum)\nbus define(in case bus element using costume base datatype)\nsignal parameter define\nm脚本必须运行数据方可加载到工作区, 所以每次在模型编译前, 务必保证所需要的数据均已加载\n"
        },
        {
          "title": "存放在数据词典(sldd)中",
          "url": "\\blogs\\datastorage.html#存放在数据词典sldd中",
          "content": "存放在数据词典(sldd)中数据词典(sldd)类似于一个工作区, 其中可定义各种各样的数据类型及变量, 当打开该词典时, m命令和Simulnk模型可获取其中的内容\nsldd提供可视化的操作界面, 可以摆脱命令行的限制, 方面维护\n"
        },
        {
          "title": "sldd新建",
          "url": "\\blogs\\datastorage.html#存放在数据词典sldd中-sldd新建",
          "content": "sldd新建命令行新建略模型资源浏览器(Model Explorer)新建在模型空白处点击鼠标右键, 选择第一个Explorer即可打开\n如没有模型, 可在Matlab命令行输入daexplr打开\n文件-> 新建 选择数据词典"
        },
        {
          "title": "sldd操作",
          "url": "\\blogs\\datastorage.html#存放在数据词典sldd中-sldd操作",
          "content": "sldd操作新增属性或变量选中sldd中的Design Data, 工具栏中添加即可添加各种类型与变量基础工作区也可使用操作, 选中Base Workspace即可\n数据在基础工作区与sldd之前的移动与复制在模型资源浏览器中, sldd中的数据和工作区中的数据可任意剪切复制, 且支持拖动操作. 故如果要将由m脚本存储的数据转换为由sldd维护, 可运行m脚本将数据加载至基础工作区, 打开资源浏览器, 选中基础工作区内的所有变量, 直接拖入sldd中保存即可sldd与模型的链接模型属性中可链接到其需要引用的sldd文件, 引用后打开模型时会自动加载sldd, 可省去手动打开sldd的麻烦"
        },
        {
          "title": "sldd的嵌套",
          "url": "\\blogs\\datastorage.html#存放在数据词典sldd中-sldd的嵌套",
          "content": "sldd的嵌套在Matlab设计中, 一个模型只可引用一个数据词典, 如果数据类型, 标定参数, 信号量在多个数据词典中维护时, 需要使用sldd的嵌套所谓sldd嵌套, 是因为sldd可以引用另外的slddsldd的引用规则与m语言定义数据结构类似, 此sldd引用到的数据类型定义, 必须在引用的sldd中体现, 具体如下:Demo.sldd中使用了由bus_dd.sldd定义的总线;\nbus_dd.sldd总线元素中使用了由Enum_dd.sldd定义的枚举\n"
        }
      ]
    },
    {
      "title": "使用脚本修改模型",
      "content": "Matlab提供了强大的m命令, 可以通过脚本实现几乎所有个人用户能执行的操作, 甚至更加快捷\n",
      "url": "\\blogs\\script2modifymodel.html",
      "children": [
        {
          "title": "句柄的引入",
          "url": "\\blogs\\script2modifymodel.html#句柄的引入",
          "content": "句柄的引入针对模型的命令行操作, 需要有面向对象的思维, 在模型中, 每个模块每条信号线都是一个对象, 每个模块的端口也可以看作一个对象, 信号的起点与终点也可以看作一个对象对于每个对象, Simulink均分配了一个独一无二的id, 该id就是句柄"
        },
        {
          "title": "获取句柄",
          "url": "\\blogs\\script2modifymodel.html#句柄的引入-获取句柄",
          "content": "获取句柄Handles = find_system(bdroot, 'FindAll','on','type','block','BlockType','Inport');可通过find_system命令获取句柄, 后面参数包括目标模型, 搜索类型, 模块类型, 以上命令可以理解为\"搜索当前激活的模型中所有的Inpot模块的句柄\"返回值为一个数组 [1.773000976562500e+03;1.775000732421875e+03]数组类型很重要, Matlab内置了丰富的针对数组的操作, 可用类似的函数处理, 减少不必要的for循环\n"
        },
        {
          "title": "获取属性",
          "url": "\\blogs\\script2modifymodel.html#句柄的引入-获取属性",
          "content": "获取属性句柄为特定格式, 无法从句柄中获取可读信息, 可通过进一步操作获取模块的属性\nget(Handles(1))通过get获取句柄1的属性(内容非常非常多)>> get(Handles(2))                                        Path: 'test/increase'\n                                        Name: 'input'\n                                         Tag: ''\n                                 Description: ''\n                                        Type: 'block'\n                                      Parent: 'test/increase'\n                                      Handle: 1.7750e+03\n                             HiliteAncestors: 'none'\n                             RequirementInfo: ''\n                                    FontName: 'auto'\n                                    FontSize: -1\n                                  FontWeight: 'auto'\n                                   FontAngle: 'auto'\n                                    Selected: 'off'\n                                    MaskType: ''\n                             MaskDescription: ''\n                                    MaskHelp: ''\n                            MaskPromptString: ''\n                             MaskStyleString: ''\n                               MaskVariables: ''\n                      MaskTunableValueString: ''\n                          MaskCallbackString: ''\n                            MaskEnableString: ''\n                        MaskVisibilityString: ''\n                           MaskToolTipString: ''\n                          MaskVarAliasString: ''\n                          MaskInitialization: ''\n                          MaskSelfModifiable: 'off'\n                                 MaskDisplay: ''\n                            MaskBlockDVGIcon: ''\n                               MaskIconFrame: 'on'\n                              MaskIconOpaque: 'opaque'\n                              MaskIconRotate: 'none'\n                              MaskPortRotate: 'default'\n                               MaskIconUnits: 'autoscale'\n                             MaskValueString: ''\n                    MaskRunInitForIconRedraw: 'analyze'\n                           MaskTabNameString: ''\n                                        Mask: 'off'\n                               MaskCallbacks: {0×1 cell}\n                                 MaskEnables: {0×1 cell}\n                                   MaskNames: {0×1 cell}\n                      MaskPropertyNameString: ''\n                                 MaskPrompts: {0×1 cell}\n                                  MaskStyles: {0×1 cell}\n                           MaskTunableValues: {0×1 cell}\n                                  MaskValues: {0×1 cell}\n                         MaskToolTipsDisplay: {0×1 cell}\n                            MaskVisibilities: {0×1 cell}\n                              MaskVarAliases: {0×1 cell}\n                             MaskWSVariables: []\n                                MaskTabNames: {0×1 cell}\n                                  MaskObject: []\n                                       Ports: [0 1 0 0 0 0 0 0 0]\n                                    Position: [20 38 50 52]\n                                 Orientation: 'right'\n                            PortRotationType: 'default'\n                             ForegroundColor: 'black'\n                             BackgroundColor: 'white'\n                                  DropShadow: 'off'\n                                      IOType: 'none'\n                               NamePlacement: 'normal'\n                                NameLocation: 'bottom'\n                                    ShowName: 'on'\n                           HideAutomaticName: 'on'\n                                    Priority: ''\n                                   Commented: 'off'\n                       CodeProfilingOverride: 'inherit'\n                      AttributesFormatString: ''\n                           InstantiateOnLoad: 'off'\n                         PolySpaceEndComment: ''\n                       PolySpaceStartComment: ''\n                               AncestorBlock: ''\n                              ReferenceBlock: ''\n                           SourceLibraryInfo: ''\n                              LibraryVersion: ''\n                          UserDataPersistent: 'off'\n                                    UserData: []\n                            CompiledIsActive: 'on'\n                         CompiledVariantInfo: [1×1 struct]\n                                     RTWdata: []\n                                     HDLData: []\n                                 Diagnostics: ''\n                            DialogParameters: [1×1 struct]\n                   IntrinsicDialogParameters: [1×1 struct]\n                         AlgorithmParameters: [1×1 struct]\n                SecondaryAlgorithmParameters: [1×1 struct]\n                          CompiledSampleTime: [-1 0]\n                            InputSignalNames: {1×0 cell}\n                           OutputSignalNames: {''}\n                         ModelParamTableInfo: []\n                StatePerturbationForJacobian: 'auto'\n    SCDEnableBlockLinearizationSpecification: 'off'\n          SCDBlockLinearizationSpecification: []\n                                     CopyFcn: ''\n                                   DeleteFcn: ''\n                               UndoDeleteFcn: ''\n                                     LoadFcn: ''\n                               ModelCloseFcn: ''\n                                  PreSaveFcn: ''\n                                 PostSaveFcn: ''\n                                     InitFcn: ''\n                                 PreStartFcn: ''\n                                    StartFcn: ''\n                                    PauseFcn: ''\n                                 ContinueFcn: ''\n                                     StopFcn: ''\n                               NameChangeFcn: ''\n                                ClipboardFcn: ''\n                                  DestroyFcn: ''\n                                  PreCopyFcn: ''\n                                     OpenFcn: ''\n                                    CloseFcn: ''\n                                PreDeleteFcn: ''\n                              ParentCloseFcn: ''\n                                     MoveFcn: ''\n                                   BlockType: 'Inport'\n                            BlockDescription: '为子系统或模型提供输入端口。↵对于触发子系统，'通过延迟外部信号锁存输入' 生成在前一时间步的子系统输入值。↵对于函数调用子系统，启用 '针对函数调用子系统输出的反馈信号锁存输入' 可防止此子系统的输入值在其执行过程中发生变化。↵其他参数可用于显式指定输入信号属性。'\n                               BlockKeywords: \"\"\n                                  LinkStatus: 'none'\n                            StaticLinkStatus: 'none'\n                            PortConnectivity: [1×1 struct]\n                                 PortHandles: [1×1 struct]\n                                 LineHandles: [1×1 struct]\n                          CompiledPortWidths: [0×0 struct]\n                      CompiledPortDimensions: [0×0 struct]\n                       CompiledPortDataTypes: [0×0 struct]\n                           CompiledPortUnits: [0×0 struct]\n                  CompiledPortComplexSignals: [0×0 struct]\n                       CompiledPortFrameData: [0×0 struct]\n                   DataTypeOverride_Compiled: 'UseLocalSettings'\n              MinMaxOverflowLogging_Compiled: 'UseLocalSettings'\n                                Capabilities: [1×1 Capabilities]\n                             IOSignalStrings: []\n                               RuntimeObject: [0×1 double]\n                         ExtModeUploadOption: 'none'\n                     ExtModeLoggingSupported: 'off'\n                          ExtModeLoggingTrig: 'off'\n                   TargetArchitectureMapping: {}\n                                        Port: '1'\n                                    PortName: 'input'\n                                     Element: ''\n                            IsBusElementPort: 'off'\n                                 IconDisplay: 'Port number'\n                          OutputFunctionCall: 'off'\n                                      OutMin: '[]'\n                                      OutMax: '[]'\n                              OutDataTypeStr: 'Inherit: auto'\n                                   LockScale: 'off'\n                           BusOutputAsStruct: 'off'\n                               BusVirtuality: 'inherit'\n                                        Unit: 'inherit'\n                              PortDimensions: '-1'\n                                  VarSizeSig: 'Inherit'\n                                  SampleTime: '-1'\n                                  SignalType: 'auto'\n                LatchByDelayingOutsideSignal: 'off'\n                LatchInputForFeedbackSignals: 'off'\n                                 Interpolate: 'on'\n                                InputConnect: ''\n                                    DataMode: 'inherit'\n            MessageQueueUseDefaultAttributes: 'on'\n                        MessageQueueCapacity: '1'\n                            MessageQueueType: 'LIFO'\n                     MessageQueueOverwriting: 'on'\n可通过get_param获取特定属性 (get命令同样适用)>> get_param(Handles(1),'PortName')\nans =\n\n    'Input'\n"
        },
        {
          "title": "修改属性",
          "url": "\\blogs\\script2modifymodel.html#句柄的引入-修改属性",
          "content": "修改属性Matlab提供了get get_Param命令获取属性, 同样, 可使用set set_paramset(LineHandle,'MustResolveToSignalObject',0);由此可见, 句柄是m命令操作模型模块的重要接口\n针对模型的修改, 通常都是通过筛选符合要求的句柄, 对其属性修改完成的\n"
        },
        {
          "title": "新增模块与信号线",
          "url": "\\blogs\\script2modifymodel.html#新增模块与信号线",
          "content": "新增模块与信号线"
        },
        {
          "title": "新增模块",
          "url": "\\blogs\\script2modifymodel.html#新增模块与信号线-新增模块",
          "content": "新增模块"
        },
        {
          "title": "模块的连接",
          "url": "\\blogs\\script2modifymodel.html#新增模块与信号线-模块的连接",
          "content": "模块的连接"
        },
        {
          "title": "修改模型设置",
          "url": "\\blogs\\script2modifymodel.html#修改模型设置",
          "content": "修改模型设置"
        }
      ]
    }
  ]
}