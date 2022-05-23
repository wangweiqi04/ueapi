---
id: dt
title: DT Studio草稿箱交互
hide_title: true
sidebar_label: "在DT Studio中JS与D3OS交互"
---

## 使用方法

以登陆模块为例，JS 调用 D3OS 方法为

```
D3OS("JS2D3OS_LoginState", '{"loginState: 1}', function(res) => {
    console.log(res)
})
```

## 登陆模块

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td><strong>描述</strong></td>
</tr>
<tr>
<td>登录成功隐藏背景加载框</td>
<td>JS2D3OS_LoginState</td>
<td>

```json
{
  "loginState": 1
}
```

</td>
<td> "loginState":1</td>
</tr>
</table>

## 草稿箱

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td style={{minWidth: 200}}><strong>描述</strong></td>
</tr>
<tr>
<td>数据图标点击通知D3OS高亮显示模型,并聚焦过去</td>
<td>CGX_GraphSelect</td>
<td>

```json
{
  "indexCode": 1001,
  "distanceBias": 700.0,
  "color": "255,255,255,255"
}
```

</td>
<td></td>
</tr>

<tr>
<td>H5界面调用D3OS,修改摄像机位置</td>
<td>CGX_SetCameraInfo</td>
<td>

```json
{
  "setLocation": true,
  "location": "-1290.776991,293.67631,99.804696",
  "setRotation": true,
  "rotation": "0.0,355.0,198.427124",
  "setDistance": true,
  "distance": 6999.0888671875,
  "isTranslate": true,
  "translateTime": 2
}
```

</td>
<td>JS通过调用D3OS代码设置摄像机位置区域</td>
</tr>

<tr>
<td>H5界面调用D3OS,获取摄像机位置</td>
<td>CGX_GetCameraInfo</td>
<td>

```json
{}
```

</td>
<td>JS通过调用D3OS代码获取摄像机位置区域</td>
</tr>

<tr>
<td>H5图表关闭功能点击</td>
<td>CGX_ModelInteractionClose</td>
<td>

```json
{
  "indexCode": 1001
}
```

</td>
<td>预览场景H5图表界面关闭功能点击</td>
</tr>

<tr>
<td>H5界面获取热更新模型数据</td>
<td>CGX_HotFixMessage</td>
<td>

```json
{}
```

</td>
<td>H5主动调用热更新模块信息,D3OS回调H5当前有哪些模型已经被下载过了</td>
</tr>

<tr>
<td>H5界面点击下载</td>
<td>CGX_DownLoadModel</td>
<td>

```json
{
  "modelCode": "1b725706-9a11-4aca-a0cb-4b1fada933ce"
}
```

</td>
<td>1.H5主动调用下载模型模块,D3OS回调H5当模型下载完成后通知H5</td>
</tr>

<tr>
<td>H5界面批量下载场景模型</td>
<td>CGX_BatchDownLoad</td>
<td>

```json
{
  "data": [
    "1b725706-9a11-4aca-a0cb-4b1fada933c",
    "1b7206-9a11-4aca-a0cb-4b1fada933c"
  ]
}
```

</td>
<td>批量下载进度回调</td>
</tr>

<tr>
<td>H5界面设置场景坐标轴提示位置</td>
<td>CGX_SetAxisPosition</td>
<td>

```json
{
    "isShow":true
    "axisPostion":"400.0,980.0",
    "axisSize":"100.0,100.0"
}
```

</td>
<td>
"isShow":是否显示<br />
"axisPostion":屏幕坐标位置<br />
"axisSize":图标像素大小</td>
</tr>

<tr>
<td>H5界面三维网格线显示/隐藏按钮点击</td>
<td>CGX_ShowGird</td>
<td>

```json
{
  "isShow": true
}
```

</td>
<td>H5界面三维网格线显示/隐藏按钮点击</td>
</tr>

<tr>
<td>H5快照截图点击</td>
<td>CGX_ScreenShot</td>
<td>

```json
{}
```

</td>
<td>H5快照截图点击通知D3OS,D3OS截图后回调给H5</td>
</tr>

