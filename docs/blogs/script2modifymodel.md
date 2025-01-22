# 使用脚本修改模型

> Matlab提供了强大的m命令, 可以通过脚本实现几乎所有个人用户能执行的操作, 甚至更加快捷

## 句柄的引入

针对模型的命令行操作, 需要有面向对象的思维, 在模型中, 每个模块每条信号线都是一个对象, 每个模块的端口也可以看作一个对象, 信号的起点与终点也可以看作一个对象

对于每个对象, Simulink均分配了一个独一无二的id, 该id就是句柄

### 获取句柄

```matlab
Handles = find_system(bdroot, 'FindAll','on','type','block','BlockType','Inport');
```

可通过`find_system`命令获取句柄, 后面参数包括目标模型, 搜索类型, 模块类型, 以上命令可以理解为"搜索当前激活的模型中所有的`Inpot`模块的句柄"

返回值为一个数组 `[1.773000976562500e+03;1.775000732421875e+03]`

> **数组类型很重要**, Matlab内置了丰富的针对数组的操作, 可用类似的函数处理, 减少不必要的for循环

### 获取属性

> 句柄为特定格式, 无法从句柄中获取可读信息, 可通过进一步操作获取模块的属性

```matlab
get(Handles(1))
```

通过`get`获取句柄1的属性(内容非常非常多)

