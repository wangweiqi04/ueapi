---
id: functions
sidebar_label: "Functions"
displayed_sidebar: api
---

# 全局静态函数

<table>
<tr><td style={{minWidth: 150}}> 函数名称 </td> <td style={{maxWidth: 150}}> 消息类型 </td> <td>JSON消息体</td></tr>
<tr><td> 界面三维网格线显示/隐藏按钮点击 </td>
<td>CGX_ShowGird</td>
<td>

```json
{
  "isShow": true
}
```

</td></tr>

<tr><td>H5快照截图点击</td>
<td> CGX_ScreenShot</td>
<td>

```json
{}
```

</td></tr>
<tr><td>H5界面草稿箱详情列表:单个草稿箱详情点击</td>
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

</td></tr>

<tr><td>H5界面草稿箱列表:单个草稿箱编辑按钮点击</td>
<td>CGX_Editor</td>
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

</td></tr>

<tr><td>H5界面草稿箱创建案例:点击草稿箱案例</td>
<td>CGX_Create</td>
<td>

```json
{}
```

</td></tr>

<tr><td>H5界面:应用场景列表单个选择按钮点击</td>
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

</td></tr>

<tr><td>H5界面:拖拽列表单个模型选择按钮点击</td>
<td>CGX_ModelButtonClick</td>
<td>

```json
{
  "indexCode": "",
  "modelName": "模型名称",
  "modelId": 1000001,
  "modelType": 0,
  "entityLocate": "195,105,101",
  "entityRotate": "10,10,10",
  "entitySize": "1,1,1",
  "entityHide": false,
  "entityLock": false
}
```

</td></tr>

<tr><td> D3OS操作界面删除Actor点击D3OS场景中鼠标操作模型通知H5更新界面(双方互调)H5修改参数操作D3OS场景模型</td>
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

</td></tr>

<tr><td>H5编辑功能对齐功能点击事件通知</td>
<td>CGX_Align</td>
<td>

```json
{
  "alignType": "X/Y/Z/XY/YZ/XZ/XYZ"
}
```

</td></tr>

<tr><td>H5编辑功能编组功能点击</td>
<td>CGX_Group</td>
<td>

```json
{
  "isGroup": false
}
```

</td></tr>

<tr><td>H5编辑界面阵列复制点击</td>
<td>CGX_ArrayCopy</td>
<td>

```json
{
  "copyType": "X/Y/Z",
  "space": 5,
  "count": 5
}
```

</td></tr>

<tr><td>键盘功能按钮点击,D3OS通知JSH5大纲视图界面隐藏点击</td>
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

</td></tr>

<tr><td>H5大纲视图界面锁定点击</td>
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

</td></tr>

<tr><td> H5大纲视图单个列表选择,或着单个模型选择</td>
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

</td></tr>

<tr><td>H5编辑功能切换</td>
<td>CGX_EditorChange</td>
<td>

```json
{
  "EditorType": "Move/Rotate/Scale/Copy/Delete"
}
```

</td></tr>

<tr><td>H5保存案例/发布场景按钮点击时:调用D3OS方法</td>
<td>CGX_SaveOrPulish</td>
<td>

```json
{}
```

</td></tr>

<tr><td>H5界面视角切换调用D3OS5方法</td>
<td>CGX_SwitchView</td>
<td>

```json
{
  "viewType": "Perspective/TopView/BottomView/LeftView/RightView/FrontView"
}
```

</td></tr>

<tr><td>H5界面VR按钮点击通知D3OS创建第一视角功能</td>
<td>CGX_VRButtonClick</td>
<td>

```json
{}
```

</td></tr>

<tr><td>H5界面灯光按钮点击通知D3OS改变相关的参数</td>
<td>CGX_LightButtonClick</td>
<td>

```json
{}
```

</td></tr>

<tr><td>H5界面灯光参数改变通知D3OS改变相关的参数</td>
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

</td></tr>

<tr><td>H5界面灯光默认参数按钮点击通知D3OS改变相关的参数</td>
<td>CGX_LightDefaultClick</td>
<td>

```json
{}
```

</td></tr>
<tr><td>H5界面聚光灯按钮点击通知D3OS改变相关的参数</td>
<td>CGX_SportLightButtonClick</td>
<td>

```json
{}
```

</td></tr>
<tr><td>H5界面聚光灯光参数改变通知D3OS改变相关的参数</td>
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

</td></tr>

<tr><td>H5界面灯光默认参数按钮点击通知D3OS改变相关的参数</td>
<td>CGX_SportLightDefaultClick</td>
<td>

```json
{}
```

</td></tr>

<tr><td>H5界面路线功能创建点击</td>
<td>CGX_PathEditor</td>
<td>

```json
{}
```

</td></tr>

<tr><td> H5路径编辑界面修改</td>
<td>  CGX_PathChange
</td>
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

</td></tr>
<tr><td> H5界面路径保存</td>
<td>  CGX_SavePath
</td>
<td>

```json
{}
```

</td></tr>
<tr><td> H5界面路径播放功能</td>
<td>  CGX_PlayPath
</td>
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

</td></tr>
<tr><td> D3OS中点击Esc按钮 通知H5界面更新,取消编辑态或者删除路径通知D3OS关闭编辑太</td>
<td>  CGX_CancelEditor
</td>
<td>

```json
{}
```

</td></tr>

<tr><td> 应用场景查看功能点击</td>
<td> YYCJ_View
</td>
<td>

```json
{
  "indexCode": "100002",
  "UIPos": "400,60",
  "UISize": "1220,1020"
}
```

</td></tr>

<tr><td> 应用场景查看功能退出点击</td>
<td> YYCJ_ViewQuit
</td>
<td>

```json
{}
```

</td></tr>

<tr><td> 模型列表单个模型查看功能点击</td>
<td> MXGL_View
</td>
<td>

```json
{
  "indexCode": "100002",
  "UIPos": "400,60",
  "UISize": "1220,1020"
}
```

</td></tr>

<tr><td> 模型查看功能退出点击</td>
<td> MXGL_ViewQuit
</td>
<td>

```json
{}
```

</td></tr>

<tr><td> 程序退出按钮点击</td>
<td> ApplicationQuit
</td>
<td>

```json
{}
```

</td></tr>
<tr><td> 当界面切换的时候销毁场景,或者保存结束或者发布结束</td>
<td> DestroyAll
</td>
<td>

```json
{}
```

</td></tr>

</table>