<tr>
<td>H5界面草稿箱详情列表:单个草稿箱详情点击</td>
<td>CGX_Details</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": -1,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false,
      "children": [
        {
          "indexCode": 1001,
          "modelName": "模型名称",
          "modelId": 1000001,
          "modelType": 0,
          "entityLocate": "195,105,101",
          "entityRotate": "10,10,10",
          "entitySize": "1,1,1",
          "entityHide": false,
          "entityLock": false,
          "children": []
        }
      ]
    }
  ]
}
```

</td>
<td>点击单个草稿箱详情时,H5调用接口获取当前草稿箱,组拼数据结构,传递给D3OS(modelType:模型类型 1-场景，2-面板，3-模型)</td>
</tr>

<tr>
<td>H5界面草稿箱列表:单个草稿箱编辑按钮点击</td>
<td>CGX_Editor</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": "1000001",
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false,
      "children": [
        {
          "indexCode": 1001,
          "modelName": "模型名称",
          "modelId": 1000001,
          "modelType": 0,
          "entityLocate": "195,105,101",
          "entityRotate": "10,10,10",
          "entitySize": "1,1,1",
          "entityHide": false,
          "entityLock": false,
          "children": []
        }
      ]
    }
  ]
}
```

</td>
<td>点击单个草稿箱编辑时,H5调用接口获取当前案例,组拼数据结构,传递给D3OS</td>
</tr>

<tr>
<td>H5界面草稿箱创建案例:点击草稿箱案例</td>
<td>CGX_Create</td>
<td>

```json
{}
```

</td>
<td>创建案例:D3OS5进入草稿箱编辑菜单启用对应功能</td>
</tr>

<tr>
<td>H5界面:应用场景列表单个选择按钮点击</td>
<td>CGX_SceneButtonClick</td>
<td>

```json
{
  "indexCode": 1001,
  "modelName": "模型名称",
  "modelId": 1000001,
  "modelType": 1,
  "entityLocate": "0,0,0",
  "entityRotate": "0,0,0",
  "entitySize": "1,1,1",
  "entityHide": false,
  "entityLock": false
}
```

</td>
<td>直接在(0,0,0)点生成场景</td>
</tr>

<tr>
<td>H5界面:拖拽列表单个模型选择按钮点击</td>
<td>CGX_ModelButtonClick</td>
<td>

```json
{
  "indexCode": 1001,
  "modelName": "模型名称",
  "modelId": 1000001,
  "modelType": 1,
  "entityLocate": "0,0,0",
  "entityRotate": "0,0,0",
  "entitySize": "1,1,1",
  "entityHide": false,
  "entityLock": false
}
```

</td>
<td>
1.在点击位置生成模型,跟随鼠标拖拽,检测到地面 <br />
2.Copy单个模型时调用<br />
3.Copy组模型时调用<br />
4.多选复制调用<br />
注意:数组不能包含组的空节点数据只有模型数据</td>
</tr>

<tr>
<td> D3OS场景中鼠标操作模型通知H5更新界面(双方互调)<br />
H5修改参数操作D3OS场景模型</td>
<td>CGX_ModelOperaiton</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    }
  ]
}
```

</td>
<td>告诉H5选中的ID是什么,H5生成界面属性,如果JSON消息体为NULL,则不显示界面<br /><br />
当D3OS场景摄像机视角发生变化时通知H5改变图表的显示状态<br />
isTranslate:false代表没有在移动 <br />
isTranslate:True代表在移动</td>
</tr>

<tr>
<td>H5编辑功能对齐功能点击事件通知</td>
<td>CGX_Align</td>
<td>

```json
{
  "alignType": "X/Y/Z/XY/YZ/XZ/XYZ"
}
```

</td>
<td>h5界面对齐功能点击,基于不同的对齐类型计算对齐方式</td>
</tr>

<tr>
<td> H5编辑功能编组功能点击</td>
<td>CGX_Group</td>
<td>

```json
{
  "isGroup": false
}
```

</td>
<td>h5界面打组功能选择,D3OS把当前选择的所有模型告诉H5</td>
</tr>

<tr>
<td>H5编辑界面阵列复制点击</td>
<td>CGX_ArrayCopy</td>
<td>

```json
{
  "copyType": "X/Y/Z",
  "space": 5,
  "count": 5
}
```

</td>
<td>(单选)h5界面阵列复制功能选择,D3OS把当前选择的所有模型进行Copy</td>
</tr>

<tr>
<td> H5大纲视图界面隐藏点击</td>
<td>CGX_ViewHide</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    },
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    }
  ]
}
```