```matlab
>> get(Handles(2))
                                        Path: 'test/increase'
                                        Name: 'input'
                                         Tag: ''
                                 Description: ''
                                        Type: 'block'
                                      Parent: 'test/increase'
                                      Handle: 1.7750e+03
                             HiliteAncestors: 'none'
                             RequirementInfo: ''
                                    FontName: 'auto'
                                    FontSize: -1
                                  FontWeight: 'auto'
                                   FontAngle: 'auto'
                                    Selected: 'off'
                                    MaskType: ''
                             MaskDescription: ''
                                    MaskHelp: ''
                            MaskPromptString: ''
                             MaskStyleString: ''
                               MaskVariables: ''
                      MaskTunableValueString: ''
                          MaskCallbackString: ''
                            MaskEnableString: ''
                        MaskVisibilityString: ''
                           MaskToolTipString: ''
                          MaskVarAliasString: ''
                          MaskInitialization: ''
                          MaskSelfModifiable: 'off'
                                 MaskDisplay: ''
                            MaskBlockDVGIcon: ''
                               MaskIconFrame: 'on'
                              MaskIconOpaque: 'opaque'
                              MaskIconRotate: 'none'
                              MaskPortRotate: 'default'
                               MaskIconUnits: 'autoscale'
                             MaskValueString: ''
                    MaskRunInitForIconRedraw: 'analyze'
                           MaskTabNameString: ''
                                        Mask: 'off'
                               MaskCallbacks: {0×1 cell}
                                 MaskEnables: {0×1 cell}
                                   MaskNames: {0×1 cell}
                      MaskPropertyNameString: ''
                                 MaskPrompts: {0×1 cell}
                                  MaskStyles: {0×1 cell}
                           MaskTunableValues: {0×1 cell}
                                  MaskValues: {0×1 cell}
                         MaskToolTipsDisplay: {0×1 cell}
                            MaskVisibilities: {0×1 cell}
                              MaskVarAliases: {0×1 cell}
                             MaskWSVariables: []
                                MaskTabNames: {0×1 cell}
                                  MaskObject: []
                                       Ports: [0 1 0 0 0 0 0 0 0]
                                    Position: [20 38 50 52]
                                 Orientation: 'right'
                            PortRotationType: 'default'
                             ForegroundColor: 'black'
                             BackgroundColor: 'white'
                                  DropShadow: 'off'
                                      IOType: 'none'
                               NamePlacement: 'normal'
                                NameLocation: 'bottom'
                                    ShowName: 'on'
                           HideAutomaticName: 'on'
                                    Priority: ''
                                   Commented: 'off'
                       CodeProfilingOverride: 'inherit'
                      AttributesFormatString: ''
                           InstantiateOnLoad: 'off'
                         PolySpaceEndComment: ''
                       PolySpaceStartComment: ''
                               AncestorBlock: ''
                              ReferenceBlock: ''
                           SourceLibraryInfo: ''
                              LibraryVersion: ''
                          UserDataPersistent: 'off'
                                    UserData: []
                            CompiledIsActive: 'on'
                         CompiledVariantInfo: [1×1 struct]
                                     RTWdata: []
                                     HDLData: []
                                 Diagnostics: ''
                            DialogParameters: [1×1 struct]
                   IntrinsicDialogParameters: [1×1 struct]
                         AlgorithmParameters: [1×1 struct]
                SecondaryAlgorithmParameters: [1×1 struct]
                          CompiledSampleTime: [-1 0]
                            InputSignalNames: {1×0 cell}
                           OutputSignalNames: {''}
                         ModelParamTableInfo: []
                StatePerturbationForJacobian: 'auto'
    SCDEnableBlockLinearizationSpecification: 'off'
          SCDBlockLinearizationSpecification: []
                                     CopyFcn: ''
                                   DeleteFcn: ''
                               UndoDeleteFcn: ''
                                     LoadFcn: ''
                               ModelCloseFcn: ''
                                  PreSaveFcn: ''
                                 PostSaveFcn: ''
                                     InitFcn: ''
                                 PreStartFcn: ''
                                    StartFcn: ''
                                    PauseFcn: ''
                                 ContinueFcn: ''
                                     StopFcn: ''
                               NameChangeFcn: ''
                                ClipboardFcn: ''
                                  DestroyFcn: ''
                                  PreCopyFcn: ''
                                     OpenFcn: ''
                                    CloseFcn: ''
                                PreDeleteFcn: ''
                              ParentCloseFcn: ''
                                     MoveFcn: ''
                                   BlockType: 'Inport'
                            BlockDescription: '为子系统或模型提供输入端口。↵对于触发子系统，'通过延迟外部信号锁存输入' 生成在前一时间步的子系统输入值。↵对于函数调用子系统，启用 '针对函数调用子系统输出的反馈信号锁存输入' 可防止此子系统的输入值在其执行过程中发生变化。↵其他参数可用于显式指定输入信号属性。'
                               BlockKeywords: ""
                                  LinkStatus: 'none'
                            StaticLinkStatus: 'none'
                            PortConnectivity: [1×1 struct]
                                 PortHandles: [1×1 struct]
                                 LineHandles: [1×1 struct]
                          CompiledPortWidths: [0×0 struct]
                      CompiledPortDimensions: [0×0 struct]
                       CompiledPortDataTypes: [0×0 struct]
                           CompiledPortUnits: [0×0 struct]
                  CompiledPortComplexSignals: [0×0 struct]
                       CompiledPortFrameData: [0×0 struct]
                   DataTypeOverride_Compiled: 'UseLocalSettings'
              MinMaxOverflowLogging_Compiled: 'UseLocalSettings'
                                Capabilities: [1×1 Capabilities]
                             IOSignalStrings: []
                               RuntimeObject: [0×1 double]
                         ExtModeUploadOption: 'none'
                     ExtModeLoggingSupported: 'off'
                          ExtModeLoggingTrig: 'off'
                   TargetArchitectureMapping: {}
                                        Port: '1'
                                    PortName: 'input'
                                     Element: ''
                            IsBusElementPort: 'off'
                                 IconDisplay: 'Port number'
                          OutputFunctionCall: 'off'
                                      OutMin: '[]'
                                      OutMax: '[]'
                              OutDataTypeStr: 'Inherit: auto'
                                   LockScale: 'off'
                           BusOutputAsStruct: 'off'
                               BusVirtuality: 'inherit'
                                        Unit: 'inherit'
                              PortDimensions: '-1'
                                  VarSizeSig: 'Inherit'
                                  SampleTime: '-1'
                                  SignalType: 'auto'
                LatchByDelayingOutsideSignal: 'off'
                LatchInputForFeedbackSignals: 'off'
                                 Interpolate: 'on'
                                InputConnect: ''
                                    DataMode: 'inherit'
            MessageQueueUseDefaultAttributes: 'on'
                        MessageQueueCapacity: '1'
                            MessageQueueType: 'LIFO'
                     MessageQueueOverwriting: 'on'
```

可通过`get_param`获取特定属性 (`get`命令同样适用)

```matlab
>> get_param(Handles(1),'PortName')

ans =

    'Input'
```

### 修改属性

Matlab提供了`get` `get_Param`命令获取属性, 同样, 可使用`set` `set_param`

```matlab
set(LineHandle,'MustResolveToSignalObject',0);
```

----

> 由此可见, 句柄是m命令操作模型模块的重要接口
> 
> 针对模型的修改, 通常都是通过筛选符合要求的句柄, 对其属性修改完成的

## 新增模块与信号线

### 新增模块

### 模块的连接

## 修改模型设置