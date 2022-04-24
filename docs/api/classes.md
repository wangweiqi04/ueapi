---
id: classes
sidebar_label: "Classes"
displayed_sidebar: api
---

# Classes ObjectInstance 放置在场景中的模型实例

## Variables

| 类型       | 名称     | 描述                   |
| ---------- | -------- | ---------------------- |
| string     | name     | 模型在场景中的名字     |
| D3OSVector | Position | 获取模型在场景中的位置 |
| D3OSVector | Rotation | 获取模型在场景中的旋转 |

## Functions

| 返回值类型                | 名称                                                                  | 描述                  |
| ------------------------- | --------------------------------------------------------------------- | --------------------- |
| `List<string>`            | `D3OSGetCompoentsByClass(string modelID,string compontentName)`       | 获取模型指定组件      |
| `bool`                    | `D3OSAddCompoentByClass(string modelID,string compontentName)`        | 给模型添加组件        |
| `void`                    | `D3OSDestroyCompoent(string modelID,string compontentName)`           | 销毁模型指定组件      |
| `void`                    | `D3OSActiveCompoent(string modelID,string compontentName,bool reset)` | 激活模型指定组件      |
| `void`                    | `D3OSDeActiveCompoent(string modelID,string compontentName)`          | 禁用模型指定组件      |
| `bool`                    | `D3OSIsActiveCompoent(string modelID,string compontentName)`          | 模型指定组件是否启用  |
| `void`                    | `D3OSSetActorLocation(string modelID,string location)`                | 设置模型位置          |
| `void`                    | `D3OSSetActorRotation(string modelID,string location)`                | 设置模型旋转          |
| `void`                    | `D3OSSetActorScale3D(string modelID,string scale)`                    | 设置模型缩放          |
| `string`                  | `D3OSGetActorLocation(string modelID)`                                | 获取模型位置          |
| `string`                  | `D3OSGetActorRotation(string modelID)`                                | 获取模型旋转          |
| `string`                  | `D3OSGetActorScale3D(string modelID)`                                 | 获取模型缩放          |
| `void`                    | `SetActorHideInGame(string modelID,bool hideState)`                   | 设置模型是否隐藏      |
| `bool`                    | `GetActorHideInGame(string modelID)`                                  | 获取模型是否隐藏      |
| `void`                    | `SetActorEnableCollision(string modelID,bool enbaleCollision)`        | 设置模型碰撞          |
| `bool`                    | `GetActorEnableCollision(string modelID)`                             | 获取碰撞              |
| `void`                    | `SetIntensity(float intensity)`                                       | 设置灯光强度          |
| `void`                    | `SetLightColor(D3OSLinearColor lightColor)`                           | 设置灯光颜色          |
| `void`                    | `SetLightDirection(FRotator rotation)`                                | 设置灯光角度          |
| `void`                    | `SetIndirectLightingIntensity(float intensity)`                       | 设置间接光照强度      |
| `void`                    | `SetEnableLightShaftOcclusion(bool isOn)`                             | 设置开启光束遮挡      |
| `void`                    | `SetEnableLightShaftOcclusion(bool isOn)`                             | 设置开启光束遮挡      |
| `void`                    | `SetOcclusionMaskDarkness(float darkness)`                            | 设置光束遮挡强度      |
| `void`                    | `SetEnableLightShaftBloom(bool isOn)`                                 | 设置光束散射          |
| `void`                    | `SetBloomScale(float bloomScale)`                                     | 设置光束散射强度      |
| `void`                    | `SetCloudSpeed(float speed)`                                          | 设置云移动速度        |
| `void`                    | `SetCloudOpacity(float opacity)`                                      | 设置云透明度          |
| `float`                   | `GetIntensity()`                                                      | 获取灯光强度          |
| `D3OSLinearColor`         | `GetLightColor()`                                                     | 获取灯光颜色          |
| `D3OSRotator`             | `GetLightDirection()`                                                 | 获取灯光角度          |
| `float`                   | `GetIndirectLightingIntensity()`                                      | 获取间接光照强度      |
| `bool`                    | `GetEnableLightShaftOcclusion()`                                      | 获取开启光束遮挡      |
| `float`                   | `GetOcclusionMaskDarkness()`                                          | 获取光束遮挡强度      |
| `bool`                    | `GetEnableLightShaftBloom()`                                          | 获取光束散射          |
| `float`                   | `GetBloomScale()`                                                     | 获取光束散射强度      |
| `float`                   | `GetCloudSpeed()`                                                     | 获取云移动速度        |
| `float`                   | `GetCloudOpacity()`                                                   | 获取云透明度          |
| `void`                    | `SetPostProcess(D3OSPostProcessSettings process)`                     | 设置后处理参数        |
| `D3OSPostProcessSettings` | `GetPostProcess()`                                                    | 获取后处理参数        |
| `void`                    | `SpawnActorByPath(String namePath)`                                   | 根据路径生成物体      |
| `void`                    | `D3OSLoadClass(String namePath)`                                      | 动态加载类蓝图        |
| `void`                    | `D3OSLoadObject(String namePath)`                                     | 动态加载资源          |
| `void`                    | `D3OSStringToColor(String colorStr,D3OSLinearColor color)`            | 字符串转颜色          |
| `void`                    | `D3OSColorToString(D3OSLinearColor color,String colorStr)`            | 颜色转字符串          |
| `void`                    | `D3OSRotatorToString(D3OSRotator rotator, String RotatorStr)`         | D3OSRotator 转字符串  |
| `void`                    | `D3OSVectorToString(D3OSVector vector, String VectorStr)`             | D3OSVector 转字符串   |
| `void`                    | `D3OSStringToRotator(String RotatorStr, D3OSRotator rotator)`         | 字符串转 D3OSRotator  |
| `void`                    | `D3OSStringToVector(String VectorStr, D3OSVector vector)`             | 字符串转 D3OSVector   |
| `void`                    | `D3OSVector4ToString(D3OSVector4 Vector4, String vector4Str)`         | D3OSVector4 转字符串  |
| `void`                    | `D3OSStringToVector4(String vector4Str, D3OSVector4 vector4)`         | 字符串转 D3OSVector4  |
| `void`                    | `D3OSVector2DToString(D3OSVector2D Vector2D, String vector2DStr)`     | D3OSVector2D 转字符串 |
| `void`                    | `D3OSStringToVector2D(String vector2DStr, D3OSVector2D vector2D)`     | 字符串转 D3OSVector2D |
| `void`                    | `SetCastShadow(bool cast)`                                            | 设置模型是否投射阴影  |
| `void`                    | `SetMaterial(int32 index,Material material)`                          | 设置模型材质          |
| `void`                    | `SetVisibility(bool visibility)`                                      | 设置模型可见性        |
| `bool`                    | `GetCastShadow()`                                                     | 获取模型是否投射阴影  |
| `Material`                | `GetMaterial(int32 index)`                                            | 获取模型材质          |
| `bool`                    | `GetVisibility()`                                                     | 获取模型可见性        |