</td>
<td>h5大纲视图界面隐藏功能选择,D3OS把当前选择的所有模型进行隐藏或显示</td>
</tr>

<tr>
<td> H5大纲视图界面锁定点击</td>
<td>CGX_ViewLock</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    },
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    }
  ]
}
```

</td>
<td>h5大纲视图界面锁定功能选择,D3OS把当前选择的所有模型进行锁定或解锁</td>
</tr>

<tr>
<td> H5大纲视图单个列表选择,或着单个模型选择</td>
<td>CGX_ViewSelect</td>
<td>

```json
{
  "entities": [
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    },
    {
      "indexCode": 1001,
      "modelName": "模型名称",
      "modelId": 1000001,
      "modelType": 0,
      "entityLocate": "195,105,101",
      "entityRotate": "10,10,10",
      "entitySize": "1,1,1",
      "entityHide": false,
      "entityLock": false
    }
  ]
}
```

</td>
<td>h5大纲视图界面列表选择或者单个模型选择,通知D3OS高亮显示所有的Actor</td>
</tr>

<tr>
<td>H5编辑功能切换</td>
<td>CGX_EditorChange</td>
<td>

```json
{
  "EditorType": "Move/Rotate/Scale/Copy/Delete"
}
```

</td>
<td>每次操作从下述选择一个,默认为移动,Move/Rotate/Scale/Copy/Delete</td>
</tr>

<tr>
<td>H5保存案例/发布场景按钮点击时:调用D3OS方法</td>
<td>CGX_SaveOrPulish</td>
<td>

```json
{}
```

</td>
<td>当JS点击按钮保存案例或者发布场景时调用D3OS方法,
D3OS接收到这个消息时回调JS的方法,把当前场景数据传给JS</td>
</tr>

<tr>
<td>H5界面视角切换调用D3OS5方法</td>
<td>CGX_SwitchView</td>
<td>

```json
{
  "viewType": "Perspective/TopView/BottomView/LeftView/RightView/FrontView"
}
```

</td>
<td>当草稿箱界面视图切换时通知D3OS切换相应视图类型<br />
Perspective--透视图<br />
TopView--顶视图<br />
BottomView--底视图<br />
LeftView--左视图<br />
RightView--右视图<br />
FrontView--正视图</td>
</tr>

<tr>
<td>H5界面VR按钮点击通知D3OS创建第一视角功能</td>
<td>CGX_VRButtonClick</td>
<td>

```json
{}
```

</td>
<td>1.当草稿箱界面VR按钮点击,D3OS创建第一视角控制器进行操作<br />
2.当点击ESC按钮时退出预览VR模式,显示H5界面</td>
</tr>

<tr>
<td>H5界面灯光按钮点击通知D3OS改变相关的参数</td>
<td>CGX_LightButtonClick</td>
<td>

```json
{}
```

</td>
<td>当H5界面灯光按钮点击时通知D3OS,D3OS回调JS方法显示灯光参数</td>
</tr>

<tr>
<td>H5界面灯光参数改变通知D3OS改变相关的参数</td>
<td>CGX_LightParameterChange</td>
<td>

```json
{
    "lightIntensity":0.0f-150.0f,//光源强度
    "lightColor":"0-1,0-1,0-1,0-1",//光源颜色
    "lightDir":"0.0f-360.0f,0.0f-360.0f,0.0f-360.0f",//光源角度
    "indirectLightIntensity":0.0-6.0f,//间接光照强度
    "lightShaftOcclusion":false,//光束遮挡是否开启
    "occlusionMaskDarkness":0.0f-1.0f,//光束遮挡暗度
    "lightShaftBloom":false,//光束泛光
    "bloomScale":0.0f-10.0f,//光束泛光强度
    "cloudSpeed":1.0f,//云速度
    "cloudOpacity":0.7f,//云透明度
    "exposureCompensation":-15.0f-15.0f,//曝光补偿
    "bloomMethod":"Standard/Convolution",//光晕计算方式
    "bloomIntensity":0.0f-8.0f//光晕强度
    "globalSaturation":false,//全局饱和度是否开启
    "globalSaturationIntensity":"0-1,0-1,0-1,0-1",//全局饱和度强度
    "globalContrast":false,//全局对比度是否开启
    "globalContrastIntensity":"0-1,0-1,0-1,0-1",//全局对比度强度
    "globalGamma":false,//全局Gamma是否开启
    "globalGammaValue":"0-1,0-1,0-1,0-1",//全局Gamma值
}
```

</td>
<td>当H5界面灯光参数改变时时通知D3OS,D3OS调用场景参数应用当前参数值</td>
</tr>

<tr>
<td>H5界面灯光默认参数按钮点击通知D3OS改变相关的参数</td>
<td>CGX_LightDefaultClick</td>
<td>

```json
{}
```

</td>
<td>当H5界面灯光按钮Default点击时回复默认设置</td>
</tr>

<tr>
<td>H5界面聚光灯按钮点击通知D3OS改变相关的参数</td>
<td>CGX_SportLightParameterChange</td>
<td>

```json
{
    "lightIntensity":0.0f-150.0f,//光源强度
    "lightColor":"0-1,0-1,0-1,0-1",//光源颜色
    "lightDir":"0.0f-360.0f,0.0f-360.0f,0.0f-360.0f",//光源角度
    "attenuationRadius":8.0-5000f,//衰减半径
    "innerConeAngle":0.0-80.0f,//椎体内部角度
    "outConeAngle":0.0f-80.0f,//椎体外部角度
    "sourceRadius":0.0f,//源半径
    "softSourceRadius":0.0f,//软源半径
    "sourceLength":1.0f,//源长度
    "useTemperature":false,//使用色温
    "temperature":1700-12000f,//温度 默认6400
    "affectsWorld":true,//影响场景
    "castShadows":true,//投射阴影
    "indirectLightIntensity":0.0-6.0f,//间接光照强度 1.0
    "volumetricScatteringIntensity":0.0-4.0f,//体积散射强度 1.0
}
```

</td>
<td>当H5界面聚光灯参数改变时时通知D3OS,D3OS调用场景参数应用当前参数值</td>
</tr>

<tr>
<td>H5界面灯光默认参数按钮点击通知D3OS改变相关的参数</td>
<td>CGX_SportLightDefaultClick</td>
<td>

```json
{}
```

</td>
<td>当H5界面灯光按钮Default点击时回复默认设置</td>
</tr>

<tr>
<td>H5界面批量下载场景模型</td>
<td>CGX_ModelInteractionClose</td>
<td>

```json
{
  "indexCode": 1001
}
```

</td>
<td>批量下载进度回调</td>
</tr>

<tr>
<td>H5界面路线功能创建点击</td>
<td>CGX_PathEditor</td>
<td>

```json
{}
```

</td>
<td>当H5界面路径编辑按钮点击时通知D3OS开启创建功能<br/>
1.选中列表路径播放时按Esc中断时通知H5进入编辑态<br/>
2.播放完成时进入通知H5进入编辑态</td>
</tr>

<tr>
<td>H5界面路线功能创建点击</td>
<td>CGX_PathEditor</td>
<td>

```json
{}
```

</td>
<td>当H5界面路径编辑按钮点击时通知D3OS开启创建功能<br/>
1.选中列表路径播放时按Esc中断时通知H5进入编辑态<br/>
2.播放完成时进入通知H5进入编辑态</td>
</tr>

<tr>
<td>H5界面路线功能创建点击</td>
<td>CGX_PathEditor</td>
<td>

```json
{}
```

</td>
<td>当H5界面路径编辑按钮点击时通知D3OS开启创建功能<br/>
1.选中列表路径播放时按Esc中断时通知H5进入编辑态<br/>
2.播放完成时进入通知H5进入编辑态</td>
</tr>

<tr>
<td>H5路径编辑界面修改</td>
<td>CGX_PathChange</td>
<td>

```json
{
  "pathName": "200210102",
  "pathHeight": 150.0,
  "pathTime": 100.0,
  "pathDirection": true,
  "pathAngle": 45.0,
  "pathLoop": false
}
```

</td>
<td>当H5界面路径编辑改变时通知D3OS功能修改:<br/>
"pathName":"路径名称",<br/>
"pathHeight":150.0,高度<br/>
"pathTime":100.0,速度<br/>
"pathDirection":true,正向为true 反向为false<br/>
"pathAngle":45.0,角度<br/>
"pathLoop":false是否循环</td>
</tr>

<tr>
<td>H5界面路径保存</td>
<td>CGX_SavePath</td>
<td>

```json
{}
```

</td>
<td>当H5界面路径编辑按钮点击时通知D3OS开启创建功能</td>
</tr>

<tr>
<td>H5界面路径播放功能</td>
<td>CGX_PlayPath</td>
<td>

```json
{
    "pathName":"200210102",
    "pathHeight":150.0,
    "pathTime":100.0,
    "pathDirection":true,
    "pathAngle":45.0,
    "pathLoop":false
    "pathEntities":[
        {"location":"100,100,100"},
        {"location":"200,100,100"}
    ]
}
```

</td>
<td>当H5界面路径编辑按钮点击时通知D3OS开启创建功能</td>
</tr>

<tr>
<td>D3OS中点击Esc按钮 通知H5界面更新,取消编辑态或者删除路径通知D3OS关闭编辑太</td>
<td>CGX_CancelEditor</td>
<td>

```json
{}
```

</td>
<td>D3OS中点击Esc按钮 通知H5界面更新,取消编辑态</td>
</tr>
</table>

## 应用场景

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td><strong>描述</strong></td>
</tr>
<tr>
<td>应用场景查看功能点击</td>
<td>YYCJ_View</td>
<td>

```json
{
  "indexCode": "100002",
  "UIPos": "400,60",
  "UISize": "1220,1020"
}
```

</td>
<td>点击查看D3OS加载展示面板,生成当前ID对应的模型</td>
</tr>
<tr>
<td>应用场景查看功能退出点击</td>
<td>YYCJ_ViewQuit</td>
<td>

```json
{}
```

</td>
<td>当应用场景详情界面:退出按钮点击</td>
</tr>
</table>

## 模型管理

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td><strong>描述</strong></td>
</tr>
<tr>
<td>模型列表单个模型查看功能点击</td>
<td>MXGL_View</td>
<td>

```json
{
  "indexCode": "100002",
  "UIPos": "400,60",
  "UISize": "1220,1020"
}
```

</td>
<td>点击查看D3OS加载展示面板,生成当前ID对应的模型</td>
</tr>
<tr>
<td>模型查看功能退出点击</td>
<td>MXGL_ViewQuit</td>
<td>

```json
{}
```

</td>
<td>当模型场景详情界面:退出按钮点击</td>
</tr>
</table>

## 程序退出

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td><strong>描述</strong></td>
</tr>
<tr>
<td>程序退出按钮点击</td>
<td>ApplicationQuit</td>
<td>

```json
{}
```

</td>
<td>右上角程序退出按钮点击时退出程序</td>
</tr>
</table>

## 通用

<table>
<tr>
<td style={{minWidth: 150}}><strong>触发场景</strong></td>
<td><strong>接口名称</strong></td>
<td><strong>JSON消息体</strong></td>
<td><strong>描述</strong></td>
</tr>
<tr>
<td>当界面切换的时候销毁场景,或者保存结束或者发布结束</td>
<td>DestroyAll</td>
<td>

```json
{}
```

</td>
<td>当界面切换的时候销毁场景,或者保存结束或者发布结束</td>
</tr>
</table>
